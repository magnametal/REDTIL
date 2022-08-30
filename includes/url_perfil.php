		<?php
			include "security.php";
			include "conexion.php";
			$url_perfil=null;
			$url_perfil=$_POST["link"];
			$url_perfil = limpiar($url_perfil);
			$miembros = array();
			session_start();
			$id_actual=$_SESSION["id_user"];
			$selec_url= pg_query ("SELECT id_user FROM usuario WHERE url_perfil='$url_perfil'")or die("Error en: $selec_url: " . pg_last_error());
			$cantidad=pg_num_rows($selec_url);
			if($cantidad>0){
				while ($row = pg_fetch_array($selec_url))
				{	
					$id_user=$row['id_user'];
				}
			$res['url_perfil']=$_SESSION["url_perfil"];
			$selec_seguidor= pg_query ("SELECT id_seguidores FROM seguidores WHERE seguido='$id_user' AND seguidor='$id_actual'")or die("Error en: $selec_url: " . pg_last_error());
			$cantidad_seg=pg_num_rows($selec_seguidor);
			if($cantidad_seg==0){
				$res['sigue']="falso";
			}else{
				$res['sigue']="verdadero";
			}
			$sql= pg_query ("SELECT usuario.habilitado, correo, cedula, t_user, datos.nombre, datos.imagen, datos.apellido FROM usuario, datos WHERE datos.id_user=usuario.id_user AND usuario.id_user='$id_user'")or die("Error en: $sql: " . pg_last_error());
				$res['res']="success";
				$res['tipo']="user";
				while ($row = pg_fetch_array($sql))
				{	
					$res['id_user']=$id_user;
					$res['correo']=$row['correo'];					
					$res['cedula']=$row['cedula'];
					$res['t_user']=$row['t_user'];
					$res['nombre']=$row['nombre'];
					$res['apellido']=$row['apellido'];
					$res['habilitado']=$row['habilitado'];
					$res['imagen']=$row['imagen'];
				}
			}else{
				$selec_url= pg_query ("SELECT id_pen FROM pendiente WHERE url_perfil='$url_perfil'")or die("Error en: $selec_url: " . pg_last_error());
					$cantidad=pg_num_rows($selec_url);
				if($cantidad>0){
					while ($row = pg_fetch_array($selec_url))
					{	
						$id_pen=$row['id_pen'];
					}
					$selec_url_data= pg_query ("SELECT * FROM pendiente WHERE id_pen='$id_pen'")or die("Error en: $selec_url: " . pg_last_error());
					$res['res']="success";
					$res['tipo']="pendiente";
					while ($row = pg_fetch_array($selec_url_data))
					{
						$selec_colectivo= pg_query ("SELECT id_user FROM colectivo WHERE id_pen='$id_pen'")or die("Error en: $selec_url: " . pg_last_error());
						$res['cantidad_col']=pg_num_rows($selec_colectivo);
						while ($row2 = pg_fetch_array($selec_colectivo))
							{	
								$id_miembro=$row2['id_user'];
								array_push($miembros, $id_miembro);
							}
						$sql2= pg_query ("SELECT id_colectivo FROM colectivo WHERE id_pen='$id_pen' AND id_user='$id_actual'")or die("Error en: $sql: " . pg_last_error());
							$cant_valido = pg_num_rows($sql2);
							if($cant_valido==0){
								$selec_sol_col= pg_query ("SELECT id_status_colectivo FROM solicitud_colectivo WHERE id_pen='$id_pen' AND id_user='$id_actual'")or die("Error en: $selec_url: " . pg_last_error());
								$cantida_solicitud = pg_num_rows($selec_sol_col);
								if($cantida_solicitud>0){
									while ($row3 = pg_fetch_array($selec_sol_col))
										{	
											$id_status_colectivo=$row3['id_status_colectivo'];
											break;
										}
										if($id_status_colectivo==3 ){
											$res['status']="pendiente";
										}
										if($id_status_colectivo==2){
											$res['status']="rechazado";
										}
										$res['valido']="falso";
								}else{
									$res['valido']="falso";
								}
							}else{
								$res['status']="aprobado";
								$res['valido']="verdadero";
							}
						$cuenta2= pg_query ("SELECT id_pend_favs FROM pend_favs WHERE id_pen='$id_pen'")or die("Error en: $cuenta2: " . pg_last_error());
						$cantida_cuenta2 = pg_num_rows($cuenta2);
						$res['favs']=$cantida_cuenta2;
						$res["miembros"]=$miembros;
						$res['id_pen']=$id_pen;
						$res['id_fundador']=$row['id_user'];
						$id_fundador=$row['id_user'];
						if($id_actual==$id_fundador){
							$res['fundador']="verdadero";
						}else{
							$res['fundador']="falso";
						}
						$res['titulo_pen']=$row['titulo_pen'];
						$res['resume_pen']=$row['resume_pen'];
						$res['horafecha']=$row['horafecha'];
					}
				}else{
				$res['res']="vacio";	
				}
			}
				print json_encode($res);
	