<?php


      include "security.php";
			$id_doc = null;
                  $titulo_doc = null;
                  $ano_publi = null;
                  $edicion = null;
                  $desc_doc = null;

                  $id_doc = $_POST["id_doc"];

                  $titulo_doc = $_POST["titulo_doc"];
                  $titulo_doc = limpiar($titulo_doc);
                  $ano_publi = $_POST["ano_publi"];
                  $ano_publi = limpiar($ano_publi);
                  $edicion = $_POST["edicion"];
                  $edicion = limpiar($edicion);
                  $desc_doc = $_POST["desc_doc"];
                  $desc_doc = limpiar($desc_doc);

                  if(
                        $id_doc == null OR
	                $titulo_doc == null OR
	                $ano_publi == null OR
                      $edicion == null OR
                      $desc_doc == null OR
	                $titulo_doc == "" OR
	                $edicion == "" OR
	                $id_doc == "" OR
	                $ano_publi == "" OR
	                $desc_doc == ""){
                  	$res["res"] = "vacio";
                  }else{
                  	include "conexion.php";
                  	$resp = pg_query("UPDATE documento SET
                  	 titulo_doc = '$titulo_doc',
                  	 resume_doc = '$desc_doc'
                  	 WHERE 
                  	 id_doc = '$id_doc'");

                  	$resp2 = pg_query("UPDATE libro SET
                  	 edicion = '$edicion',
                  	 ano_publi = '$ano_publi'
                  	 WHERE 
                  	 id_doc = '$id_doc'");

						if(!$resp || !$resp2){
							$res["res"] = "error";
						}else{
							$res["res"] = "success";
						}
                  }
					
                print json_encode($res);
            
