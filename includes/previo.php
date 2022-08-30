<?php


 		session_start();
		$id_user=$_SESSION["id_user"];
		include "conexion.php";
		$valido=true;
		if($_FILES["img1"]!="" AND $_FILES["img1"]!=null){
		$file = $_FILES["img1"];
		$name = $file["name"];
		$tipo = $file["type"];
		$ruta_provisional = $file["tmp_name"];
		$dimensiones = @getimagesize($ruta_provisional); //Obtiene las dimensiones del archivo.
		$size = $file["size"];
		$ancho = $dimensiones[0];
		$largo = $dimensiones[1];
		$res["ancho"]= $ancho;
		$res["largo"] = $largo;
		}

		if($_FILES["img1"]==""){
			$res["res"]="vacio";
			$valido=false;
		}
		if($tipo !='image/jpg' && $tipo !='image/jpeg' && $tipo !='image/png' OR $size > 2048*2048 OR $ancho > 2000 OR $largo > 2000){
			$res["res"]="formato";
			$res["tipo"]=$tipo;
			$valido=false;
		}

		if($valido==true){ //Verifica que el archivo tenga las dimensiones correctas
									$hacia = "../assets/img/avatares/".$id_user;
									$src = $hacia."/0".$name;
									if (!file_exists($hacia)) {
									    mkdir($hacia, 0777, true);
									}
									if (file_exists($src)) {
											unlink($src);
									}

									if(file_exists($hacia)){
										chmod($ruta_provisional,0755);
										rename($ruta_provisional,$src);
										chmod($src,0777);
										$carpeta = "assets/img/avatares/".$id_user."/";
										$img = $carpeta."0".$name;

										 //Asigna la dirección
													$res["imagen"]=$img;
													$res["tipo"]=$tipo;
													$res["res"]="success";
									}else{
										$res["res"]="carpeta";
									}
									
		}



print json_encode($res);