		<?php
			include "conexion.php";
			include "security.php";
			session_start();
			$id_user=$_SESSION["id_user"];
			$tematicas=null;
			$tit_pen=null;
			$desc_pen=null;
			$url_perfil=null;
			$desc_pen=$_POST["desc_pen"];
			$desc_pen = limpiar($desc_pen);
			$tit_pen=$_POST["tit_pen"];
			$tit_pen = limpiar($tit_pen);
			$url_perfil=$_POST["link"];
			$url_perfil = limpiar($url_perfil);

			if($tit_pen!=null AND $tit_pen!="" AND $desc_pen!=null AND $desc_pen!="" AND $url_perfil!=null AND $url_perfil!=""){

				$resultado = pg_query("INSERT INTO pendiente (id_user, titulo_pen, resume_pen, url_perfil) VALUES ('$id_user', '$tit_pen', '$desc_pen', '$url_perfil')")or die("Error en insertar pendiente: " . pg_last_error());
				$sql= pg_query ("SELECT id_pen FROM pendiente WHERE id_user='$id_user' ORDER BY id_pen DESC LIMIT 1")or die("Error en: $sql: " . pg_last_error());
				while ($row = pg_fetch_array($sql))
				{			
					$id_pen=$row['id_pen'];
				}
				$resultado2 = pg_query("INSERT INTO ficha_pen (id_pen) VALUES ('$id_pen')")or die("Error en insertar ficha_pendiente: " . pg_last_error());
				$resultado3 = pg_query("INSERT INTO colectivo (id_pen, id_user) VALUES ('$id_pen', '$id_user')")or die("Error en insertar ficha_pendiente: " . pg_last_error());
				if($resultado2){
					$tematicas=json_decode($_POST["array"]);
					$res["tems"]=$tematicas;
					$id_user=null;
					$bandera="verde";
					$id_user=$_SESSION["id_user"];
					$tam = sizeOf($tematicas);
						for($i=0;$i<$tam;$i++){
							if($tematicas[$i]=="t_int"){
								$resp = pg_query("UPDATE ficha_pen SET t_int = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="pro"){
								$resp = pg_query("UPDATE ficha_pen SET pro = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="arc"){
								$resp = pg_query("UPDATE ficha_pen SET arc = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="red"){
								$resp = pg_query("UPDATE ficha_pen SET red = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="org_t"){
								$resp = pg_query("UPDATE ficha_pen SET org_t = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="edu_t"){
								$resp = pg_query("UPDATE ficha_pen SET edu_t = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="block"){
								$resp = pg_query("UPDATE ficha_pen SET block = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="sft_pu"){
								$resp = pg_query("UPDATE ficha_pen SET sft_pu = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="innova"){
								$resp = pg_query("UPDATE ficha_pen SET innova = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="apps"){
								$resp = pg_query("UPDATE ficha_pen SET apps = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="iot"){
								$resp = pg_query("UPDATE ficha_pen SET iot = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="robot"){
								$resp = pg_query("UPDATE ficha_pen SET robot = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="geo"){
								$resp = pg_query("UPDATE ficha_pen SET geo = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="h_lib"){
								$resp = pg_query("UPDATE ficha_pen SET h_lib = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="gob_dig"){
								$resp = pg_query("UPDATE ficha_pen SET gob_dig = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="inter"){
								$resp = pg_query("UPDATE ficha_pen SET inter = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="datos_a"){
								$resp = pg_query("UPDATE ficha_pen SET datos_a = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="ai"){
								$resp = pg_query("UPDATE ficha_pen SET ai = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="tresd"){
								$resp = pg_query("UPDATE ficha_pen SET tresd = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
							if($tematicas[$i]=="cont_edu"){
								$resp = pg_query("UPDATE ficha_pen SET cont_edu = '1.000' WHERE id_pen = '$id_pen'");
								if(!$resp){
									$bandera="rojo";
								}
							}
						}//end-for
									
									$nombre=$_SESSION["nombre"];
									$imagen=$_SESSION["imagen"];
									$apellido=$_SESSION["apellido"];
								$info = new SplFileInfo($imagen);
								$extension = $info->getExtension();
							$imagen = "../".$imagen;
							$hacia="../assets/img/post/".$id_user."";
							if (!file_exists($hacia)) {
								mkdir($hacia, 0777, true);
							}
							$to = "../assets/img/post/".$id_user."/".$id_user.".".$extension;
							$save = "assets/img/post/".$id_user."/".$id_user.".".$extension;
							copy($imagen, $to);
							$mensaje = $nombre." ".$apellido." ha registrado un nuevo proyecto a su <strong>lista de pendientes</strong> con el título:<br><a href=".$url_perfil."><strong><h3>".$tit_pen."</strong></a></h3>";
							$resultado01 = pg_query("INSERT INTO publicacion (id_user, receptor, id_t_publicacion, mensaje, img) VALUES ('$id_user', '$id_user', 3, '$mensaje', '$save')")or die("Error en resultado publicacion: " . pg_last_error());
				}else{
					$bandera="rojo";
				}
					
			}else{
				$bandera="rojo";
			}

			
				if($bandera=="verde"){
					$res["res"]="success";
				}else{
					$res["error"]=pg_last_error();
					$res["res"]="fail";
				}
				print json_encode($res);
	