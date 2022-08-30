		<?php
		$id_doc=null;
		$id_doc=$_POST["id_doc"];
		session_start();
		$id_user=$_SESSION["id_user"];
		include "conexion.php";	
				$resultado1 = pg_query("INSERT INTO descargas (id_user, id_doc) VALUES ('$id_user', '$id_doc')")or die("Error en insertar descargas: " . pg_last_error());

				$resultado2 = pg_query("SELECT archivo FROM documento WHERE id_doc='$id_doc'")or die("Error en buscar descargas: " . pg_last_error());
				while ($row = pg_fetch_array($resultado2)){
					$enlace="../".$row["archivo"];
				}

				if(!$resultado2 OR !$resultado1){
					$res["res"]="fail";
				}else{
					$res["res"]="success";
					$res["enlace"]=$enlace;
				}

				print json_encode($res);
	