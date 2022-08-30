		<?php
			include "conexion.php";	
			$enlace=null;
			$enlace=$_POST["enlace"];

			$sq= pg_query ("SELECT cedula, id_user FROM usuario WHERE url_perfil='$enlace' LIMIT 1")or die("Error en: $sql0: " . pg_last_error());
			while ($ro = pg_fetch_array($sq)){
				$cedula = $ro['cedula'];
				$id_user = $ro['id_user'];
			}
			$final=array();

			$sql10= pg_query ("SELECT DISTINCT(mis_libros.id_doc) FROM mis_libros, documento, autor, autoria WHERE documento.id_doc=autoria.id_doc AND autor.id_autor=autoria.id_autor AND documento.valido='V' AND documento.tipo_doc='L' AND documento.id_doc=mis_libros.id_doc AND  mis_libros.id_user='$id_user'")or die("Error en: $sql0: " . pg_last_error());
			$cantidad_docs10 = pg_num_rows($sql10);
			if($cantidad_docs10!=0){
				$res_m['res_m']="success";
				array_push($final, $res_m);	
			}else{
				$res_m['res_m']="vacio";
				array_push($final, $res_m);
			}
			if($cantidad_docs10!=0){
				while ($row10 = pg_fetch_array($sql10))
						{
							$id_doc = $row10['id_doc'];
								$sql= pg_query ("SELECT documento.titulo_doc, documento.tipo_doc, documento.resume_doc, libro.ano_publi, libro.edicion FROM documento, libro WHERE documento.id_doc=libro.id_doc AND documento.id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
										while ($row = pg_fetch_array($sql))
										{
											$on['id_doc']=$id_doc;
											$on['status']="favoritos";			
											$on['titulo_doc']=$row['titulo_doc'];
											$on['tipo_doc']=$row['tipo_doc'];
											$on['resume_doc']=$row['resume_doc'];
											$on['ano_publi']=$row['ano_publi'];
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
											$cuenta3= pg_query ("SELECT id_mis_libros FROM mis_libros WHERE id_doc='$id_doc'")or die("Error en: $cuenta2: " . pg_last_error());
											$cantida_cuenta3 = pg_num_rows($cuenta3);
											$on['my']=$cantida_cuenta3;
											$cuenta_comen= pg_query ("SELECT id_docs_comen FROM docs_comen WHERE id_doc='$id_doc' AND id_user='$id_user'")or die("Error en: $cuenta_comen: " . pg_last_error());
											$cantida_cuenta_comen = pg_num_rows($cuenta_comen);
											if($cantida_cuenta_comen>0){
											$on['comen_val']="done";
											}else{
											$on['comen_val']="false";	
											}
											$cuenta_comen2= pg_query ("SELECT id_docs_comen FROM docs_comen WHERE id_doc='$id_doc'")or die("Error en: $cuenta_comen2: " . pg_last_error());
											$cantida_cuenta_comen2 = pg_num_rows($cuenta_comen2);
											$on['comen']=$cantida_cuenta_comen2;
											array_push($final, $on);
											break;
										}
					}
			}
				print json_encode($final);
	