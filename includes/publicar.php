<?php
include "security.php";
$id_user=null;
$public=null;
$link=null;
$receptor=null;
$tipo_p=null;
$src_crop=null;
$filename=null;
$tipo_img=null;
				session_start();
				$id_user=$_SESSION["id_user"];
$public=$_POST["public"];
$public = limpiar($public);
$link=$_POST["link"];
$link = limpiar($link);
$tipo_p=$_POST["tipo_p"];
$tipo_p = limpiar($tipo_p);
$res["link"]=$link;

		if($tipo_p=="mixto" OR $tipo_p=="file"){
            $tipo_img=$_POST["tipo_img"];
            $src_crop=$_POST["src_crop"];
            $filename=$_POST["filename"];
            $hacia = "../assets/img/post/".$id_user;

            $imagen_w = $_POST['imagen_w'];
            $imagen_h = $_POST['imagen_h'];
            $largo= ($imagen_h * 500)/$imagen_w;
			$src = "../".$src_crop;
			$imagen_nueva= imagecreatetruecolor(500,$largo);
			if($tipo_img=="image/jpg" OR $tipo_img=="image/jpeg"){
				$imagen_vieja= imagecreatefromjpeg($src);
			}
			if($tipo_img=="image/png"){
				$imagen_vieja= imagecreatefrompng($src);
			}
		    imagecopyresampled($imagen_nueva, $imagen_vieja, 0, 0, 0, 0, 500, $largo, $imagen_w, $imagen_h);
		    if($tipo_img=="image/jpg" OR $tipo_img=="image/jpeg"){
				imagejpeg($imagen_nueva,$src);
			}
			if($tipo_img=="image/png"){
				imagepng($imagen_nueva,$src);
			}
			$src2 = $hacia."/".$filename;
				if (!file_exists($hacia)) {
						mkdir($hacia, 0777, true);
				}else{
					if (file_exists($src2)) {
						unlink($src2);
					}
				}
					chmod($src,0777);
					rename ($src,$src2);
					chmod($src2,0777);
                       if (file_exists($src_crop)) {
						unlink($src_crop);
					   }
					
					$carpeta = "assets/img/post/".$id_user."/";
					$img = $carpeta.$filename;

		}

				include "conexion.php";
				$selec_url= pg_query ("SELECT id_user FROM usuario WHERE url_perfil='$link'")or die("Error en: $selec_url: " . pg_last_error());
				$cantidad=pg_num_rows($selec_url);
				if($cantidad>0){
				while ($row = pg_fetch_array($selec_url))
				{	
					$receptor=$row['id_user'];
					break;
				}

				if($tipo_p=="mixto"){
					$mensaje="Ha publicado una foto en tu perfil";
					$resultado = pg_query("INSERT INTO publicacion (id_user, receptor, id_t_publicacion, mensaje, img) VALUES ('$id_user', '$receptor', 3, '$public', '$img')")or die("Error en insertar1 publicacion: " . pg_last_error());
				}
				if($tipo_p=="file"){
					$mensaje="Ha publicado una foto en tu perfil";
					$resultado = pg_query("INSERT INTO publicacion (id_user, receptor, id_t_publicacion, img) VALUES ('$id_user', '$receptor', 2, '$img')")or die("Error en insertar2 publicacion: " . pg_last_error());
				}
				if($tipo_p=="texto"){
					$mensaje="Ha publicado un mensaje en tu perfil";
					$resultado = pg_query("INSERT INTO publicacion (id_user, receptor, id_t_publicacion, mensaje) VALUES ('$id_user', '$receptor', 1, '$public')")or die("Error en insertar3 publicacion: " . pg_last_error());
				}

				if($id_user!=$receptor){
					$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, mensaje) VALUES ('$receptor', '$id_user', 1, '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
				}
				
				if($resultado){  
				$res["res"]="success";
				
					if($id_user==$receptor){
						$res["miperfil"]="verdadero";
					}else{
						$res["id_user"]=$receptor;
						$res["miperfil"]="falso";
					}
				}else{
					$res["res"]="fail";
				}
			}else{
				$res["res"]="fail";
			}
			

			print json_encode($res);


?>