		<?php
			include "security.php";
			include "conexion.php";
			$id_doc = $_POST["id_doc"];
			$texto = $_POST["texto"];
			$texto = limpiar($texto);
			session_start();
			$id_user=$_SESSION["id_user"];
			$insertar_comment= pg_query("INSERT INTO comentario (id_user, id_doc, mensaje) VALUES ('$id_user', '$id_doc', '$texto')
					")or die("Error en insertar_comment: " . pg_last_error());
				if($insertar_comment){
					$res["res"]="success";
				}else{
					$res["res"]="fail";
				}

				print json_encode($res);
	