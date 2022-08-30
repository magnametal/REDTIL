<?php

 /*parameters are $image =source image name $width = target width $height = height of image $scale = scale of image*/ 
 function resizeImage($image,$width,$height,$scale) { 
 //generate new image height and width of source image 
 	$newImageWidth = ceil($width * $scale); 
 	$newImageHeight = ceil($height * $scale); 
 //Create a new true color image 
 	$newImage = imagecreatetruecolor($newImageWidth,$newImageHeight); 
 //Create a new image from file 
 	$source = imagecreatefromjpeg($image); 
 //Copy and resize part of an image with resampling 
 	imagecopyresampled($newImage,$source,0,0,0,0,$newImageWidth,$newImageHeight,$width,$height); 
 //Output image to file 
 	imagejpeg($newImage,$image,90); 
 //set rights on image file 
 	chmod($image, 0777); 
 //return crop image 
 	return $image; 
 } 
		$id_user=$_POST["id_user"];
		include "conexion.php";
		$valido=false;
		if($_FILES["img"]!="" AND $_FILES["img"]!=null){
		$file = $_FILES["img"];
		$name = $file["name"];
		$tipo = $file["type"];
		$ruta_provisional = $file["tmp_name"];
		}
		$ruta_provisional = resizeImage($ruta_provisional,300,300,1);

		if($_FILES["img"]==""){
			$res["res"]="vacio";
		}else if($tipo !='image/jpg' && $tipo !='image/jpeg' && $tipo !='image/png'){
			$res["res"]="formato";
		}else{ $valido=true; }//end-else

		if($valido==true){ //Verifica que el archivo tenga las dimensiones correctas

									$hacia = "../assets/img/avatares/".$id_user;
									if (!file_exists($hacia)) {
									    mkdir($hacia, 0777, true);
									}else{
										$file = glob($hacia.'/*'); //Lee los datos de la carpeta img
										foreach($file as $file){
											if(is_file($file))		//Si contiene archivos, los elimina
												unlink($file);
										}
									}
									if($tipo=="image/jpg"){
									$src = $hacia."/".$name;
									}
									if($tipo=="image/jpeg"){
									$src = $hacia."/".$name;
									}
									if($tipo=="image/png"){
									$src = $hacia."/".$name;
									}

									rename ($ruta_provisional,$src);
									$carpeta = "assets/img/avatares/".$id_user."/";
										if($tipo=="image/jpg"){
										$img = $carpeta.$name;
										}
										if($tipo=="image/jpeg"){
										$img = $carpeta.$name;
										}
										if($tipo=="image/png"){
										$img = $carpeta.$name;
										}
									 //Asigna la dirección
										$result = pg_query("UPDATE datos SET imagen = '$img' WHERE id_user = $id_user")or die ('Invalid query: ' . pg_last_error());
											if(!$result){
												$res["res"]="fail";
											}else{
												$res["imagen"]=$img;
												$res["res"]="success";
											}
		}else{
			$res["res"]="fail";
		}



print json_encode($res);