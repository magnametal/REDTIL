		<?php
			include "conexion.php";	
			$sql= pg_query ("SELECT documento.id_doc, documento.valido, documento.titulo_doc, documento.tipo_doc, documento.resume_doc, libro.ano_publi, libro.edicion FROM documento, libro WHERE documento.id_doc=libro.id_doc AND documento.valido='V' ORDER BY id_doc DESC")or die("Error en: $sql: " . pg_last_error());
	    	$final=array();
	    	$ficha=array();
	    	session_start();
			$id_user=$_SESSION["id_user"];
			$cantidad = pg_num_rows($sql);
			if($cantidad>0){
				$res['res']="success";
				array_push($final, $res);
				while ($row = pg_fetch_array($sql))
				{
					$on['id_doc']=$row['id_doc'];
					$id_doc=$row['id_doc'];
						
						$select_ficha= pg_query ("SELECT * FROM ficha_doc WHERE id_doc='$id_doc'")or die("Error en: $cuenta: " . pg_last_error());
						while ($row0 = pg_fetch_array($select_ficha)){
							$select_ficha2= pg_query ("SELECT column_name FROM information_schema.columns WHERE table_name = 'ficha_doc' AND data_type='numeric'")or die("Error en: $cuenta: " . pg_last_error());
								while ($row10 = pg_fetch_row($select_ficha2)){
									$ros[$row10[0]]=$row0[$row10[0]];
								}
						}
						while (list($clave, $valor) = each($ros)) {
						    $an['tema']=$clave;
						    $an['valor']=$valor;
						    array_push($ficha, $an);
						}
											$cuenta= pg_query ("SELECT id_mis_libros FROM mis_libros WHERE id_doc='$id_doc' AND id_user='$id_user'")or die("Error en: $cuenta: " . pg_last_error());
											$cantida_cuenta = pg_num_rows($cuenta);
											if($cantida_cuenta>0){
											$on['my_val']="done";
											}else{
											$on['my_val']="false";	
											}
											$cuenta2= pg_query ("SELECT id_mis_libros FROM mis_libros WHERE id_doc='$id_doc'")or die("Error en: $cuenta2: " . pg_last_error());
											$cantida_cuenta2 = pg_num_rows($cuenta2);
											$on['my']=$cantida_cuenta2;
					$on['tema']=$ficha;			
					$on['titulo_doc']=$row['titulo_doc'];
					$on['tipo_doc']=$row['tipo_doc'];
					$on['resume_doc']=$row['resume_doc'];
					$on['ano_publi']=$row['ano_publi'];
					$on['valido']=$row['valido'];
					$on['edicion']=$row['edicion'];
					$cuenta= pg_query ("SELECT id_docs_favs FROM docs_favs WHERE id_doc='$id_doc' AND id_user='$id_user'")or die("Error en: $cuenta: " . pg_last_error());
					$cantida_cuenta = pg_num_rows($cuenta);
					$cuenta2= pg_query ("SELECT id_docs_favs FROM docs_favs WHERE id_doc='$id_doc'")or die("Error en: $cuenta2: " . pg_last_error());
					$cantida_cuenta2 = pg_num_rows($cuenta2);
					$on['favs']=$cantida_cuenta2;
					if($cantida_cuenta>0){
					$on['fav_val']="done";
					}else{
					$on['fav_val']="false";	
					}

					$cuenta_comp= pg_query ("SELECT id_docs_comp FROM docs_comp WHERE id_doc='$id_doc' AND id_user='$id_user'")or die("Error en: $cuenta_comp: " . pg_last_error());
					$cantida_cuenta_comp = pg_num_rows($cuenta_comp);
					if($cantida_cuenta_comp>0){
					$on['comp_val']="done";
					}else{
					$on['comp_val']="false";	
					}
					$cuenta_comp2= pg_query ("SELECT id_docs_comp FROM docs_comp WHERE id_doc='$id_doc'")or die("Error en: $cuenta_comp2: " . pg_last_error());
					$cantida_cuenta_comp2 = pg_num_rows($cuenta_comp2);
					$on['comp']=$cantida_cuenta_comp2;
					
					array_push($final, $on);
				}
			}else{
				$res['res']="vacio";
				array_push($final, $res);
			}
				print json_encode($final);
	