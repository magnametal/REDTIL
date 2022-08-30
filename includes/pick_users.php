		<?php
			include "conexion.php";
			$final = array();
			session_start();
			$id_user=$_SESSION["id_user"];
			$estado=$_SESSION["estado"];
			$sql= pg_query ("SELECT id_comunidad FROM comunidad WHERE estado='$estado' ORDER BY id_comunidad DESC")or die("Error en: $sql: " . pg_last_error());
			$cantidad=pg_num_rows($sql);
			$res['estado']=$estado;
			if($cantidad>5){
				$res['res']="comunidad";
				array_push($final, $res);
				while ($row = pg_fetch_array($sql))
				{
					$id_com=$row['id_comunidad'];
					$sql1= pg_query ("SELECT id_user FROM datos WHERE id_comunidad='$id_com' AND id_user!='$id_user' AND id_user!=1 ORDER BY id_user DESC LIMIT 6")or die("Error en: $sql: " . pg_last_error());
					while ($row1 = pg_fetch_array($sql1))
					{
						$id=$row1['id_user'];
							$sql2= pg_query ("SELECT * FROM datos WHERE id_user='$id'")or die("Error en: $sql: " . pg_last_error());
							while ($row2 = pg_fetch_array($sql2))
							{
								$on['id_user']=$id;
								$on['nombre']=$row2['nombre'];
								$on['apellido']=$row2['apellido'];
								$on['imagen']=$row2['imagen'];
								array_push($final, $on);
								break;
							}
					}
				}
					
				
			}else{
				$res['res']="simple";
				array_push($final, $res);
							$sql= pg_query ("SELECT * FROM datos WHERE id_user!='$id_user' AND id_user!=1 ORDER BY id_user DESC LIMIT 6")or die("Error en: $sql: " . pg_last_error());
							while ($row = pg_fetch_array($sql))
							{
								$on['id_user']=$row['id_user'];
								$on['nombre']=$row['nombre'];
								$on['apellido']=$row['apellido'];
								$on['imagen']=$row['imagen'];
								array_push($final, $on);
							}
			}
				print json_encode($final);
	