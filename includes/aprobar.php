		<?php
			include "conexion.php";
			$id_doc = $_POST["id_doc"];
			$resp = pg_query("UPDATE documento SET valido = 'V' WHERE id_doc = '$id_doc'");

			$sql= pg_query ("SELECT tipo_doc, titulo_doc, cargado_por FROM documento WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
			while ($row1 = pg_fetch_array($sql))
								{	
									$tipo_doc=$row1['tipo_doc'];
									$titulo_doc=$row1['titulo_doc'];
									$cargado_por=$row1['cargado_por'];
								}
											if($tipo_doc=="I"){
												
												$mensaje="La investigación con el título <strong>".$titulo_doc."</strong> ha sido publicada con éxito. Gracias por contribuir a la Red Científica.";
												$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, id_doc, mensaje) VALUES ('$cargado_por', 1, 3, '$id_doc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
												}
												

											if($tipo_doc=="L"){

												$mensaje="El libro con el título <strong>".$titulo_doc."</strong> ha sido publicado con éxito. Gracias por contribuir a la Red Científica. Se ha agregado el libro a tus favoritos.";
												$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify,  id_doc, mensaje) VALUES ('$cargado_por', 1, 2, '$id_doc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
												$resultado2 = pg_query("INSERT INTO mis_libros (id_user, id_doc) VALUES ('$cargado_por' ,'$id_doc')")or die("Error en insertar resultado2: " . pg_last_error());
											}
			$sql= pg_query ("SELECT id_autor FROM autoria WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
							while ($row = pg_fetch_array($sql))
							{
								$id_autor=$row['id_autor'];
								$sql1= pg_query ("SELECT id_user FROM autor WHERE id_autor='$id_autor'")or die("Error en: $sql1: " . pg_last_error());
								while ($row1 = pg_fetch_array($sql1))
								{
									$id_receptor=$row1['id_user'];
									if($id_receptor!=null){
											if($tipo_doc=="I"){
												
												$mensaje="Tu investigación con el título <strong>".$titulo_doc."</strong> ha sido publicada con éxito. Te hemos identificado como autor del contenido y podrás verlo en tus investigaciones.";
												$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, id_doc, mensaje) VALUES ('$id_receptor', 1, 3, '$id_doc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
												}
												

											if($tipo_doc=="L"){
												$mensaje="Tu libro con el título <strong>".$titulo_doc."</strong> ha sido publicado con éxito. Te hemos identificado como autor del contenido y podrás verlo en tus libros.";
												$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify,  id_doc, mensaje) VALUES ('$id_receptor', 1, 2, '$id_doc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
											}
									}
								}
							}
				if($resp){
					$res["res"]="success";
				}else{
					$res["res"]="fail";
				}

				print json_encode($res);
	