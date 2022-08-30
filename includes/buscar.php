		<?php
			include "security.php";
			include "conexion.php";
			$buscar=null;
			session_start();
			$my_id=$_SESSION["id_user"];
			$buscar=$_POST["buscar"];
			$buscar = limpiar($buscar);

			$sql= pg_query ("SELECT id_user, imagen, nombre, apellido FROM datos WHERE nombre ILIKE '%$buscar%' OR apellido ILIKE '%$buscar%'")or die("Error en: $sql: " . pg_last_error());
			$sql2= pg_query ("SELECT id_doc, titulo_doc, tipo_doc FROM documento WHERE titulo_doc ILIKE '%$buscar%' AND valido='V'")or die("Error en: $sql: " . pg_last_error());
	    	$final=array();
			$cantidad1 = pg_num_rows($sql);
			$cantidad2 = pg_num_rows($sql2);
			if($cantidad2==0 AND $cantidad1==0){
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
					$sql3= pg_query ("SELECT url_perfil FROM usuario WHERE id_user='$id_user'")or die("Error en: $sql: " . pg_last_error());
					while ($row2 = pg_fetch_array($sql3))
					{
							$on['url_perfil']=$row2['url_perfil'];	
						}
					$on['nombre']=$row['nombre'];
					$on['apellido']=$row['apellido'];
					$on['imagen']=$row['imagen'];
					$on['tipo']='user';
					array_push($final, $on);
					}
				}
			}
			if($cantidad2>0){
				while ($row = pg_fetch_array($sql2))
				{
					$on['id_doc']=$row['id_doc'];		
					$on['titulo_doc']=$row['titulo_doc'];
					$on['tipo_doc']=$row['tipo_doc'];
					$on['tipo']='doc';
					$tipo_doc=$row['tipo_doc'];
					if($tipo_doc=='I'){
						$on['imagen']='assets/img/inv_default.jpg';
					}
					if($tipo_doc=='L'){
						$on['imagen']='assets/img/lib_default.jpg';
					}

					array_push($final, $on);
				}
			}
				print json_encode($final);
	