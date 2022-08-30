		<?php
		$id_doc=null;
		$id_doc=$_POST["id_doc"];
		session_start();
		$id_user=$_SESSION["id_user"];
		include "conexion.php";	
		$select_id_mis_libros= pg_query ("SELECT id_mis_libros FROM mis_libros WHERE id_doc='$id_doc' AND id_user='$id_user'")or die("Error en: $select_id_mis_libros: " . pg_last_error());
			$cantidad = pg_num_rows($select_id_mis_libros);
			if($cantidad==0){
				$resultado1 = pg_query("INSERT INTO mis_libros (id_user, id_doc) VALUES ('$id_user', '$id_doc')")or die("Error en insertar id_docs_favs: " . pg_last_error());
				$res["res"]="success";
			}else{
				$res["res"]="fail";
			}

			print json_encode($res);
		

	