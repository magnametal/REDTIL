		<?php
			include "security.php";
			include "conexion.php";
			session_start();
			$my_id=$_SESSION["id_user"];
			$buscar=null;
			$buscar=$_POST["buscar"];
			$buscar = limpiar($buscar);
			$sql= pg_query ("SELECT id_user, imagen, nombre, apellido, id_comunidad FROM datos WHERE nombre ILIKE '%$buscar%' OR apellido ILIKE '%$buscar%'")or die("Error en: $sql: " . pg_last_error());
	    	$final=array();
			$cantidad1 = pg_num_rows($sql);
			if($cantidad1==0){
				$res['res']="vacio";
				array_push($final, $res);
			}else{
				$res['res']="success";
				array_push($final, $res);
			}
			if($cantidad1>0){
				while ($row = pg_fetch_array($sql))
				{	
					$id_user=$row['id_user'];
					if($id_user!=1 && $id_user!=$my_id){
					$on['id_user']=$id_user;
					$id_comunidad=$row['id_comunidad'];
						$sql2= pg_query ("SELECT estado FROM comunidad WHERE id_comunidad='$id_comunidad' LIMIT 1")or die("Error en: $sql: " . pg_last_error());
						while ($row2 = pg_fetch_array($sql2))
						{	
							$on['estado']=$row2['estado'];
						}
					$on['nombre']=$row['nombre'];
					$on['apellido']=$row['apellido'];
					$on['imagen']=$row['imagen'];
					array_push($final, $on);

					}
				}
			}
				print json_encode($final);
	