		<?php
		$id_publicacion=null;
		$id_publicacion=$_POST["id_publicacion"];
		session_start();
		$id_user=$_SESSION["id_user"];
		include "conexion.php";	
		$select_id_publi_favs= pg_query ("SELECT id_publi_favs FROM publi_favs WHERE id_publicacion='$id_publicacion' AND id_user='$id_user'")or die("Error en: $select_id_publi_favs: " . pg_last_error());
			$cantidad = pg_num_rows($select_id_publi_favs);
			if($cantidad==0){
				$resultado1 = pg_query("INSERT INTO publi_favs (id_user, id_publicacion) VALUES ('$id_user', '$id_publicacion')")or die("Error en insertar id_publi_favs: " . pg_last_error());
				$res["res"]="success";
			}else{
				$res["res"]="fail";
			}

			print json_encode($res);
		

	