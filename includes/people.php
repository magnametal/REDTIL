		<?php
			include "conexion.php";
			$final = array();
			$sigo = array();
			$bandera=null;
			session_start();
			$id_user=$_SESSION["id_user"];

							$select_ficha= pg_query ("SELECT * FROM ficha_interes WHERE id_user='$id_user'")or die("Error en: $select_ficha: " . pg_last_error());
								while ($row0 = pg_fetch_array($select_ficha)){
									$select_ficha2= pg_query ("SELECT column_name FROM information_schema.columns WHERE table_name = 'ficha_interes' AND data_type='numeric'")or die("Error en: $select_ficha2: " . pg_last_error());
										while ($row10 = pg_fetch_row($select_ficha2)){
											$yo[$row10[0]]=intval($row0[$row10[0]]);
										}
								}

							$select_misseg= pg_query ("SELECT seguido FROM seguidores WHERE seguidor='$id_user'")or die("Error en: $select_ficha: " . pg_last_error());
								while ($row9 = pg_fetch_array($select_misseg)){
									array_push($sigo, $row9['seguido']);
								}


							$sql= pg_query ("SELECT * FROM datos WHERE id_user!='$id_user' AND id_user!=1 ORDER BY id_user DESC")or die("Error en: $sql: " . pg_last_error());
							$number = pg_num_rows($sql);
							$inicio = rand(1, $number-2);
							$contador=0;
							while ($row = pg_fetch_array($sql))
							{		$contador++;
								if($contador>=$inicio){
										$comunes = null;
										$comunes = array();
										$este_id=$row['id_user'];

										if (!in_array($este_id, $sigo)) {
											$bandera="rojo";
											$select_ficha= pg_query ("SELECT * FROM ficha_interes WHERE id_user='$este_id'")or die("Error en: $select_ficha: " . pg_last_error());
												while ($row0 = pg_fetch_array($select_ficha)){
													$select_ficha2= pg_query ("SELECT column_name FROM information_schema.columns WHERE table_name = 'ficha_interes' AND data_type='numeric'")or die("Error en: $select_ficha2: " . pg_last_error());
													
														while ($row10 = pg_fetch_row($select_ficha2)){
															if($yo[$row10[0]]==1 && intval($row0[$row10[0]])==1){
																array_push($comunes, $row10[0]);
																$bandera="verde";
															}
														}
												}
												if(sizeOf($final)<2){
												$on['id_user']=$row['id_user'];
												$sql3= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$este_id'")or die("Error en: $sql: " . pg_last_error());
												while ($row3 = pg_fetch_array($sql3))
												{
													$on['url_perfil']=$row3['url_perfil'];
													break;
												}
												
												if($bandera=="verde"){
													$on['comunes']=$comunes;
													$on['nombre']=$row['nombre'];
													$on['apellido']=$row['apellido'];
													$on['id_comunidad']=$row['id_comunidad'];
													$id_comunidad=$row['id_comunidad'];
													$sql2= pg_query ("SELECT estado FROM comunidad WHERE id_comunidad='$id_comunidad'")or die("Error en: $sql: " . pg_last_error());
													while ($row2 = pg_fetch_array($sql2))
													{
														$on['estado']=$row2['estado'];
														break;
													}
													$on['imagen']=$row['imagen'];
													array_push($final, $on);
													
												}
												}else{
														break;
												}
									}
								}
							}
				print json_encode($final);
	