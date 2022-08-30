<?php
		$filename = $_POST['filename'];
		$src = "../".$_POST['src'];
		$img = $_POST['src'];
		$imagen_w = $_POST['imagen_w'];
		$imagen_h = $_POST['imagen_h'];
		$tipo = $_POST['tipo'];
		$largo= ($imagen_h * 500)/$imagen_w;
		chmod($src,0777);
		$imagen_nueva= imagecreatetruecolor(500,$largo);
		if($tipo=="image/jpg" OR $tipo=="image/jpeg"){
			$imagen_vieja= imagecreatefromjpeg($src);
		}
		if($tipo=="image/png"){
			$imagen_vieja= imagecreatefrompng($src);
		}
	    imagecopyresampled($imagen_nueva, $imagen_vieja, 0, 0, 0, 0,500, $largo, $imagen_w, $imagen_h);
	    if($tipo=="image/jpg" OR $tipo=="image/jpeg"){
			imagejpeg($imagen_nueva,$src);
		}
		if($tipo=="image/png"){
			imagepng($imagen_nueva,$src);
		}
		chmod($src,0777);
		session_start();
		$id_user=$_SESSION['id_user'];
		$guardar_en="../assets/img/avatares/".$id_user;
		$mini="../assets/img/avatares/mini/".$id_user;
		if (!file_exists($mini)) {
			mkdir($mini, 0777, true);
			chmod($mini,0777);
		}
		$save = "assets/img/avatares/".$id_user."/".$id_user.$filename;
		$save2 = "assets/img/avatares/mini/".$id_user."/".$id_user.$filename;
		include "conexion.php";
									require_once '../assets/PHPThumb/ThumbLib.inc.php';
									  $thumb = PhpThumbFactory::create($src);
									  $thumb->crop($_POST['x'],$_POST['y'],$_POST['w'],$_POST['h']);
											$file = glob($guardar_en.'/*'); //Lee los datos de la carpeta img
											foreach($file as $file){
												if(is_file($file))		//Si contiene archivos, los elimina
													unlink($file);
											}
										$direccion = $guardar_en."/".$id_user.$filename;
									  $thumb->save($direccion);
									  chmod($direccion,0777);
									 //Asigna la dirección

									  	$imagen_nueva= imagecreatetruecolor(100,100);
										if($tipo=="image/jpg" OR $tipo=="image/jpeg"){
											$imagen_vieja= imagecreatefromjpeg($direccion);
										}
										if($tipo=="image/png"){
											$imagen_vieja= imagecreatefrompng($direccion);
										}
									    imagecopyresampled($imagen_nueva, $imagen_vieja, 0, 0, 0, 0,100, 100, 300, 300);
									    $direccion2 = $mini."/".$id_user.$filename;
									    $file = glob($mini.'/*'); //Lee los datos de la carpeta img
											foreach($file as $file){
												if(is_file($file))		//Si contiene archivos, los elimina
													unlink($file);
										}
									    if($tipo=="image/jpg" OR $tipo=="image/jpeg"){
											imagejpeg($imagen_nueva,$direccion2);
										}
										if($tipo=="image/png"){
											imagepng($imagen_nueva,$direccion2);
										}
										chmod($direccion2,0777);
										$result = pg_query("UPDATE datos SET imagen = '$save', imagen_min = '$save2' WHERE id_user = $id_user")or die ('Invalid query: ' . pg_last_error());
											if(!$result){
												$res["res"]="fail";
											}else{
												$res["imagen"]=$save;
												$res["res"]="success";
											}
											$_SESSION['imagen']=$save;

print json_encode($res);