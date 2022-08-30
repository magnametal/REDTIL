		<?php
			include "conexion.php";
			$id_user = $_POST["id_user"];
			$sql= pg_query ("SELECT usuario.habilitado, usuario.correo, usuario.cedula, usuario.t_user, datos.nombre, datos.apellido, datos.imagen, datos.id_comunidad FROM usuario, datos WHERE datos.id_user=usuario.id_user AND usuario.id_user='$id_user'")or die("Error en: $sql: " . pg_last_error());
			$cantidad=pg_num_rows($sql);
			if($cantidad>0){
				$res['res']="success";
				while ($row = pg_fetch_array($sql))
				{	
					$res['id_user']=$id_user;
					$res['correo']=$row['correo'];					
					$res['cedula']=$row['cedula'];
					$res['t_user']=$row['t_user'];
					$res['nombre']=$row['nombre'];
					$res['apellido']=$row['apellido'];
					$res['imagen']=$row['imagen'];
					$res['id_comunidad']=$row['id_comunidad'];
					$id_comunidad=$row['id_comunidad'];
						$select_id_comunidad= pg_query ("SELECT estado, municipio, ciudad FROM comunidad WHERE id_comunidad='$id_comunidad'")or die("Error en: $select_id_comunidad: " . pg_last_error());
							while ($row2 = pg_fetch_array($select_id_comunidad)){
								$res['municipio']=$row2['municipio'];
								$res['estado']=$row2['estado'];
								$res['ciudad']=$row2['ciudad'];
							}
				}
			}else{
				$res['res']="vacio";
			}
				print json_encode($res);
	