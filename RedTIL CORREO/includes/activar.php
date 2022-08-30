<?php

	include "conexion.php";
	$id_user = $_POST["id_user"];
	$sql = pg_query("UPDATE usuario SET activacion = 'V' WHERE id_user = '$id_user'");
					if(!$sql){
						$resultado = "fail";
						$res["res"] = $resultado;
					}else{
						$resultado = "success";
						$res["res"] = $resultado;
					}
	print json_encode($res);

 ?>