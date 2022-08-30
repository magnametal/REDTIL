		<?php
		$id_pen=null;
		$id_pen=$_POST["id_pen"];
		session_start();
		$id_user=$_SESSION["id_user"];
		include "conexion.php";	
		$select_id_pen_favs= pg_query ("SELECT id_pend_favs FROM pend_favs WHERE id_pen='$id_pen' AND id_user='$id_user'")or die("Error en: $select_id_pend_favs: " . pg_last_error());
			$cantidad = pg_num_rows($select_id_pen_favs);
			if($cantidad==0){
				$resultado1 = pg_query("INSERT INTO pend_favs (id_user, id_pen) VALUES ('$id_user', '$id_pen')")or die("Error en insertar id_pend_favs: " . pg_last_error());
				$res["res"]="success";
			}else{
				$res["res"]="fail";
			}

			print json_encode($res);
		

	