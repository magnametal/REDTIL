		<?php
			include "security.php";
			include "conexion.php";
			$id_pen = $_POST["id_pen"];
			$texto = $_POST["texto"];
			$texto = limpiar($texto);
			session_start();
			$id_user=$_SESSION["id_user"];
			$insertar_comment= pg_query("INSERT INTO pend_comen (id_user, id_pen, mensaje) VALUES ('$id_user', '$id_pen', '$texto')
					")or die("Error en insertar_comment: " . pg_last_error());
				if($insertar_comment){
					$res["res"]="success";
				}else{
					$res["res"]="fail";
				}

				print json_encode($res);
	