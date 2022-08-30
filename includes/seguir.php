		<?php
			include "conexion.php";
			$seguido = $_POST["id_seguir"];
			session_start();
			$seguidor=$_SESSION["id_user"];
			$validacion = pg_query("SELECT id_seguidores FROM seguidores WHERE seguidor='$seguidor' AND seguido='$seguido'")or die("Error en select publicacion: " . pg_last_error());
            $cantidad = pg_num_rows($validacion);
            if($cantidad==0){
            	$resultado = pg_query("INSERT INTO seguidores (seguido, seguidor) VALUES ('$seguido', '$seguidor')")or die("Error en insertar interes: " . pg_last_error());
				if($resultado){
					$res["res"]="success";

					$mensaje="Te ha seguido. Ahora puede estar pendiente a tus publicaciones.";
					$resultado1 = pg_query("INSERT INTO notify (id_receptor, id_emisor, id_t_notify, mensaje) VALUES ('$seguido', '$seguidor', 4, '$mensaje')")or die("Error en insertar resultado1: " . pg_last_error());
				}
            }else{
            		$res["res"]="fail";
            }
			
				print json_encode($res);
	