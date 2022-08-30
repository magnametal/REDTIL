		<?php
			include "conexion.php";	
			$enlace=null;
			$enlace=$_POST["enlace"];
			$final=array();
			$sq= pg_query ("SELECT cedula, id_user FROM usuario WHERE url_perfil='$enlace' LIMIT 1")or die("Error en: $sql0: " . pg_last_error());
			while ($ro = pg_fetch_array($sq)){
				$cedula = $ro['cedula'];
				$id_user = $ro['id_user'];
			}
			$sql0= pg_query ("SELECT DISTINCT(documento.id_doc) FROM documento, autor, autoria WHERE documento.id_doc=autoria.id_doc AND autor.id_autor=autoria.id_autor AND autor.cedula='$cedula' AND documento.valido='V' AND documento.tipo_doc='I'")or die("Error en: $sql0: " . pg_last_error());
			$cantidad_docs = pg_num_rows($sql0);
			if($cantidad_docs!=0){
				$res['res']="success";
				array_push($final, $res);
						while ($row0 = pg_fetch_array($sql0))
						{
							$id_doc = $row0['id_doc'];
								$sql= pg_query ("SELECT documento.id_doc, documento.titulo_doc, documento.tipo_doc, documento.resume_doc, investigacion.publicado, investigacion.tipo_inv FROM documento, investigacion WHERE documento.id_doc=investigacion.id_doc")or die("Error en: $sql: " . pg_last_error());
									while ($row = pg_fetch_array($sql))
									{
										$on['id_doc']=$id_doc;					
										$on['titulo_doc']=$row['titulo_doc'];
										$on['tipo_doc']=$row['tipo_doc'];
										$on['resume_doc']=$row['resume_doc'];
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
										break;
									}
				}
			}else{
				$res['res']="vacio";
				array_push($final, $res);
			}
				print json_encode($final);
	