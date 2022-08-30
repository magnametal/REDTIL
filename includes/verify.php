<?php
include "security.php";
$email=null;
$email = $_POST["correo"];			
$email = limpiar($email);

			include "conexion.php";	
			$sql= "SELECT COUNT(id_user) from usuario where (correo='$email')";
			$r = pg_query ($sql)or die("Error en: $sql: " . pg_last_error());
	    	while ($row = pg_fetch_row($r))
				{
					$cantidad = $row[0];
				}
				if($cantidad==0){
						$resultado = "fail";
						$res["res"] = $resultado;

				}else{
						$resultado = "success";
						$res["res"] = $resultado;
						}
				print json_encode($res);