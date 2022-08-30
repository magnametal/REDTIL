<?php
				  include "security.php";
                  $email_autor = null;
                  $nom_autor = null;
                  $ape_autor = null;
                  $ano_publi = null;
                  $edicion = null;
                  $serial = null;
                  $array = null;
                  $id_last = null;
                  $cargado_por = null;
                  parse_str($_POST["serial"], $serial);
				  $tematicas=json_decode($_POST["array"]);
                  $email_autor = $serial["email_autor"];
                  $email_autor = limpiar($email_autor);
                  $nom_autor = $serial["nom_autor"];
                  $nom_autor = limpiar($nom_autor);
                  $ape_autor = $serial["ape_autor"];
                  $ape_autor = limpiar($ape_autor);
                  $titulo_doc = $serial["titulo_doc"];
                  $titulo_doc = limpiar($titulo_doc);
                  $desc_doc = $serial["desc_doc"];
                  $desc_doc = limpiar($desc_doc);
                  $ano_publi = $serial["ano_publi"];
                  $ano_publi = limpiar($ano_publi);
                  $edicion = $serial["edicion"];
                  $edicion = limpiar($edicion);

                  if(
	                $email_autor == null OR
	                $nom_autor == null OR
	                $ape_autor == null OR
	                $titulo_doc == null OR
	                $ano_publi == null OR
                 	$edicion == null OR
                 	$desc_doc == null OR
	                $email_autor == "" OR
	                $nom_autor == "" OR
	                $ape_autor == "" OR
	                $titulo_doc == "" OR
	                $ano_publi == "" OR
	                $edicion == "" OR
	                $desc_doc == ""){
                  	$res["res"] = "vacio";
                  }else{
                  	include "conexion.php";
					$bandera_temp="verde";

	              if(isset($serial["email_autor"])){
	              $email_a = null;
	              $nom_a = null;
	              $ape_a = null;
			          $email_a = $serial["email_autor"];
			          $email_a = limpiar($email_a);
			          $nom_a = $serial["nom_autor"];
			          $nom_a = limpiar($nom_a);
			          $ape_a = $serial["ape_autor"];
			          $ape_a = limpiar($ape_a);
			          if($email_a=="" OR $nom_a=="" OR $ape_a==""OR $email_a==null OR $nom_a==null OR $ape_a==null){
			          	$bandera_temp="rojo";
			          }else{
				          $emails[0]=$email_a;
				          $noms[0]=$nom_a;
				          $apes[0]=$ape_a;
			          }
			      }
		          if(isset($serial["email_autor0"])){
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
				          $email_a = $serial["email_autor0"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor0"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor0"];
				          $ape_a = limpiar($ape_a);
				          if($email_a=="" OR $nom_a=="" OR $ape_a=="" OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
					          $emails[1]=$email_a;
					          $noms[1]=$nom_a;
					          $apes[1]=$ape_a;
				          }
		      		}

		      		if(isset($serial["email_autor2"])){
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
				          $email_a = $serial["email_autor2"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor2"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor2"];
				          $ape_a = limpiar($ape_a);
				          if($email_a=="" OR $nom_a=="" OR $ape_a=="" OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
					          $emails[2]=$email_a;
					          $noms[2]=$nom_a;
					          $apes[2]=$ape_a;
				          }
		      		}

		      		if(isset($serial["email_autor4"])){
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
				          $email_a = $serial["email_autor4"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor4"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor4"];
				          $ape_a = limpiar($ape_a);
				          if($email_a=="" OR $nom_a=="" OR $ape_a=="" OR $email_a==null OR $nom_a==null OR $ape_a==null){
				          	$bandera_temp="rojo";
				          }else{
					          $emails[3]=$email_a;
					          $noms[3]=$nom_a;
					          $apes[3]=$ape_a;
				          }
		      		}

		      		if(isset($serial["email_autor6"])){
			              $email_a = null;
			              $nom_a = null;
			              $ape_a = null;
				          $email_a = $serial["email_autor6"];
				          $email_a = limpiar($email_a);
				          $nom_a = $serial["nom_autor6"];
				          $nom_a = limpiar($nom_a);
				          $ape_a = $serial["ape_autor6"];
				          $ape_a = limpiar($ape_a);
				          if($email_a=="" OR $nom_a=="" OR $ape_a=="" OR $email_a==null OR $nom_a==null OR $ape_a==null ){
				          	$bandera_temp="rojo";
				          }else{
					          $emails[4]=$email_a;
					          $noms[4]=$nom_a;
					          $apes[4]=$ape_a;
				          }
		      		}
		      		

		      		if($bandera_temp=="verde"){
		      			$select_seq = pg_query("SELECT MAX(id_doc) FROM documento");
							while ($row = pg_fetch_row($select_seq)){
								$id_last=$row[0];
							}
							if($id_last==null){
								$id_last=0;
							}
							$id_last++;
							$cota = "l-".$id_last;
							$id_doc = $id_last;
							$res["id_doc"] = $id_doc;
							session_start();
							$cargado_por = $_SESSION["id_user"];
							$res["cargado_por"] = $cargado_por;
						$insertar_doc = pg_query("INSERT INTO documento (titulo_doc, tipo_doc, resume_doc, cota, cargado_por) VALUES ('$titulo_doc', 'L', '$desc_doc', '$cota', '$cargado_por')")or die("Error en insertar_doc: " . pg_last_error());
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
						$insertar_proy = pg_query("INSERT INTO libro (id_doc, ano_publi, edicion) VALUES ('$id_doc', '$ano_publi', '$edicion')
						")or die("Error en insertar libro: " . pg_last_error());
						
							for ($i=0; $i < 5; $i++) {
	                  		$id_aut=null;
	                  		if(isset($emails[$i]) AND isset($noms[$i]) AND isset($apes[$i])){
					          if($emails[$i]!="" AND $noms[$i]!="" AND $apes[$i]!="" AND $emails[$i]!=null AND $noms[$i]!=null AND $apes[$i]!=null){
					          	$insertar_temp = pg_query("INSERT INTO autor (correo, nombre, apellido) VALUES ('$emails[$i]','$noms[$i]','$apes[$i]')")or die("Error en insertar_autor: " . pg_last_error());
						            $select_seq = pg_query("SELECT id_autor FROM autor WHERE correo = '$emails[$i]' AND nombre = '$noms[$i]' AND apellido = '$apes[$i]'ORDER BY id_autor DESC LIMIT 1");
					      				while ($row = pg_fetch_row($select_seq)){
											$id_last=$row[0];
											break;
										}
					    		$insertar_autoria = pg_query("INSERT INTO autoria (id_doc, id_autor) VALUES ('$id_doc', '$id_last')")or die("Error en insertar autoria: " . pg_last_error());
						         }
						     }
						    }
	                  	if(!$insertar_doc || !$insertar_proy || $bandera=="rojo"){
							$res["res"] = "error";
						}else{
							$res["res"] = "success";
						}

		      		}else{
		      			$res["res"] = "autor_vacio";
		      		}
                  }
					
                print json_encode($res);
            
