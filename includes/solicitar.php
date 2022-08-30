		<?php
			include "conexion.php";
			$id_pen = $_POST["id_pen"];
			session_start();
			$id_user=$_SESSION["id_user"];
			$nombre=$_SESSION["nombre"];
			$apellido=$_SESSION["apellido"];
			$resultado = pg_query("INSERT INTO solicitud_colectivo (id_pen, id_user, id_status_colectivo) VALUES ('$id_pen', '$id_user', 3)")or die("Error en insertar resultado: " . pg_last_error());


					$selec_url_data= pg_query ("SELECT id_user, titulo_pen FROM pendiente WHERE id_pen='$id_pen'")or die("Error en: $selec_url: " . pg_last_error());
						while ($row = pg_fetch_array($selec_url_data))
						{	
							$fundador=$row['id_user'];
							$titulo_pen=$row['titulo_pen'];
							break;
						}

					$mensaje=$nombre." ".$apellido." Ha solicitado unirse a tu tarea pendiente <strong>".$titulo_pen."</strong>.";
					$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, mensaje) VALUES ('$fundador', '$id_user', 5, '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
													
				if($resultado){
					$res["res"]="success";
				}else{
					$res["res"]="fail";
				}

				print json_encode($res);
	