		<?php
			include "conexion.php";	
			session_start();
			$id_user=$_SESSION["id_user"];
			$final=array();
			$link=null;
			$link=$_POST["link"];
			$lugar=$_POST["lugar"];

			$sql0= pg_query ("SELECT id_pen FROM pendiente ORDER BY horafecha DESC")or die("Error en: $sql: " . pg_last_error());
			$cantidad0 = pg_num_rows($sql0);
			if($cantidad0>3){
				$res['res']="success";
				array_push($final, $res);
				$inicio = rand(1, $cantidad0-4);
				$contador=0;
				while ($row0 = pg_fetch_array($sql0))
				{
					$contador++;
					if($contador>=$inicio){
					$id_pen=$row0['id_pen'];		
					$sql= pg_query ("SELECT titulo_pen, resume_pen, horafecha, url_perfil, id_user FROM pendiente WHERE id_pen='$id_pen' ORDER BY horafecha DESC")or die("Error en: $sql: " . pg_last_error());
										
										while ($row = pg_fetch_array($sql))
										{
											
												$on['id_pen']=$id_pen;
												$on['fundador']=$row['id_user'];
												$fundador=$row['id_user'];
												$sql1= pg_query ("SELECT datos.nombre, datos.apellido, usuario.url_perfil FROM datos, usuario WHERE datos.id_user=usuario.id_user AND datos.id_user='$fundador'")or die("Error en: $sql: " . pg_last_error());
												while ($row1 = pg_fetch_array($sql1)){
													$on['nombre']=$row1['nombre'];
													$on['apellido']=$row1['apellido'];
													$on['url_perfil_user']=$row1['url_perfil'];
												}
												$cuenta= pg_query ("SELECT id_pend_favs FROM pend_favs WHERE id_pen='$id_pen' AND id_user='$id_user'")or die("Error en: $cuenta: " . pg_last_error());
												$cantida_cuenta = pg_num_rows($cuenta);
												$cuenta2= pg_query ("SELECT id_pend_favs FROM pend_favs WHERE id_pen='$id_pen'")or die("Error en: $cuenta2: " . pg_last_error());
												$cantida_cuenta2 = pg_num_rows($cuenta2);
												$on['favs']=$cantida_cuenta2;
												if($cantida_cuenta>0){
												$on['fav_val']="done";
												}else{
												$on['fav_val']="false";	
												}
												$cuenta_comen2= pg_query ("SELECT id_pen_comen FROM pend_comen WHERE id_pen='$id_pen'")or die("Error en: $cuenta_comen2: " . pg_last_error());
												$cantida_cuenta_comen2 = pg_num_rows($cuenta_comen2);
												$on['comen']=$cantida_cuenta_comen2;
												$on['url_perfil']=$row['url_perfil'];
												$on['titulo_pen']=$row['titulo_pen'];
												$on['resume_pen']=$row['resume_pen'];
												$on['horafecha']=$row['horafecha'];
												array_push($final, $on);
											
										}
					if(sizeOf($final)>=10){
						break;
					}
				}
			}
			}else{
				$res['res']="vacio";
				array_push($final, $res);
			}
			
			print json_encode($final);
	