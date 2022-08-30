		<?php
			include "conexion.php";
			$id_doc=$_POST["id_doc"];
			$sql= pg_query ("SELECT * FROM comentario WHERE id_doc='$id_doc' ORDER BY horafecha DESC")or die("Error en: $sql: " . pg_last_error());
	    	$final=array();
			$cantidad = pg_num_rows($sql);
			if($cantidad>0){
				$res['res']="success";
				array_push($final, $res);
				while ($row = pg_fetch_array($sql))
				{
					$on['id_user']=$row['id_user'];
					$id_user=$row['id_user'];
					$on['mensaje']=$row['mensaje'];
					$sql2= pg_query ("SELECT * FROM datos WHERE id_user='$id_user'")or die("Error en: $sql2: " . pg_last_error());
					while ($row2 = pg_fetch_array($sql2))
						{
							$on['nombre']=$row2['nombre'];		
							$on['imagen']=$row2['imagen'];
						}
					array_push($final, $on);
				}
			}else{
				$res['res']="vacio";
				array_push($final, $res);
			}
				print json_encode($final);
	