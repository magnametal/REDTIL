<?php
$id_user=null; $clave=null; 
$id_user = $_POST["id_user"]; $clave = md5($_POST["clave"]);			
			include "conexion.php";	
			
           $resp = pg_query("UPDATE usuario SET clave = '$clave' WHERE id_user = '$id_user'");
           $sql= "SELECT correo from usuario where (id_user='$id_user')";
						$r = pg_query ($sql)or die("Error en: $sql: " . pg_last_error());
				    	while ($row = pg_fetch_array($r)){
				    		$email = $row["correo"];
				    	}
			if(!$resp){
                die('Error actualizando solicitud: ' .pg_last_error());
                $resultado = "fail";
				$res["res"] = $resultado;
            }else{
                $resultado = "success";
				$res["res"] = $resultado;
				$destinatario = $email; 
							$asunto = "Tu clave de acceso ha sido modificada (No responder)"; 
							$cuerpo = ' 
							<html> 
							<head> 
							   <title></title> 
							</head> 
							<body> 
							<h1>¡Tu clave de acceso ha sido moficiada!</h1> 
							<p> 
							<b>Fundayachucho te informa que tu clave de acceso al sistema fue modificada satisfactoriamente. Ahora puedes acceder al sistema con tu nueva clave. 
								<a href="#link_a_fundayacucho"> Ingresar a Fundayacucho </a>
							</p>
							<b>Saludos desde Fundayacucho 
							</p> 
							</body> 
							</html> 
							'; 
							$headers = "MIME-Version: 1.0\r\n"; 
							$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
							$headers .= "From: Fundayacucho <becas@fundayacucho.gob.ve>\r\n"; 
							//mail($destinatario,$asunto,$cuerpo,$headers);
            }
						
				print json_encode($res);

?>