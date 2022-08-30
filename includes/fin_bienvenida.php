		<?php
			include "conexion.php";
			session_start();
			$id_user=null;
			$id_user=$_SESSION["id_user"];
			$sql= pg_query ("UPDATE usuario SET bienvenida = 'V' WHERE id_user = '$id_user'");
			if(!$sql){
				$res['res']="fail";
			}else{
				$_SESSION["bienvenida"]="V";
				$res['res']="success";
			}
				print json_encode($res);
	