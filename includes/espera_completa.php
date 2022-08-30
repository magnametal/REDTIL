		<?php
			include "conexion.php";	
			$sql= pg_query ("SELECT id_doc, titulo_doc, tipo_doc FROM documento WHERE valido='F' ORDER BY id_doc DESC")or die("Error en: $sql: " . pg_last_error());
	    	$final=array();
			$cantidad = pg_num_rows($sql);
			if($cantidad>0){
				$res['res']="success";
				array_push($final, $res);
				while ($row = pg_fetch_array($sql))
				{
					$on['id_doc']=$row['id_doc'];		
					$on['titulo_doc']=$row['titulo_doc'];
					$on['tipo_doc']=$row['tipo_doc'];
					array_push($final, $on);
				}
			}else{
				$res['res']="vacio";
				array_push($final, $res);
			}
				print json_encode($final);
	