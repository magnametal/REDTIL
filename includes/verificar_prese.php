<?php
include "security.php";
$id_user=null; $respuesta=null; 
$id_user = $_POST["id_user"];
$respuesta = $_POST["respuesta"];
$respuesta = limpiar($respuesta);
			include "conexion.php";	
			$select_resecret= pg_query("SELECT resecret from usuario where (id_user='$id_user')")or die("Error en consultar resecret: " . pg_last_error());
			while ($row = pg_fetch_array($select_resecret))
			{
				$resecret = $row["resecret"];
				break;
			}
			if($respuesta==$resecret){
				$res["res"]="success";
				$res["id_user"]=$id_user;
			}else{
				$res["res"]="fail";
			}

				print json_encode($res);

?>