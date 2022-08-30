		<?php
			include "conexion.php";	
			$sql= pg_query ("SELECT usuario.id_user, usuario.habilitado, correo, cedula, t_user, datos.nombre, datos.apellido FROM usuario, datos WHERE datos.id_user=usuario.id_user ORDER BY id_user DESC")or die("Error en: $sql: " . pg_last_error());
			$cantidad=pg_num_rows($sql);
	    	$final=array();
	    	session_start();
			if($cantidad>0){
				$res['res']="success";
				array_push($final, $res);
				while ($row = pg_fetch_array($sql))
				{	
					$on['id_user']=$row['id_user'];
					$on['correo']=$row['correo'];					
					$on['cedula']=$row['cedula'];
					$on['t_user']=$row['t_user'];
					$on['nombre']=$row['nombre'];
					$on['apellido']=$row['apellido'];
					$on['habilitado']=$row['habilitado'];
					array_push($final, $on);
				}
			}else{
				$res['res']="vacio";
				array_push($final, $res);
			}
				print json_encode($final);
	