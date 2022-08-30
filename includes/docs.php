		<?php
			include "conexion.php";
			$final = array();
			session_start();
			$id_user=$_SESSION["id_user"];

							$select_ficha= pg_query ("SELECT * FROM ficha_interes WHERE id_user='$id_user'")or die("Error en: $select_ficha: " . pg_last_error());
								while ($row0 = pg_fetch_array($select_ficha)){
									$select_ficha2= pg_query ("SELECT column_name FROM information_schema.columns WHERE table_name = 'ficha_interes' AND data_type='numeric'")or die("Error en: $select_ficha2: " . pg_last_error());
										while ($row10 = pg_fetch_row($select_ficha2)){
											$yo[$row10[0]]=intval($row0[$row10[0]]);
										}
								}
							
							$sql= pg_query ("SELECT * FROM documento WHERE valido='V' ORDER BY id_doc DESC")or die("Error en: $sql: " . pg_last_error());
							$number = pg_num_rows($sql);
							$inicio = rand(1, $number-2);
							$contador=0;
							while ($row = pg_fetch_array($sql))
							{	
								$contador++;
								if($contador>=$inicio){

										$comunes = null;
										$comunes = array();
										$este_id=$row['id_doc'];
										$select_ficha= pg_query ("SELECT * FROM ficha_doc WHERE id_doc='$este_id'")or die("Error en: $select_ficha: " . pg_last_error());
										while ($row0 = pg_fetch_array($select_ficha)){
											
											$select_ficha2= pg_query ("SELECT column_name FROM information_schema.columns WHERE table_name = 'ficha_interes' AND data_type='numeric'")or die("Error en: $select_ficha2: " . pg_last_error());
												while ($row10 = pg_fetch_row($select_ficha2)){
													if($yo[$row10[0]]==1 && intval($row0[$row10[0]])==1){
														array_push($comunes, $row10[0]);
													}
												}
										}
										if(sizeOf($final)<2){
												$on['comunes']=$comunes;
												$on['id_doc']=$row['id_doc'];
												$on['titulo_doc']=$row['titulo_doc'];
												$on['tipo_doc']=$row['tipo_doc'];
												array_push($final, $on);
										}else{
											break;
										}
																	
								}
							}
				print json_encode($final);
	