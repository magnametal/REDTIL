		<?php
		$id_pen=null;
		$final = array();
		$id_pen=$_POST["id_pen"];
			include "conexion.php";	
			$sql= pg_query ("SELECT id_user FROM solicitud_colectivo WHERE id_pen='$id_pen' AND id_status_colectivo=3 ORDER BY horafecha DESC")or die("Error en: $sql: " . pg_last_error());
			$cantidad = pg_num_rows($sql);
			if($cantidad>0){
				$res["res"]="success";
				array_push($final, $res);
				while ($row = pg_fetch_array($sql))
					{
						$id_user=$row['id_user'];
						$sql2= pg_query ("SELECT * FROM datos WHERE id_user='$id_user'")or die("Error en: $sql2: " . pg_last_error());
						while ($row2 = pg_fetch_array($sql2))
							{
								$on['id_user']=$row2['id_user'];
								$on['nombre']=$row2['nombre'];
								$on['apellido']=$row2['apellido'];
								$on['imagen']=$row2['imagen'];
							}
						
						$sql3= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$id_user'")or die("Error en: $sql3: " . pg_last_error());
							while ($row3 = pg_fetch_array($sql3))
							{
								$on['url_perfil']=$row3['url_perfil'];
								break;
							}
						array_push($final, $on);
					}
			}else{
				$res["res"]="vacio";
				array_push($final, $res);
			}
		print json_encode($final);
	