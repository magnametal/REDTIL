<?php
include "security.php";
$id_user=null;
$email=null;
$email = $_POST["email"];	
$email = limpiar($email);

            include "conexion.php";	
			
						$sql= "SELECT * from usuario where (correo='$email')";
						$r = pg_query ($sql)or die("Error en: $sql: " . pg_last_error());
				    	while ($row = pg_fetch_array($r))
							{
                               $id_user = $row["id_user"];
                               $res["id_user"] = $id_user;
                               $res["presecret"] = $row["presecret"]; 
                            break;}
                        if ($id_user!=null){
                           $resultado = "success";
                              $destinatario = $email; 
                              $asunto = "Solicitud de cambio de clave Fundayacucho (No responder)"; 
                              $cuerpo = ' 
                              <html> 
                              <head> 
                                 <title></title> 
                              </head> 
                              <body> 
                              <h1>¡Has solicitado cambio de tu clave de acceso!</h1> 
                              <p> 
                              <b>Por favor haz click en el siguiente enlace para cambiar tu clave de acceso: 
                                <a href="localhost/RedTIL/html/new_pass.html#oopdfosdf435'. $id_user .'df435gpgmgmpl433343?¿ewrw">Cambiar mi clave</a>
                              </p>
                              <b>Saludos
                              </p> 
                              </body> 
                              </html> 
                              '; 
                              $headers = "MIME-Version: 1.0\r\n"; 
                              $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
                              $headers .= "From: Fundayacucho <becas@fundayacucho.gob.ve>\r\n"; 
                              //DESCOMENTAR PARA GETIÓN DE CORREOS
                              //mail($destinatario,$asunto,$cuerpo,$headers);
						$res["res"] = $resultado; 
                        }else{
                            $resultado = "fail";
						$res["res"] = $resultado; 
                        }
                        print json_encode($res);

?>