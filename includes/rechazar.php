		<?php
			include "conexion.php";
			include "security.php";
			$id_doc = $_POST["id_doc"];
			$nota = $_POST["nota"];
			$nota = limpiar($nota);

			$sql= pg_query ("SELECT tipo_doc, titulo_doc, cargado_por FROM documento WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
			while ($row1 = pg_fetch_array($sql))
								{	
									$tipo_doc=$row1['tipo_doc'];
									$titulo_doc=$row1['titulo_doc'];
									$cargado_por=$row1['cargado_por'];
								}
			if($nota!=null AND $nota!=""){
			$resp = pg_query("UPDATE documento SET valido = 'R', nota_admin='$nota' WHERE id_doc = '$id_doc'");
			}else{
			$resp = pg_query("UPDATE documento SET valido = 'R' WHERE id_doc = '$id_doc'");	
			}
				if($resp){
												if($tipo_doc=="I"){
												if($nota!=null AND $nota!=""){
													$mensaje="La investigación con el título <strong>".$titulo_doc."</strong> ha sido rechazada por los administradores de RedTIL. Has recibido la siguiente nota informativa:".$nota.".<br> Por favor te invitamos a registrar tu investigación nuevamente, verificando la legitimidad de los datos.";
												}else{
													$mensaje="La investigación con el título <strong>".$titulo_doc."</strong> ha sido rechazada por los administradores de RedTIL. Por favor te invitamos a registrar tu investigación nuevamente, verificando la legitimidad de los datos.";
												}
												$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, id_doc, mensaje) VALUES ('$cargado_por', 1, 3, '$id_doc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
												}
												

											if($tipo_doc=="L"){

												if($nota!=null AND $nota!=""){
													$mensaje="El libro con el título <strong>".$titulo_doc."</strong> ha sido rechazada por los administradores de RedTIL. Has recibido la siguiente nota informativa:".$nota.".<br> Por favor te invitamos a registrar tu libro nuevamente, verificando la legitimidad de los datos.";
												}else{
													$mensaje="El libro con el título <strong>".$titulo_doc."</strong> ha sido rechazada por los administradores de RedTIL. Por favor te invitamos a registrar tu libro nuevamente, verificando la legitimidad de los datos.";
												}
												$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify,  id_doc, mensaje) VALUES ('$cargado_por', 1, 2, '$id_doc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
											}
					$res["res"]="success";

				}else{
					$res["res"]="fail";
				}

				print json_encode($res);
	