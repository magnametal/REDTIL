		<?php
			include "conexion.php";
			$id_user = $_POST["id_user"];
			$resp = pg_query("UPDATE datos SET imagen = 'assets/img/avatares/default/default.jpg' WHERE id_user = '$id_user'");
				if($resp){
					$res["res"]="success";
				}else{
					$res["res"]="fail";
				}

				print json_encode($res);
	