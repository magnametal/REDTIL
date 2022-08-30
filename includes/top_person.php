		<?php
			include "conexion.php";
			session_start();
			$my_user=$_SESSION["id_user"];
			$estado=$_SESSION["estado"];
			

			$sql= pg_query ("SELECT usuario.id_user, usuario.url_perfil, datos.imagen, datos.nombre, datos.apellido FROM datos, usuario WHERE datos.id_user=usuario.id_user AND usuario.id_user!='$my_user' AND usuario.id_user!=1 AND usuario.habilitado='V' AND usuario.bienvenida='V' LIMIT 100")or die("Error en: $sql: " . pg_last_error());
	    	$final=array();
	    	$ficha=array();
			$cantidad = pg_num_rows($sql);

			$sql0= pg_query ("SELECT id_comunidad FROM comunidad WHERE estado='$estado'")or die("Error en: $sql: " . pg_last_error()); 
			$cantidad1 = pg_num_rows($sql0);
			
			
			if($cantidad1>0){
				$res['res_c']="success";
			}else{
				$res['res_c']="fail";
			}

			if($cantidad>0){
				$res['res_t']="success";
			}else{
				$res['res_t']="fail";
			}
			array_push($final, $res);
			if($cantidad>0){
				while ($row = pg_fetch_array($sql))
				{
					$on['id_user']=$row['id_user'];
					$id_user=$row['id_user'];
					$on['por']='tema';
					$on['nombre']=$row['nombre'];
					$on['apellido']=$row['apellido'];
					$on['url_perfil']=$row['url_perfil'];
					$on['imagen']=$row['imagen'];	
						$select_ficha= pg_query ("SELECT * FROM ficha_interes WHERE id_user='$id_user' ")or die("Error en: $select_ficha: " . pg_last_error());
						while ($row0 = pg_fetch_array($select_ficha)){
							$select_ficha2= pg_query ("SELECT column_name FROM information_schema.columns WHERE table_name = 'ficha_interes' AND data_type='numeric'")or die("Error en: $select_ficha2: " . pg_last_error());
								while ($row10 = pg_fetch_row($select_ficha2)){
									$ros[$row10[0]]=$row0[$row10[0]];
								}
						}
						while (list($clave, $valor) = each($ros)) {
						    $an['tema']=$clave;
						    $an['valor']=$valor;
						    array_push($ficha, $an);
						}
					$on['tema']=$ficha;	
					array_push($final, $on);
				}
				
			}

			if($cantidad1>0){
				while ($row01 = pg_fetch_array($sql0))
				{
					$id_com=$row01['id_comunidad'];
					$sql1= pg_query ("SELECT id_user FROM datos WHERE id_comunidad='$id_com' AND id_user!='$my_user' AND id_user!=1  ORDER BY id_user DESC LIMIT 10")or die("Error en: $sql: " . pg_last_error());
					while ($row1 = pg_fetch_array($sql1))
					{
						$id=$row1['id_user'];
							$sql2= pg_query ("SELECT usuario.id_user, usuario.url_perfil, datos.imagen, datos.nombre, datos.apellido FROM datos, usuario WHERE datos.id_user='$id' AND datos.id_user=usuario.id_user AND usuario.habilitado='V' AND usuario.bienvenida='V'")or die("Error en: $sql: " . pg_last_error());
							while ($row2 = pg_fetch_array($sql2))
							{	
								$ras['por']='comunidad';
								$ras['estado']=$estado;
								$ras['id_user']=$id;
								$ras['nombre']=$row2['nombre'];
								$ras['apellido']=$row2['apellido'];
								$ras['imagen']=$row2['imagen'];
								$ras['url_perfil']=$row2['url_perfil'];
								array_push($final, $ras);
								break;
							}
					}
				}
			}

				print json_encode($final);
	