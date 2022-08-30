<?php
		$id_doc=null;
		$id_doc=$_POST["id_doc"];
 		session_start();
		$id_user=$_SESSION["id_user"];
		include "conexion.php";
		$valido=true;
		if($_FILES["archivo"]!="" AND $_FILES["archivo"]!=null){
		$file = $_FILES["archivo"];
		$name = $file["name"];
		$tipo = $file["type"];
		$ruta_provisional = $file["tmp_name"];
		$size = $file["size"];
		}

		if($_FILES["archivo"]==""){
			$res["res"]="vacio";
			$valido=false;
		}
		if($tipo !='application/pdf' OR $size > 2048*2048){
			$res["res"]="formato";
			$valido=false;
		}else{
			$resp = pg_query("UPDATE documento SET id_status = 2 WHERE id_doc = '$id_doc'");
		}

		if($valido==true){ //Verifica que el archivo tenga las dimensiones correctas
									$hacia = "../assets/archivos/".$id_user;
									if (!file_exists($hacia)) {
									    mkdir($hacia, 0777, true);
									}

									if(file_exists($hacia)){
										chmod($hacia, 0777);
										$name = str_replace(" ", "", $name);
										$src = $hacia."/".$id_doc.$name;
										if (file_exists($src)) {
											unlink($src);
										}
										rename ($ruta_provisional,$src);
										chmod($src, 0777);
										$carpeta = "assets/archivos/".$id_user."/";
										$doc = $carpeta.$id_doc.$name;
										$resp = pg_query("UPDATE documento SET archivo = '$doc', id_status = 1 WHERE id_doc = '$id_doc'")or die ("Error en carga de archivo ".pg_last_error());
											if($resp){
												$res["doc"]=$doc;
												$res["res"]="success";
											}else{
												$res["res"]="fail";
											}
													
									}else{
										$res["res"]="carpeta";
									}
									
		}



print json_encode($res);