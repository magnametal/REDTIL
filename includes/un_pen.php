		<?php
			$id_pen=null;
			$id_pen=$_POST["id_pen"];
			session_start();
			$my_id=$_SESSION["id_user"];
			$res['my_id']=$my_id;
			include "conexion.php";	
			$final=array();
			
			$sql= pg_query ("SELECT id_pen, titulo_pen, resume_pen, horafecha FROM pendiente WHERE id_pen='$id_pen' ORDER BY horafecha DESC")or die("Error en: $sql: " . pg_last_error());
			if($sql){
				$res['res']="success";
				while ($row = pg_fetch_array($sql))
						{
							$res['id_pen']=$row['id_pen'];
							$id_pen=$row['id_pen'];
												$cuenta= pg_query ("SELECT id_pend_favs FROM pend_favs WHERE id_pen='$id_pen' AND id_user='$my_id'")or die("Error en: $cuenta: " . pg_last_error());
												$cantida_cuenta = pg_num_rows($cuenta);
												$cuenta2= pg_query ("SELECT id_pend_favs FROM pend_favs WHERE id_pen='$id_pen'")or die("Error en: $cuenta2: " . pg_last_error());
												$cantida_cuenta2 = pg_num_rows($cuenta2);
												$res['favs']=$cantida_cuenta2;
												if($cantida_cuenta>0){
												$res['fav_val']="done";
												}else{
												$res['fav_val']="false";	
												}
								$cuenta_comen2= pg_query ("SELECT id_pen_comen FROM pend_comen WHERE id_pen='$id_pen'")or die("Error en: $cuenta_comen2: " . pg_last_error());
								$cantida_cuenta_comen2 = pg_num_rows($cuenta_comen2);
								$res['comen']=$cantida_cuenta_comen2;	
							$res['titulo_pen']=$row['titulo_pen'];
							$res['resume_pen']=$row['resume_pen'];
							$res['horafecha']=$row['horafecha'];
							break;
						}
					$sql4= pg_query ("SELECT * FROM ficha_pen WHERE id_pen='$id_pen'")or die("Error en: $sql1: " . pg_last_error());
					while ($row4 = pg_fetch_array($sql4)){
						$res['t_int']=intval($row4['t_int']);
						$res['pro']=intval($row4['pro']);
						$res['arc']=intval($row4['arc']);
						$res['red']=intval($row4['red']);
						$res['org_t']=intval($row4['org_t']);
						$res['edu_t']=intval($row4['edu_t']);
						$res['block']=intval($row4['block']);
						$res['sft_pu']=intval($row4['sft_pu']);
						$res['innova']=intval($row4['innova']);
						$res['apps']=intval($row4['apps']);
						$res['iot']=intval($row4['iot']);
						$res['robot']=intval($row4['robot']);
						$res['geo']=intval($row4['geo']);
						$res['h_lib']=intval($row4['h_lib']);
						$res['gob_dig']=intval($row4['gob_dig']);
						$res['inter']=intval($row4['inter']);
						$res['datos_a']=intval($row4['datos_a']);
						$res['ai']=intval($row4['ai']);
						$res['tresd']=intval($row4['tresd']);
						$res['cont_edu']=intval($row4['cont_edu']);
						break;
					}
					$sql2= pg_query ("SELECT id_colectivo FROM colectivo WHERE id_pen='$id_pen' AND id_user='$my_id'")or die("Error en: $sql: " . pg_last_error());
					$cant_valido = pg_num_rows($sql2);
					if($cant_valido==0){
						$res['valido']="falso";
					}else{
						$res['valido']="verdadero";
					}
			}else{
				$res['res']="fail";
			}
				print json_encode($res);
	