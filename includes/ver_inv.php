		<?php
			$id_doc=$_POST["id_doc"];
			include "conexion.php";
			session_start();
			$my_id=$_SESSION["id_user"];
			$res['my_id']=$my_id;
			$t_user=$_SESSION["t_user"];
			$final=array();
			$sql= pg_query ("SELECT documento.id_doc, documento.titulo_doc, documento.cota, documento.archivo, documento.tipo_doc, documento.resume_doc, investigacion.publicado, investigacion.tipo_inv, investigacion.comunidad_ubv , investigacion.grado_proy , investigacion.area_app , investigacion.ano_semestre , investigacion.fecha_pre , investigacion.id_comunidad FROM documento, investigacion WHERE documento.id_doc=investigacion.id_doc AND documento.id_doc='$id_doc' ORDER BY id_doc")or die("Error en: $sql: " . pg_last_error());
			$cantidad = pg_num_rows($sql);
			if($cantidad>0){
							$res['res']="success";
							$res['t_user']=$t_user;
							while ($row = pg_fetch_array($sql))
							{	
								$res['t_dato']="documento";	
								$res['cota']=$row['cota'];
								$res['archivo']=$row['archivo'];	
								$res['titulo_doc']=$row['titulo_doc'];
								$res['tipo_doc']=$row['tipo_doc'];
								$res['resume_doc']=$row['resume_doc'];
								$res['comunidad_ubv']=$row['comunidad_ubv'];
								$comunidad_ubv=$row['comunidad_ubv'];
								if($comunidad_ubv=="S"){
									$res['grado_proy']=$row['grado_proy'];
									$res['area_app']=$row['area_app'];
									$res['ano_semestre']=$row['ano_semestre'];
									$res['fecha_pre']=$row['fecha_pre'];
									$id_comunidad=$row['id_comunidad'];
									$sql2= pg_query ("SELECT * FROM comunidad WHERE id_comunidad='$id_comunidad'")or die("Error en: $sql: " . pg_last_error());
									while ($row4 = pg_fetch_array($sql2))
													{
														$res['estado'] = $row4["estado"];
														$res['municipio'] = $row4["municipio"];
														$res['ciudad'] = $row4["ciudad"];
														break;
													}
								}
								$sql4= pg_query ("SELECT * FROM ficha_doc WHERE id_doc='$id_doc'")or die("Error en: $sql1: " . pg_last_error());
									while ($row5 = pg_fetch_array($sql4)){
										$res['t_int']=intval($row5['t_int']);
										$res['pro']=intval($row5['pro']);
										$res['arc']=intval($row5['arc']);
										$res['red']=intval($row5['red']);
										$res['org_t']=intval($row5['org_t']);
										$res['edu_t']=intval($row5['edu_t']);
										$res['block']=intval($row5['block']);
										$res['sft_pu']=intval($row5['sft_pu']);
										$res['innova']=intval($row5['innova']);
										$res['apps']=intval($row5['apps']);
										$res['iot']=intval($row5['iot']);
										$res['robot']=intval($row5['robot']);
										$res['geo']=intval($row5['geo']);
										$res['h_lib']=intval($row5['h_lib']);
										$res['gob_dig']=intval($row5['gob_dig']);
										$res['inter']=intval($row5['inter']);
										$res['datos_a']=intval($row5['datos_a']);
										$res['ai']=intval($row5['ai']);
										$res['tresd']=intval($row5['tresd']);
										$res['cont_edu']=intval($row5['cont_edu']);
									}
								if($comunidad_ubv=="N"){
									$res['publicado']=$row['publicado'];
									$res['tipo_inv']=$row['tipo_inv'];
								}
								$cuenta= pg_query ("SELECT id_docs_favs FROM docs_favs WHERE id_doc='$id_doc'")or die("Error en: $cuenta: " . pg_last_error());
								$cantida_cuenta = pg_num_rows($cuenta);
								$res['fav_cant']=$cantida_cuenta;
								array_push($final, $res); 
							}

							$sql= pg_query ("SELECT id_autor FROM autoria WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
							while ($row = pg_fetch_array($sql))
							{	
								$id_autor=$row['id_autor'];
								$sql1= pg_query ("SELECT * FROM autor WHERE id_autor='$id_autor'")or die("Error en: $sql1: " . pg_last_error());
								while ($row1 = pg_fetch_array($sql1))
								{	
									$id_user=$row1['id_user'];
									if($id_user!=null){
										$sql2= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$id_user'")or die("Error en: $sql1: " . pg_last_error());
										while ($row3 = pg_fetch_array($sql2)){
											$on['url_perfil']=$row3['url_perfil'];
											break;
										}
									}else{
										$on['url_perfil']='null';
									}
									$on['t_dato']="autor";	
									$on['id_user']=$row1['id_user'];
									$on['correo']=$row1['correo'];
									$on['cedula']=$row1['cedula'];
									$on['nombre']=$row1['nombre'];
									$on['apellido']=$row1['apellido'];
									array_push($final, $on); 
									}
									break;
								}

							$sql= pg_query ("SELECT id_tutor FROM tutoria WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
							while ($row = pg_fetch_array($sql))
							{
								$id_tutor=$row['id_tutor'];
								$sql1= pg_query ("SELECT * FROM tutor WHERE id_tutor='$id_tutor'")or die("Error en: $sql1: " . pg_last_error());
								while ($row1 = pg_fetch_array($sql1))
								{	
									$id_user=$row1['id_user'];
									if($id_user!=null){
										$sql2= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$id_user'")or die("Error en: $sql1: " . pg_last_error());
										while ($row3 = pg_fetch_array($sql2)){
											$an['url_perfil']=$row3['url_perfil'];
										}
									}else{
										$an['url_perfil']='null';
									}
									$an['t_dato']="tutor";	
									$an['id_user']=$row1['id_user'];
									$an['correo']=$row1['correo'];
									$an['cedula']=$row1['cedula'];
									$an['nombre']=$row1['nombre'];
									$an['apellido']=$row1['apellido'];
									$id_t_tutor=$row1['id_t_tutor'];
			                             $selecid_t_tutor= pg_query ("SELECT t_tutor FROM t_tutor WHERE id_t_tutor='$id_t_tutor'")or die("Error en: $cuenta: " . pg_last_error());
			                            while ($row7 = pg_fetch_array($selecid_t_tutor))
			                            {
			                            $an['t_tutor']=$row7['t_tutor'];  
			                            }
									array_push($final, $an); 
								}
							}
			}else{
				$res['res']="fail";
				array_push($final, $res);
			}
				print json_encode($final);
	