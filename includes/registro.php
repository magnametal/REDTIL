<?php
include "security.php";
$correo=null;
$cedula=null;
$nombre = null;
$apellido = null;
$clave1 = null;
$clave2 = null;
$clave = null;
$municipio=null;
$estado=null;
$ciudad=null;
$url_perfil=null;
$url_perfil=$_POST["url_perfil"];
$url_perfil = limpiar($url_perfil);
$municipio=$_POST["municipio"];
$municipio = limpiar($municipio);
$estado=$_POST["estado"];
$estado = limpiar($estado);
$ciudad=$_POST["ciudad"];
$ciudad = limpiar($ciudad);
$correo = $_POST["correo_reg"];
$correo = limpiar($correo);
$cedula = $_POST["cedula"];
$cedula = limpiar($cedula);
$nombre = $_POST["nombre"];
$nombre = limpiar($nombre);
$apellido = $_POST["apellido"];
$apellido = limpiar($apellido);
$clave1 = $_POST["clave_reg"];
$presecret = $_POST["presecret"];
$presecret = limpiar($presecret);
$resecret = $_POST["resecret"];
$resecret = limpiar($resecret);
$clave2 = $_POST["re_clave"];
$clave = MD5($clave1);

$V = strpos($cedula, "V-");
$E = strpos($cedula, "E-");
$P = strpos($cedula, "P-");
if($V!==false || $E!==false || $P!==false){

			if($presecret!=''&& $resecret!='' && $correo!='' && $cedula!='' && $nombre!='' && $apellido!='' && $clave1!='' && $clave2!='' && $clave2==$clave1 &&
			$correo!=null && $presecret!=null && $resecret!=null && $cedula!=null && $nombre!=null && $apellido!=null && $clave1!=null && $clave2!=null){
								include "conexion.php";
								$select_usuarios= pg_query("SELECT * from usuario where (correo='$correo') OR (cedula='$cedula')")or die("Error en consultar usuario: " . pg_last_error());
								$cantidad_select = pg_num_rows($select_usuarios);
								if($cantidad_select==0){
									$resultado = pg_query("INSERT INTO usuario (cedula, correo, clave, activacion, resecret, presecret, url_perfil) VALUES ('$cedula', '$correo', '$clave', 'V', '$resecret', '$presecret', '$url_perfil')")or die("Error en insertar usuario: " . pg_last_error());
									$sql = pg_query ("SELECT id_user FROM usuario WHERE cedula='$cedula' AND correo='$correo'")or die("Error en consultar usuario: " . pg_last_error());
							    	while ($row = pg_fetch_array($sql))
										{
											$id_user = $row["id_user"];
											break;
										}
									$resultado3 = pg_query("INSERT INTO ficha_interes (id_user) VALUES ('$id_user')")or die("Error en insertar interes: " . pg_last_error());
									$hacia = "../assets/img/avatares/".$id_user;
									$hacia2 = "../assets/img/avatares/mini/".$id_user;
									if (!file_exists($hacia)) {
									    mkdir($hacia, 0777, true);
									}
									chmod($hacia,0777);
									if (!file_exists($hacia2)) {
									    mkdir($hacia2, 0777, true);
									}
									chmod($hacia2,0777);

									$select_comuni= pg_query ("SELECT id_comunidad FROM comunidad WHERE estado='$estado' AND municipio='$municipio' AND ciudad='$ciudad'")or die("Error en: $select_comuni: " . pg_last_error());
					                  $numero_comuni = pg_num_rows($select_comuni);
					                  if($numero_comuni==0){
					                  	$insertar_com = pg_query("INSERT INTO comunidad (estado, municipio, ciudad) VALUES ('$estado', '$municipio', '$ciudad')")or die("Error en insertar insertar_com: " . pg_last_error());
										$select_com= pg_query("SELECT id_comunidad from comunidad where (estado='$estado') AND (municipio='$municipio') AND (ciudad='$ciudad')")or die("Error en consultar comunidad: " . pg_last_error());
												while ($row = pg_fetch_array($select_com))
												{
													$id_comunidad = $row["id_comunidad"];
													break;
												}
					                  }else{
					                  	$select_com= pg_query("SELECT id_comunidad from comunidad where (estado='$estado') AND (municipio='$municipio') AND (ciudad='$ciudad')")or die("Error en consultar comunidad: " . pg_last_error());
												while ($row = pg_fetch_array($select_com))
												{
													$id_comunidad = $row["id_comunidad"];
													break;
												}
					                  }

									$resultado2 = pg_query("INSERT INTO datos (id_user, nombre, apellido, id_comunidad) VALUES ('$id_user', '$nombre', '$apellido', '$id_comunidad')")or die("Error en insertar datos: " . pg_last_error());
									
								 	
								 	if(!$resultado2 || !$resultado || !$select_usuarios || !$resultado3){
										$res["res"] = "error";
									}else{
												$select_autorias= pg_query("SELECT id_autor from autor where cedula='$cedula' AND id_user IS NULL")or die("Error en consultar autor: " . pg_last_error());
												$numero_autorias = pg_num_rows($select_autorias);
												if($numero_autorias!=0){
													while ($row = pg_fetch_array($select_autorias))
													{
														$id_autor = $row["id_autor"];
														break;
													}
													$up = pg_query("UPDATE autor SET id_user = '$id_user' WHERE id_autor = '$id_autor'");
													$select_ids= pg_query("SELECT id_doc from autoria where id_autor='$id_autor'")or die("Error en consultar autor: " . pg_last_error());
													while ($row = pg_fetch_array($select_ids))
													{
														$id_dc = $row["id_doc"];
															$sql9= pg_query ("SELECT tipo_doc, titulo_doc FROM documento WHERE id_doc='$id_dc'")or die("Error en: $sql: " . pg_last_error());
															while ($row1 = pg_fetch_array($sql9))
																				{	
																					$tipo_doc=$row1['tipo_doc'];
																					$titulo_doc=$row1['titulo_doc'];
																				}
															if($tipo_doc=="I"){
												
																$mensaje="Tu investigación con el título <strong>".$titulo_doc."</strong> ha sido publicada con éxito. Te hemos identificado como autor del contenido y podrás verlo en tus investigaciones.";
																$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, id_doc, mensaje) VALUES ('$id_receptor', 1, 3, '$id_dc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
																}
															if($tipo_doc=="L"){
																$mensaje="Tu libro con el título <strong>".$titulo_doc."</strong> ha sido publicado con éxito. Te hemos identificado como autor del contenido y podrás verlo en tus libros.";
																$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify,  id_doc, mensaje) VALUES ('$id_user', 1, 2, '$id_dc', '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
															}
													}
												}

												$select_tutorias= pg_query("SELECT id_tutor from tutor where cedula='$cedula' AND id_user IS NULL")or die("Error en consultar tutor: " . pg_last_error());
												$numero_tutorias = pg_num_rows($select_tutorias);
												if($numero_tutorias!=0){
													while ($row = pg_fetch_array($select_tutorias))
													{
														$id_tutor = $row["id_tutor"];
														break;
													}
													$up = pg_query("UPDATE tutor SET id_user = '$id_user' WHERE id_tutor = '$id_tutor'");
												}

												$res["res"] = "success";
							                            $destinatario = $correo; 
														$asunto = "Bienvenido a RedTIL";
														
														$cuerpo = '
														<html> 
														<head> 
														    <meta charset="UTF-8">
														    <title>Red Científica de Investigadores en Tecnologías de Información Libres</title> 
														</head> 
														<body align="center"> 
														    <h1 style="color: dimgray;">¡Te has registrado satisfactoriamente!</h1> 
														    <img src="../assets/img/redtillogo3.png" alt="">
														    <p> 
														        <h4 style="color: dimgray;">Hola, desde RedTIL te damos la bienvenida a la comunidad, como parte de proceso de incorporación a la red ddebes realizár tu verificación de correo electrónico. Por favor verifica tu dirección de correo mediante el siguiente enlace:</h4>
														            <h2><a style="text-decoration: none; color: green;" href="localhost/RedTIL/html/activar.html?asdf65l8kj'. $id_user .'l8kj8efhdsk784ljfh25adkljjiu88">Activar Cuenta</a></h2>
														        <h4 style="color: dimgray;">Este paso es requerido para poder ingresar al sistema.</h4>
														    </p> 
														</body>
														</html>
														';
														$headers = "MIME-Version: 1.0\r\n";
														$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
														$headers .= "From: Red Científica de Investigadores en Tecnologías de Información Libres <RedTIL@ubv.edu.ve>\r\n";
														//  DESCOMENTAR PARA GESTIÓN DE CORREOS
														//mail($destinatario,$asunto,$cuerpo,$headers);
									}
								}else{
									$res["res"] = "ocupado";
								}
			}else{
				$res["res"] = "vacio";
			}
}else{
	$res["res"] = "cedula";
}
                print json_encode($res);
            
