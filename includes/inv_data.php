		<?php
		$id_doc=$_POST["id_doc"];
			include "conexion.php";	
			$sql= pg_query ("SELECT documento.id_doc, documento.titulo_doc, documento.archivo, documento.tipo_doc, documento.resume_doc, investigacion.img FROM documento, investigacion WHERE documento.id_doc=investigacion.id_doc AND documento.id_doc='$id_doc' ORDER BY id_doc")or die("Error en: $sql: " . pg_last_error());
			$cantidad = pg_num_rows($sql);
			if($cantidad>0){
				$res['res']="success";
				while ($row = pg_fetch_array($sql))
				{			
					$res['titulo_doc']=$row['titulo_doc'];
					$res['resume_doc']=$row['resume_doc'];
					$res['archivo']=$row['archivo'];
					$res['img']=$row['img'];
				}
			}else{
				$res['res']="fail";
			}
				print json_encode($res);
	