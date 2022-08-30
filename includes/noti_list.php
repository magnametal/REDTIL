		<?php
			include "conexion.php";	
			$id_user=null;
			session_start();
			$final=array();
			$id_user=$_SESSION["id_user"];
			$mi_perfil=$_SESSION["url_perfil"];
			$imagen=$_SESSION["imagen"];
			$mi_nombre=$_SESSION["nombre"];
			$mi_apellido=$_SESSION["apellido"];
			$sql= pg_query ("SELECT * FROM notify WHERE id_receptor='$id_user' AND id_noti_visto=2 ORDER BY horafecha DESC LIMIT 5")or die("Error en: $sql0: " . pg_last_error());
			$cantidad = pg_num_rows($sql);
			if($cantidad>0){
				$res["res"] = "success";
				$res["mi_id"] = $id_user;
				$res["mi_perfil"] = $mi_perfil;
				$res["imagen"] = $imagen;
				$res["mi_nombre"] = $mi_nombre;
				$res["mi_apellido"] = $mi_apellido;
				array_push($final, $res);
				while ($row = pg_fetch_array($sql)){
					$on["id_notify"] = $row['id_notify'];
					$on["id_emisor"] = $row['id_emisor'];
					$on["mensaje"] = $row['mensaje'];
					$on["id_doc"] = $row['id_doc'];
					$id_emisor = $row['id_emisor'];
					$sq= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$id_emisor'")or die("Error en: $sq: " . pg_last_error());
						while ($ro = pg_fetch_array($sq)){
							$on["url_perfil"] = $ro['url_perfil'];
						}
					$sq2= pg_query ("SELECT * FROM datos WHERE id_user='$id_emisor'")or die("Error en: $sq2: " . pg_last_error());
						while ($ro2 = pg_fetch_array($sq2)){
							$on["nombre"] = $ro2['nombre'];
							$on["apellido"] = $ro2['apellido'];
							$on["imagen_min"] = $ro2['imagen_min'];
						}
					$on["id_t_notify"] = $row['id_t_notify'];
					$on["horafecha"] = $row['horafecha'];
					array_push($final, $on);
				}	
			}else{
				$res["res"] = "vacio";
				array_push($final, $res);
			}
			
			
			
				print json_encode($final);
	