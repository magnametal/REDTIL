		<?php
		session_start();
		$id_user=$_SESSION["id_user"];
		include "conexion.php";	
		$select_noti= pg_query ("SELECT id_notify FROM notify WHERE id_receptor='$id_user' AND id_noti_visto=2")or die("Error en: $select_noti: " . pg_last_error());
			$notis = pg_num_rows($select_noti);
			if(!$select_noti){
				$res["res"]="fail";
			}else{
				$res["res"]="success";
				$res["notis"]=$notis;
			}
			print json_encode($res);
		

	