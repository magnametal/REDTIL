<?php
include "security.php";
$clave=null;
$correo=null;
$id_user=null;
$cantidad = null;
$resultado = null;
$activacion= null;
$id_comunidad=null;
$correo = $_POST["correo"];
$correo = limpiar($correo);		
$clave1 = $_POST["clave"];
$clave = MD5($clave1);
		
			include "conexion.php";		

			$sql= pg_query ("SELECT * from usuario where (correo='$correo') AND (clave='$clave')")or die("Error en: $sql: " . pg_last_error());
			$cantidad_select = pg_num_rows($sql);
				if($cantidad_select==0){
					$resultado = "fail";
					$res["res"] = $resultado;
				}else{
				    	while ($row = pg_fetch_array($sql)){
			        		$id_user=$row["id_user"];
			        		$t_user=$row["t_user"];
			        		$activacion=$row["activacion"];
			        		$habilitado=$row["habilitado"];
			        		$url_perfil=$row["url_perfil"];
			        		$bienvenida = $row["bienvenida"];
			        		break;
							}//end-while

							$select_datos= pg_query ("SELECT * FROM datos WHERE (id_user='$id_user')")or die("Error en: $sql: " . pg_last_error());
							while ($row = pg_fetch_array($select_datos)){
				        		$nombre=$row["nombre"];
				        		$apellido=$row["apellido"];
				        		$imagen=$row["imagen"];
				        		$id_comunidad=$row["id_comunidad"];
				        		break;
							}//end-while
							$select_comu= pg_query ("SELECT * FROM comunidad WHERE (id_comunidad='$id_comunidad')")or die("Error en: $select_comu: " . pg_last_error());
							while ($row = pg_fetch_array($select_comu)){
				        		$estado=$row["estado"];
							}//end-while
							if($activacion=='V'){
								session_start();
								$_SESSION["estado"] = $estado;
								$_SESSION["id_user"] = $id_user;
								$_SESSION["t_user"] = $t_user;
								$_SESSION["nombre"] = $nombre;
								$_SESSION["apellido"] = $apellido;
								$_SESSION["imagen"] = $imagen;
								$_SESSION["url_perfil"] = $url_perfil;
								$_SESSION["habilitado"] = $habilitado;
								$_SESSION["bienvenida"] = $bienvenida;
								$res["bienvenida"] = $bienvenida;
								$res["imagen"] = $imagen;
								$res["t_user"] = $t_user;
								$res["nombre"] = $nombre;
								$res["apellido"] = $apellido;
								if($habilitado=='F'){
									$resultado = "banneado";
								}else{
									$resultado = "success";
								}
								
								$res["res"] = $resultado;
							}else{
								$resultado = "validar";
								$res["res"] = $resultado;
							}
				}

				print json_encode($res); 
?>