		<?php
			include "conexion.php";
			$id_user = $_POST["id_user"];
			$id_pen = $_POST["id_pen"];
			session_start();
			$fundador=$_SESSION["id_user"];
			$nombre=$_SESSION["nombre"];
			$apellido=$_SESSION["apellido"];
			$resultado = pg_query("UPDATE solicitud_colectivo SET id_status_colectivo = 2 WHERE id_pen = '$id_pen' AND  id_user = '$id_user'");
				$selec_url_data= pg_query ("SELECT titulo_pen FROM pendiente WHERE id_pen='$id_pen'")or die("Error en: $selec_url: " . pg_last_error());
						while ($row = pg_fetch_array($selec_url_data))
						{	
							$titulo_pen=$row['titulo_pen'];
							break;
						}

					$mensaje=$nombre." ".$apellido." Ha rechazado tu solicitud para formar parte de la tarea <strong>".$titulo_pen."</strong>.";
					$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, mensaje) VALUES ('$id_user', '$fundador', 5, '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
													
				if($resultado){
					$res["res"]="success";
				}else{
					$res["res"]="fail";
				}

				print json_encode($res);
	