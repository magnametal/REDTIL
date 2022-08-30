<?php  				
				  include "security.php";
				  $ci_autor = null;
                  $email_autor = null;
                  $nom_autor = null;
                  $ape_autor = null;
                  $ci_tutor = null;
                  $email_tutor = null;
                  $nom_tutor = null;
                  $ape_tutor = null;
                  $tipo_tutor = null;
                  $titulo_doc = null;
                  $desc_doc = null;
                  $comunidad_ubv= null;
                  $id_last = null;
                  $cargado_por = null;
                  parse_str($_POST["serial"], $serial);
				  $tematicas=json_decode($_POST["array"]);
                  if(isset($serial["ubv"])){
                  	$comunidad_ubv=$serial["ubv"];
                  	$comunidad_ubv = limpiar($comunidad_ubv);
                  }
                  if($comunidad_ubv=="N"){
                  	$publicado = null;
                  	$tipo_inv = null;
                  }else{
                  		$datetime = null;
                  	  $grado_proy = null;
	                  $area_app = null;
	                  $ano_semestre = null;
	                  $com_estado = null;
	                  $com_municipio = null;
	                  $com_otro = null;
                  }

				  $ci_autor = $serial["ci_autor"];
				  $ci_autor = limpiar($ci_autor);
                  $email_autor = $serial["email_autor"];
                  $email_autor = limpiar($email_autor);
                  $nom_autor = $serial["nom_autor"];
                  $nom_autor = limpiar($nom_autor);
                  $ape_autor = $serial["ape_autor"];
                  $ape_autor = limpiar($ape_autor);
                  $ci_tutor = $serial["ci_tutor"];
                  $ci_tutor = limpiar($ci_tutor);
                  $email_tutor = $serial["email_tutor"];
                  $email_tutor = limpiar($email_tutor);
                  $nom_tutor = $serial["nom_tutor"];
                  $nom_tutor = limpiar($nom_tutor);
                  $ape_tutor = $serial["ape_tutor"];
                  $ape_tutor = limpiar($ape_tutor);
                  $tipo_tutor = $serial["tipo_tutor"];
                  $tipo_tutor = limpiar($tipo_tutor);
                  $titulo_doc = $serial["titulo_doc"];
                  $titulo_doc = limpiar($titulo_doc);
                  $desc_doc = $serial["desc_doc"];
                  $desc_doc = limpiar($desc_doc);

                  if($comunidad_ubv=="N"){
                  	$publicado = $serial["publicado"];
                  	$publicado = limpiar($publicado);
                  	$tipo_inv = $serial["tipo_inv"];
                  	$tipo_inv = limpiar($tipo_inv);
                  }else{
                  	$datetime = $serial["datetime"];
                  	$datetime = limpiar($datetime);
                  	  $grado_proy = $serial["grado_proy"];
                  	  $grado_proy = limpiar($grado_proy);
	                  $area_app = $serial["area_app"];
	                  $area_app = limpiar($area_app);
	                  $ano_semestre = $serial["ano_semestre"];
	                  $ano_semestre = limpiar($ano_semestre);
	                  $com_estado = $serial["com_estado"];
	                  $com_estado = limpiar($com_estado);
	                  $com_municipio = $serial["com_municipio"];
	                   $com_municipio = limpiar($com_municipio);
	                  $com_otro = $serial["com_otro"];
	                  $com_otro = limpiar($com_otro);
                  }
                  $bandera_entrada="completa";
                  if($comunidad_ubv=="N"){
                  	if(
	                  	$ci_autor == null OR
		                $email_autor == null OR
		                $nom_autor == null OR
		                $ape_autor == null OR
		                $ci_tutor == null OR
		                $email_tutor == null OR
		                $nom_tutor == null OR
		                $ape_tutor == null OR
		                $tipo_tutor == null OR
		                $titulo_doc == null OR
		                $desc_doc == null OR
		                $tipo_inv == null OR
		                $publicado == null OR
		                $ci_autor == "" OR
		                $email_autor == "" OR
		                $nom_autor == "" OR
		                $ape_autor == "" OR
		                $ci_tutor == "" OR
		                $email_tutor == "" OR
		                $nom_tutor == "" OR
		                $ape_tutor == "" OR
		                $tipo_tutor == "" OR
		                $titulo_doc == "" OR
		                $tipo_inv == "" OR
		                $publicado == "" OR
		                $desc_doc == ""){
	                  	$bandera_entrada="incompleta";
	                  }
                  }

                  if($comunidad_ubv=="S"){
                  	if(
	                  	$ci_autor == null OR
		                $email_autor == null OR
		                $nom_autor == null OR
		                $ape_autor == null OR
		                $ci_tutor == null OR
		                $email_tutor == null OR
		                $nom_tutor == null OR
		                $ape_tutor == null OR
		                $tipo_tutor == null OR
		                $titulo_doc == null OR
		                $grado_proy == null OR
		                $area_app == null OR
		                $ano_semestre == null OR
		                $desc_doc == null OR
		                $com_estado == null OR
		                $com_municipio == null OR
		                $com_otro == null OR
		                $ci_autor == "" OR
		                $email_autor == "" OR
		                $nom_autor == "" OR
		                $ape_autor == "" OR
		                $ci_tutor == "" OR
		                $email_tutor == "" OR
		                $nom_tutor == "" OR
		                $ape_tutor == "" OR
		                $tipo_tutor == "" OR
		                $titulo_doc == "" OR
		                $grado_proy == "" OR
		                $area_app == "" OR
		                $ano_semestre == "" OR
		                $desc_doc == "" OR
		                $com_estado == "" OR
		                $com_municipio == "" OR
		                $com_otro == ""){
	                  	$bandera_entrada="incompleta";
	                  }
                  }
                   if($bandera_entrada=="incompleta"){
                  	$res["res"] = "vacio";
                  }else{
                  	include "conexion.php";
					$bandera_temp="verde";
					$bandera_tut="verde";

			      if(isset($serial["ci_autor"])){
				          $ci_a = null;
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
		                  $ci_a = $serial["ci_autor"];
		                  $ci_a = limpiar($ci_a);
				          $email_a = $serial["email_autor"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor"];
				          $ape_a = limpiar($ape_a);
				          if($ci_a=="" OR $email_a=="" OR $nom_a=="" OR $ape_a=="" OR $ci_a==null OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
				          	  $cis[1]=$ci_a;
					          $emails[1]=$email_a;
					          $noms[1]=$nom_a;
					          $apes[1]=$ape_a;
				          }
		      		}

		          if(isset($serial["ci_autor0"])){
				          $ci_a = null;
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
			              $tipo_a = null;
		                  $ci_a = $serial["ci_autor0"];
		                  $ci_a = limpiar($ci_a);
				          $email_a = $serial["email_autor0"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor0"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor0"];
				          $ape_a = limpiar($ape_a);
				          if($ci_a=="" OR $email_a=="" OR $nom_a=="" OR $ape_a=="" OR $ci_a==null OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
				          	  $cis[1]=$ci_a;
					          $emails[1]=$email_a;
					          $noms[1]=$nom_a;
					          $apes[1]=$ape_a;
				          }
		      		}

		      		if(isset($serial["ci_autor2"])){
				          $ci_a = null;
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
		                  $ci_a = $serial["ci_autor2"];
		                  $ci_a = limpiar($ci_a);
				          $email_a = $serial["email_autor2"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor2"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor2"];
				          $ape_a = limpiar($ape_a);
				          if($ci_a=="" OR $email_a=="" OR $nom_a=="" OR $ape_a=="" OR $ci_a==null OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
				          	  $cis[2]=$ci_a;
					          $emails[2]=$email_a;
					          $noms[2]=$nom_a;
					          $apes[2]=$ape_a;
				          }
		      		}

		      		if(isset($serial["ci_autor4"])){
				          $ci_a = null;
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
		                  $ci_a = $serial["ci_autor4"];
		                  $ci_a = limpiar($ci_a);
				          $email_a = $serial["email_autor4"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor4"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor4"];
				          $ape_a = limpiar($ape_a);
				          if($ci_a=="" OR $email_a=="" OR $nom_a=="" OR $ape_a==""  OR $ci_a==null OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
				          	  $cis[3]=$ci_a;
					          $emails[3]=$email_a;
					          $noms[3]=$nom_a;
					          $apes[3]=$ape_a;
				          }
		      		}

		      		if(isset($serial["ci_autor6"])){
				          $ci_a = null;
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
		                  $ci_a = $serial["ci_autor6"];
		                  $ci_a = limpiar($ci_a);
				          $email_a = $serial["email_autor6"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor6"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor6"];
				          $ape_a = limpiar($ape_a);
				          if($ci_a=="" OR $email_a=="" OR $nom_a=="" OR $ape_a=="" OR $ci_a==null OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
				          	  $cis[4]=$ci_a;
					          $emails[4]=$email_a;
					          $noms[4]=$nom_a;
					          $apes[4]=$ape_a;
				          }
		      		}

		      		if(isset($serial["ci_tutor"])){
				          $ci_t = null;
			              $email_t = null;
			              $nom_t = null;
			              $ape_t = null;
			              $tipo_t = null;
		                  $ci_t = $serial["ci_tutor"];
		                  $ci_t = limpiar($ci_t);
				          $email_t = $serial["email_tutor"];
				          $email_t = limpiar($email_t);
				          $nom_t = $serial["nom_tutor"];
				          $nom_t = limpiar($nom_t);
				          $ape_t = $serial["ape_tutor"];
				          $ape_t = limpiar($ape_t);
				          $tipo_t = $serial["tipo_tutor"];
				          $tipo_t = limpiar($tipo_t);
				          if($ci_t=="" OR $email_t=="" OR $nom_t=="" OR $ape_t=="" OR $tipo_t=="" OR $ci_t==null OR $email_t==null OR $nom_t==null OR $ape_t==null OR $tipo_t==null){
				          	$bandera_tut="rojo";
				          }else{
				          	  $cis_t[0]=$ci_t;
					          $emails_t[0]=$email_t;
					          $noms_t[0]=$nom_t;
					          $apes_t[0]=$ape_t;
					          $tipos_t[0]=$tipo_t;
				          }
		      		}


		      		if(isset($serial["ci_tutor0"])){
				          $ci_t = null;
			              $email_t = null;
			              $nom_t = null;
			              $ape_t = null;
			              $tipo_t = null;
		                  $ci_t = $serial["ci_tutor0"];
		                  $ci_t = limpiar($ci_t);
				          $email_t = $serial["email_tutor0"];
				          $email_t = limpiar($email_t);
				          $nom_t = $serial["nom_tutor0"];
				          $nom_t = limpiar($nom_t);
				          $ape_t = $serial["ape_tutor0"];
				          $ape_t = limpiar($ape_t);
				          $tipo_t = $serial["tipo_tutor0"];
				          $tipo_t = limpiar($tipo_t);
				          if($ci_t=="" OR $email_t=="" OR $nom_t=="" OR $ape_t=="" OR $tipo_t=="" OR $ci_t==null OR $email_t==null OR $nom_t==null OR $ape_t==null OR $tipo_t==null){
				          	$bandera_tut="rojo";
				          }else{
				          	  $cis_t[1]=$ci_t;
					          $emails_t[1]=$email_t;
					          $noms_t[1]=$nom_t;
					          $apes_t[1]=$ape_t;
					          $tipos_t[1]=$tipo_t;
				          }
		      		}

		      		$bandera_cedulas_a="verde";
		      		for ($i=1; $i < sizeOf($cis); $i++) { 
		      			$ce=$cis[$i];
		      			$V = strpos($ce, "V-");
						$E = strpos($ce, "E-");
						$P = strpos($ce, "P-");
						if($V===false && $E===false && $P===false){
							$bandera_cedulas_a="rojo";
							break;
						}
		      		}

		      		$bandera_cedulas_t="verde";
		      		for ($i=0; $i < sizeOf($cis_t); $i++) { 
		      			$ce=$cis_t[$i];
		      			$V = strpos($ce, "V-");
						$E = strpos($ce, "E-");
						$P = strpos($ce, "P-");
						if($V===false && $E===false && $P===false){
							$bandera_cedulas_t="rojo";
							break;
						}
		      		}

		      		if($bandera_temp=="verde" && $bandera_tut=="verde" && $bandera_cedulas_a=="verde" && $bandera_cedulas_t=="verde"){
		      				$select_seq = pg_query("SELECT MAX(id_doc) FROM documento");
							while ($row = pg_fetch_row($select_seq)){
								$id_last=$row[0];
							}
							if($id_last==null){
								$id_last=0;
							}

							$id_last++;
							$res["id_doc"] = $id_last;
							$id_doc = $id_last;
							$cota = "i-".$id_last;
							session_start();
							$cargado_por = $_SESSION["id_user"];
							$res["cargado_por"] = $cargado_por;
								$insertar_doc = pg_query("INSERT INTO documento (titulo_doc, tipo_doc, resume_doc, cota, cargado_por) VALUES ('$titulo_doc', 'I', '$desc_doc', '$cota', '$cargado_por')")or die("Error en insertar_doc: " . pg_last_error());
							$resultado2 = pg_query("INSERT INTO ficha_doc (id_doc) VALUES ('$id_doc')")or die("Error en insertar ficha_doc: " . pg_last_error());

											if($resultado2){
												$bandera="verde";
												$tam = sizeOf($tematicas);
													for($i=0;$i<$tam;$i++){
														if($tematicas[$i]=="t_int"){
															$resp = pg_query("UPDATE ficha_doc SET t_int = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="pro"){
															$resp = pg_query("UPDATE ficha_doc SET pro = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="arc"){
															$resp = pg_query("UPDATE ficha_doc SET arc = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="red"){
															$resp = pg_query("UPDATE ficha_doc SET red = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="org_t"){
															$resp = pg_query("UPDATE ficha_doc SET org_t = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="edu_t"){
															$resp = pg_query("UPDATE ficha_doc SET edu_t = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="block"){
															$resp = pg_query("UPDATE ficha_doc SET block = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="sft_pu"){
															$resp = pg_query("UPDATE ficha_doc SET sft_pu = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="innova"){
															$resp = pg_query("UPDATE ficha_doc SET innova = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="apps"){
															$resp = pg_query("UPDATE ficha_doc SET apps = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="iot"){
															$resp = pg_query("UPDATE ficha_doc SET iot = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="robot"){
															$resp = pg_query("UPDATE ficha_doc SET robot = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="geo"){
															$resp = pg_query("UPDATE ficha_doc SET geo = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="h_lib"){
															$resp = pg_query("UPDATE ficha_doc SET h_lib = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="gob_dig"){
															$resp = pg_query("UPDATE ficha_doc SET gob_dig = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="inter"){
															$resp = pg_query("UPDATE ficha_doc SET inter = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="datos_a"){
															$resp = pg_query("UPDATE ficha_doc SET datos_a = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="ai"){
															$resp = pg_query("UPDATE ficha_doc SET ai = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="tresd"){
															$resp = pg_query("UPDATE ficha_doc SET tresd = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
														if($tematicas[$i]=="cont_edu"){
															$resp = pg_query("UPDATE ficha_doc SET cont_edu = '1.000' WHERE id_doc = '$id_doc'");
															if(!$resp){
																$bandera="rojo";
															}
														}
													}//end-for
											}else{
												$bandera="rojo";
											}


		      			if($comunidad_ubv=="N"){

							$insertar_inv = pg_query("INSERT INTO investigacion (id_doc, tipo_inv, publicado) VALUES ('$id_doc', '$tipo_inv', '$publicado')")or die("Error en insertar investigacion: " . pg_last_error());

		      			}else{

		      				if($comunidad_ubv=="S"){
		      					$select_comuni= pg_query ("SELECT id_comunidad FROM comunidad WHERE estado='$com_estado' AND municipio='$com_municipio' AND ciudad='$com_otro'")or die("Error en: $sql: " . pg_last_error());
                                                $numero_comuni = pg_num_rows($select_comuni);
                                                      if($numero_comuni==0){
                                                            $insertar_com = pg_query("INSERT INTO comunidad (estado, municipio, ciudad) VALUES ('$com_estado', '$com_municipio', '$com_otro')")or die("Error en insertar insertar_com: " . pg_last_error());
                                                                  $select_com= pg_query("SELECT id_comunidad FROM comunidad WHERE (estado='$com_estado') AND (municipio='$com_municipio') AND (ciudad='$com_otro')")or die("Error en consultar comunidad: " . pg_last_error());
                                                                              while ($row = pg_fetch_array($select_com))
                                                                              {
                                                                                    $id_comunidad = $row["id_comunidad"];
                                                                                    break;
                                                                              }
                                                      }else{
                                                            $select_com= pg_query("SELECT id_comunidad from comunidad where (estado='$com_estado') AND (municipio='$com_municipio') AND (ciudad='$com_otro')")or die("Error en consultar comunidad: " . pg_last_error());
                                                                              while ($row = pg_fetch_array($select_com))
                                                                              {
                                                                                    $id_comunidad = $row["id_comunidad"];
                                                                                    break;
                                                                              }
                                                      }
								
								$insertar_inv = pg_query("INSERT INTO investigacion (id_doc, grado_proy, area_app, ano_semestre, id_comunidad, comunidad_ubv, fecha_pre) VALUES ('$id_doc', '$grado_proy', '$area_app', '$ano_semestre', '$id_comunidad', 'S', '$datetime')")or die("Error en insertar insertar_inv: " . pg_last_error());
				      			}

		      			}


						for ($i=0; $i < 5; $i++) {
	                  		$id_aut=null;
	                  		if(isset($cis[$i]) AND isset($emails[$i]) AND isset($noms[$i]) AND isset($apes[$i])){
					          if($cis[$i]!="" AND $emails[$i]!="" AND $noms[$i]!="" AND $apes[$i]!="" AND $cis[$i]!=null AND $emails[$i]!=null AND $noms[$i]!=null AND $apes[$i]!=null){
				          		
				          		$sql= pg_query ("SELECT * FROM usuario WHERE cedula='$cis[$i]'")or die("Error en: $sql: " . pg_last_error());
					                  $numero = pg_num_rows($sql);
					                  if($numero==0){
					                  	$sql2= pg_query ("SELECT id_autor FROM autor WHERE cedula='$cis[$i]'")or die("Error en: $sql: " . pg_last_error());
					                  $numero2 = pg_num_rows($sql2);
						                  if($numero2==0){
						                  	$insertar_temp = pg_query("INSERT INTO autor (correo, cedula, nombre, apellido) VALUES ('$emails[$i]','$cis[$i]','$noms[$i]','$apes[$i]')")or die("Error en insertar_doc: " . pg_last_error());
						                  	$sql3= pg_query ("SELECT id_autor FROM autor WHERE cedula='$cis[$i]'")or die("Error en: $sql: " . pg_last_error());
						                  	while ($row = pg_fetch_array($sql3))
											{
												$id_aut=$row['id_autor'];
												break;		
											}
						                  }else{
						                  	while ($row = pg_fetch_array($sql2))
											{
												$id_aut=$row['id_autor'];
												break;		
											}
						                  }
					                  }else{
					                  	while ($row = pg_fetch_array($sql))
										{
											$id_u=$row['id_user'];
											break;		
										}

											$sql5= pg_query ("SELECT nombre, apellido FROM datos WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
											while ($row = pg_fetch_array($sql5))
												{
													$nombre=$row['nombre'];
													$apellido=$row['apellido'];
													break;		
												}
											$sql5= pg_query ("SELECT cedula, correo FROM usuario WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
											while ($row = pg_fetch_array($sql5))
												{	
													$cedula=$row['cedula'];
													$correo=$row['correo'];
													break;		
												}
											
											$sql2= pg_query ("SELECT id_autor FROM autor WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
					                  		$numero2 = pg_num_rows($sql2);
						                  if($numero2==0){
						                  	$insertar_temp = pg_query("INSERT INTO autor (id_user, correo, cedula, nombre, apellido) VALUES ('$id_u','$correo','$cedula','$nombre','$apellido')")or die("Error en insertar_doc: " . pg_last_error());
											$sql4= pg_query ("SELECT id_autor FROM autor WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
						                  	while ($row = pg_fetch_array($sql4))
											{
												$id_aut=$row['id_autor'];
												break;			
											}
						                  }else{
						                  	while ($row = pg_fetch_array($sql2))
											{
												$id_aut=$row['id_autor'];
												break;		
											}
						                  }
					                  }
					                $insertar_autoria = pg_query("INSERT INTO autoria (id_doc, id_autor) VALUES ('$id_doc', '$id_aut')")or die("Error en insertar autoria: " . pg_last_error());

				          	}
				          }
	                  			
	                  	}

	                  	for ($i=0; $i < 2; $i++) {
	                  		$id_tut=null;
	                  		if(isset($cis_t[$i]) AND isset($emails_t[$i]) AND isset($noms_t[$i]) AND isset($apes_t[$i]) AND isset($tipos_t[$i])){
					          if($cis_t[$i]!="" AND $emails_t[$i]!="" AND $noms_t[$i]!="" AND $apes_t[$i]!="" AND $tipos_t[$i]!="" AND $cis_t[$i]!=null AND $emails_t[$i]!=null AND $noms_t[$i]!=null AND $apes_t[$i]!=null AND $tipos_t[$i]!=null){
				          		$sql= pg_query ("SELECT id_user FROM usuario WHERE cedula='$cis_t[$i]'")or die("Error en: $sql: " . pg_last_error());
			                  $numero = pg_num_rows($sql);
			                  $sql7= pg_query ("SELECT id_t_tutor FROM t_tutor WHERE t_tutor='$tipos_t[$i]'")or die("Error en: $sql7: " . pg_last_error());
						                  	while ($row = pg_fetch_array($sql7))
											{
												$id_t_tutor=$row['id_t_tutor'];
												break;			
											}
			                  if($numero==0){
			                  	$sql2= pg_query ("SELECT id_tutor FROM tutor WHERE cedula='$cis_t[$i]'")or die("Error en: $sql: " . pg_last_error());
				                  $numero2 = pg_num_rows($sql2);
					                  if($numero2==0){
					                  	$insertar_temp = pg_query("INSERT INTO tutor (correo, cedula, nombre, apellido, id_t_tutor) VALUES ('$emails_t[$i]','$cis_t[$i]','$noms_t[$i]','$apes_t[$i]','$id_t_tutor')")or die("Error en insertar_doc: " . pg_last_error());
					                  	$sql3= pg_query ("SELECT id_tutor FROM tutor WHERE cedula='$cis_t[$i]'")or die("Error en: $sql: " . pg_last_error());
					                  	while ($row = pg_fetch_array($sql3))
										{
											$id_tut=$row['id_tutor'];
											break;

										}
					                  }else{
					                  	while ($row = pg_fetch_array($sql2))
										{
											$id_tut=$row['id_tutor'];
											break;	
										}
					                  }
			                  }else{
				                  	while ($row = pg_fetch_array($sql))
										{
											$id_u=$row['id_user'];
											break;		
										}

											$sql5= pg_query ("SELECT nombre, apellido FROM datos WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
											while ($row = pg_fetch_array($sql5))
												{
													$nombre=$row['nombre'];
													$apellido=$row['apellido'];
													break;		
												}
											$sql5= pg_query ("SELECT cedula, correo FROM usuario WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
											while ($row = pg_fetch_array($sql5))
												{	
													$cedula=$row['cedula'];
													$correo=$row['correo'];
													break;		
												}
											$sql2= pg_query ("SELECT id_tutor FROM tutor WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
					                  		$numero2 = pg_num_rows($sql2);
						                  if($numero2==0){
						                  	$insertar_temp = pg_query("INSERT INTO tutor (id_user, correo, cedula, nombre, apellido, id_t_tutor) VALUES ('$id_u','$correo','$cedula','$nombre','$apellido','$id_t_tutor')")or die("Error en insertar_doc: " . pg_last_error());
											$sql4= pg_query ("SELECT id_tutor FROM tutor WHERE id_user='$id_u'")or die("Error en: $sql: " . pg_last_error());
						                  	while ($row = pg_fetch_array($sql4))
											{
												$id_tut=$row['id_tutor'];
												break;			
											}
						                  }else{
						                  	while ($row = pg_fetch_array($sql2))
											{
												$id_tut=$row['id_tutor'];
												break;		
											}
						                  }
			                  }
			                $insertar_tutoria = pg_query("INSERT INTO tutoria (id_doc, id_tutor) VALUES ('$id_doc', '$id_tut')")or die("Error en insertar tutoria: " . pg_last_error());
				          	}
				          }
	                  			
	                  	}

	                  	if(!$insertar_doc || !$insertar_inv || $bandera=="rojo" || $bandera_cedulas_a=="rojo" || $bandera_cedulas_t=="rojo"){
							if($bandera_cedulas_a=="rojo" || $bandera_cedulas_t=="rojo"){
								$res["res"] = "cedulas";	
							}else{
								$res["res"] = "error";	
							}
						}else{
							
							$res["res"] = "success";
						}
						
		      		}else{
		      			if($bandera_temp=="rojo"){
		      				$res["res"] = "autor_vacio";
		      			}else{
		      				if($bandera_tut=="rojo"){
			      				$res["res"] = "tutor_vacio";
			      			}
		      			}
		      		}
                  }
					
                print json_encode($res);
            


                  	
            
