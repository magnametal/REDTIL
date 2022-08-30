		<?php
			$id_doc=$_POST["id_doc"];
			session_start();
			$my_id=$_SESSION["id_user"];
			$res['my_id']=$my_id;
			$t_user=$_SESSION["t_user"];
			include "conexion.php";	
			$final=array();
			$sql= pg_query ("SELECT documento.id_doc, documento.titulo_doc, documento.cota, documento.archivo, documento.tipo_doc, documento.resume_doc, libro.ano_publi, libro.edicion FROM documento, libro WHERE documento.id_doc=libro.id_doc AND documento.id_doc='$id_doc' ORDER BY id_doc")or die("Error en: $sql: " . pg_last_error());
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
					$res['ano_publi']=$row['ano_publi'];
					$res['edicion']=$row['edicion'];
					$cuenta= pg_query ("SELECT id_docs_favs FROM docs_favs WHERE id_doc='$id_doc'")or die("Error en: $cuenta: " . pg_last_error());
					$cantida_cuenta = pg_num_rows($cuenta);
					$res['fav_cant']=$cantida_cuenta;
					array_push($final, $res); 
					break;
				}

					$sql4= pg_query ("SELECT * FROM ficha_doc WHERE id_doc='$id_doc'")or die("Error en: $sql1: " . pg_last_error());
					while ($row4 = pg_fetch_array($sql4)){
						$res['t_int']=intval($row4['t_int']);
						$res['pro']=intval($row4['pro']);
						$res['arc']=intval($row4['arc']);
						$res['red']=intval($row4['red']);
						$res['org_t']=intval($row4['org_t']);
						$res['edu_t']=intval($row4['edu_t']);
						$res['block']=intval($row4['block']);
						$res['sft_pu']=intval($row4['sft_pu']);
						$res['innova']=intval($row4['innova']);
						$res['apps']=intval($row4['apps']);
						$res['iot']=intval($row4['iot']);
						$res['robot']=intval($row4['robot']);
						$res['geo']=intval($row4['geo']);
						$res['h_lib']=intval($row4['h_lib']);
						$res['gob_dig']=intval($row4['gob_dig']);
						$res['inter']=intval($row4['inter']);
						$res['datos_a']=intval($row4['datos_a']);
						$res['ai']=intval($row4['ai']);
						$res['tresd']=intval($row4['tresd']);
						$res['cont_edu']=intval($row4['cont_edu']);
						break;
					}

											$cuenta= pg_query ("SELECT id_mis_libros FROM mis_libros WHERE id_doc='$id_doc' AND id_user='$my_id'")or die("Error en: $cuenta: " . pg_last_error());
											$cantida_cuenta = pg_num_rows($cuenta);
											if($cantida_cuenta>0){
											$res['my_val']="done";
											}else{
											$res['my_val']="false";	
											}
											$cuenta2= pg_query ("SELECT id_mis_libros FROM mis_libros WHERE id_doc='$id_doc'")or die("Error en: $cuenta2: " . pg_last_error());
											$cantida_cuenta2 = pg_num_rows($cuenta2);
											$res['my']=$cantida_cuenta2;

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
											$res['url_perfil']=$row3['url_perfil'];
										}
									}else{
										$res['url_perfil']='null';
									}
									$res['t_dato']="autor";	
									$res['id_user']=$row1['id_user'];
									$res['correo']=$row1['correo'];
									$res['nombre']=$row1['nombre'];
									$res['apellido']=$row1['apellido'];
									array_push($final, $res); 
								}
							}
			}else{
				$res['res']="fail";
				array_push($final, $res);
			}
				print json_encode($final);
	