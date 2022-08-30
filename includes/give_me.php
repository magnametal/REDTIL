		<?php
			include "security.php";
			include "conexion.php";
			$url_perfil=null;
			$url_perfil=$_POST["link"];
			$url_perfil = limpiar($url_perfil);
			
			$selec_url= pg_query ("SELECT id_user FROM usuario WHERE url_perfil='$url_perfil'")or die("Error en: $selec_url: " . pg_last_error());
			$cantidad=pg_num_rows($selec_url);
			if($cantidad>0){
				while ($row = pg_fetch_array($selec_url))
				{	
					$id_user=$row['id_user'];
					break;
				}
			$sql= pg_query ("SELECT datos.imagen FROM usuario, datos WHERE datos.id_user=usuario.id_user AND usuario.id_user='$id_user'")or die("Error en: $sql: " . pg_last_error());
				$res['res']="success";
				$res['tipo']="user";
				while ($row = pg_fetch_array($sql))
				{	
					$res['imagen']=$row['imagen'];
				}
			}else{
				
				$res['res']="vacio";	
			}
				print json_encode($res);
	