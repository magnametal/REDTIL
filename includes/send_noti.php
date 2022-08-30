		<?php
		$emisor=null;
		$receptor=null;
		$t_noti=null;
		$id_notylast==null;
		$emisor=$_POST["emisor"];
		$receptor=$_POST["receptor"];
		$t_noti=$_POST["t_noti"];
		include "conexion.php";	
		$select_datos_e= pg_query ("SELECT * FROM datos WHERE id_user='$emisor'")or die("Error en: $select_datos_e: " . pg_last_error());
			while ($row = pg_fetch_array($select_datos_e))
				{	
					$imagen_e=$row['imagen_min'];
					$nombre_e=$row['nombre'];
					$apellido_e=$row['apellido'];
					break;
				}
		$select_usuario_e= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$emisor'")or die("Error en: $select_usuario_e: " . pg_last_error());
			while ($row = pg_fetch_array($select_usuario_e))
				{
					$url_perfil_e=$row['url_perfil'];
					break;
				}
		$select_datos_r= pg_query ("SELECT * FROM datos WHERE id_user='$receptor'")or die("Error en: $select_datos_r: " . pg_last_error());
			while ($row = pg_fetch_array($select_datos_r))
				{	
					$imagen_r=$row['imagen_min'];
					$nombre_r=$row['nombre'];
					$apellido_r=$row['apellido'];
					break;
				}
		$select_usuario_r= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$receptor'")or die("Error en: $select_usuario_r: " . pg_last_error());
			while ($row = pg_fetch_array($select_usuario_r))
				{
					$url_perfil_r=$row['url_perfil'];
					break;
				}


			$cantidad = pg_num_rows($select_id_docs_favs);
			if($cantidad==0){
				$resultado1 = pg_query("INSERT INTO docs_favs (id_user, id_doc) VALUES ('$id_user', '$id_doc')")or die("Error en insertar id_docs_favs: " . pg_last_error());
				$res["res"]="success";
			}else{
				$res["res"]="fail";
			}

			print json_encode($res);
		

	