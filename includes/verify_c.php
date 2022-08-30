<?php
include "security.php";
$cedula=null;
$cedula = $_POST["cedula"];
$cedula = limpiar($cedula);


			include "conexion.php";	
			$sql= "SELECT COUNT(id_user) from usuario where (cedula='$cedula')";
			$r = pg_query ($sql)or die("Error en: $sql: " . pg_last_error());
	    	while ($row = pg_fetch_row($r))
				{
					$cantidad = $row[0];
				}
				$res["cantidad"] = $cantidad;
				if($cantidad==0){
						$resultado = "fail";
						$res["res"] = $resultado;

				}else{
						$resultado = "success";
						$res["res"] = $resultado;
						}
				print json_encode($res);