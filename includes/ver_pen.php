		<?php
			include "security.php";
			include "conexion.php";	
			session_start();
			$final=array();
			$link=null;
			$link=$_POST["link"];
			$link = limpiar($link);

			$lugar=$_POST["lugar"];
			$lugar = limpiar($lugar);
			if($lugar=="perfil"){
			$sql= pg_query ("SELECT id_user FROM usuario WHERE url_perfil='$link'")or die("Error en: $sql: " . pg_last_error());
				while ($row = pg_fetch_array($sql))
				{
					$id_user=$row['id_user'];		
					break;
				}
			}
			if($lugar=="nota"){
			$id_user=$_SESSION["id_user"];
			}
			$my_url=$_SESSION["url_perfil"];
				if($link==$my_url){
				$res["miperfil"]="V";
				}else{
				$res["miperfil"]="F";
				$sql= pg_query ("SELECT nombre FROM datos WHERE id_user='$id_user'")or die("Error en: $sql: " . pg_last_error());
				while ($row = pg_fetch_array($sql))
				{
					$nombre=$row['nombre'];		
					break;
				}
					$res["nombre"]=$nombre;
				}

			$sql0= pg_query ("SELECT id_pen FROM colectivo WHERE id_user='$id_user'")or die("Error en: $sql: " . pg_last_error());
			$cantidad0 = pg_num_rows($sql0);
			if($cantidad0>0){
				$res['res']="success";
				array_push($final, $res);
				while ($row0 = pg_fetch_array($sql0))
				{
					$id_pen=$row0['id_pen'];		
					$sql= pg_query ("SELECT titulo_pen, resume_pen, horafecha, url_perfil FROM pendiente WHERE id_pen='$id_pen' ORDER BY horafecha DESC")or die("Error en: $sql: " . pg_last_error());
										
										while ($row = pg_fetch_array($sql))
										{
											$on['id_pen']=$id_pen;
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
				}
			}else{
				$res['res']="vacio";
				array_push($final, $res);
			}
			
			print json_encode($final);
	