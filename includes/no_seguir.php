		<?php
			include "conexion.php";
			$no_seguido = $_POST["id_no_seguir"];
			session_start();
			$no_seguidor=$_SESSION["id_user"];
			
  			$resultado = pg_query("DELETE FROM seguidores where seguido='$no_seguido' AND seguidor='$no_seguidor'")or die("Error en delete interes: " . pg_last_error());
				if($resultado){
					$res["res"]="success";
				}else{
					$res["res"]="fail";
				}
				print json_encode($res);
	