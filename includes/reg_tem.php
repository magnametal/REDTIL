		<?php
			include "conexion.php";
			$tematicas=null;
			$tematicas=json_decode($_POST["array"]);
			$res["tems"]=$tematicas;
			session_start();
			$id_user=null;
			$bandera="verde";
			$id_user=$_SESSION["id_user"];
			$tam = sizeOf($tematicas);
				for($i=0;$i<$tam;$i++){
					if($tematicas[$i]=="t_int"){
						$resp = pg_query("UPDATE ficha_interes SET t_int = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="pro"){
						$resp = pg_query("UPDATE ficha_interes SET pro = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="arc"){
						$resp = pg_query("UPDATE ficha_interes SET arc = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="red"){
						$resp = pg_query("UPDATE ficha_interes SET red = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="org_t"){
						$resp = pg_query("UPDATE ficha_interes SET org_t = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="edu_t"){
						$resp = pg_query("UPDATE ficha_interes SET edu_t = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="block"){
						$resp = pg_query("UPDATE ficha_interes SET block = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="sft_pu"){
						$resp = pg_query("UPDATE ficha_interes SET sft_pu = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="innova"){
						$resp = pg_query("UPDATE ficha_interes SET innova = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="apps"){
						$resp = pg_query("UPDATE ficha_interes SET apps = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="iot"){
						$resp = pg_query("UPDATE ficha_interes SET iot = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="robot"){
						$resp = pg_query("UPDATE ficha_interes SET robot = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="geo"){
						$resp = pg_query("UPDATE ficha_interes SET geo = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="h_lib"){
						$resp = pg_query("UPDATE ficha_interes SET h_lib = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="gob_dig"){
						$resp = pg_query("UPDATE ficha_interes SET gob_dig = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="inter"){
						$resp = pg_query("UPDATE ficha_interes SET inter = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="datos_a"){
						$resp = pg_query("UPDATE ficha_interes SET datos_a = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="ai"){
						$resp = pg_query("UPDATE ficha_interes SET ai = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="tresd"){
						$resp = pg_query("UPDATE ficha_interes SET tresd = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
					if($tematicas[$i]=="cont_edu"){
						$resp = pg_query("UPDATE ficha_interes SET cont_edu = '1.000' WHERE id_user = '$id_user'");
						if(!$resp){
							$bandera="rojo";
						}
					}
				}
				if($bandera=="verde"){
					$res["res"]="success";
				}else{
					$res["error"]=pg_last_error();
					$res["res"]="fail";
				}
				print json_encode($res);
	