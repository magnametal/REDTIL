<?php

      include "security.php";
			$id_doc = null;
                  $id_doc = $_POST["id_doc"];
                  
                  if(isset($_POST["ubv"])){
                        $comunidad_ubv=$_POST["ubv"];
                  }
                  $comunidad_ubv = limpiar($comunidad_ubv);
                  if($comunidad_ubv=="N"){
                        $publicado = null;
                        $tipo_inv = null;
                  }else{
                        $datetime = null;
                        $grado_proy = null;
                        $area_app = null;
                        $ano_semestre = null;
                        $com_estado = null;
                        $com_municipio = null;
                        $com_otro = null;
                  }

                  $titulo_doc = $_POST["titulo_doc"];
                  $titulo_doc = limpiar($titulo_doc);
                  $desc_doc = $_POST["desc_doc"];
                  $desc_doc = limpiar($desc_doc);

                  if($comunidad_ubv=="N"){
                        $publicado = $_POST["publicado"];
                        $publicado = limpiar($publicado);

                        $tipo_inv = $_POST["tipo_inv"];
                        $tipo_inv = limpiar($tipo_inv);
                  }else{
                        $datetime = $_POST["datetime"];
                        $datetime = limpiar($datetime);
                        $grado_proy = $_POST["grado_proy"];
                        $grado_proy = limpiar($grado_proy);
                        $area_app = $_POST["area_app"];
                        $area_app = limpiar($area_app);
                        $ano_semestre = $_POST["ano_semestre"];
                        $ano_semestre = limpiar($ano_semestre);
                        $com_estado = $_POST["com_estado"];
                        $com_estado = limpiar($com_estado);
                        $com_municipio = $_POST["com_municipio"];
                        $com_municipio = limpiar($com_municipio);
                        $com_otro = $_POST["com_otro"];
                        $com_otro = limpiar($com_otro);
                  }


                  $bandera_entrada="completa";
                  if($comunidad_ubv=="N"){
                        if(
                            $titulo_doc == null OR
                            $desc_doc == null OR
                            $tipo_inv == null OR
                            $publicado == null OR
                            $titulo_doc == "" OR
                            $tipo_inv == "" OR
                            $publicado == "" OR
                            $desc_doc == ""){
                              $bandera_entrada="incompleta";
                        }
                  }

                  if($comunidad_ubv=="S"){
                        if( 
                            $titulo_doc == null OR
                            $grado_proy == null OR
                            $area_app == null OR
                            $ano_semestre == null OR
                            $desc_doc == null OR
                            $com_estado == null OR
                            $com_municipio == null OR
                            $com_otro == null OR
                            $datetime == null OR
                            $datetime == ""  OR
                            $titulo_doc == "" OR
                            $grado_proy == "" OR
                            $area_app == "" OR
                            $ano_semestre == "" OR
                            $desc_doc == "" OR
                            $com_estado == "" OR
                            $com_municipio == "" OR
                            $com_otro == ""){
                              $bandera_entrada="incompleta";
                        }
                  }

                  if($bandera_entrada=="completa"){
                  	include "conexion.php";
                  	$resp = pg_query("UPDATE documento SET
                  	 titulo_doc = '$titulo_doc',
                  	 resume_doc = '$desc_doc'
                  	 WHERE 
                  	 id_doc = '$id_doc'");

                                    if($comunidad_ubv=="N"){

                                          $resp2 = pg_query("UPDATE investigacion SET
                                           publicado = '$publicado',
                                           tipo_inv = '$tipo_inv'
                                           WHERE 
                                           id_doc = '$id_doc'");

                                    }else{

                                          if($comunidad_ubv=="S"){
                                                $select_comuni= pg_query ("SELECT id_comunidad FROM comunidad WHERE estado='$com_estado' AND municipio='$com_municipio' AND ciudad='$com_otro'")or die("Error en: $sql: " . pg_last_error());
                                                $numero_comuni = pg_num_rows($select_comuni);
                                                      if($numero_comuni==0){
                                                            $insertar_com = pg_query("INSERT INTO comunidad (estado, municipio, ciudad) VALUES ('$com_estado', '$com_municipio', '$com_otro')")or die("Error en insertar insertar_com: " . pg_last_error());
                                                                  $select_com= pg_query("SELECT id_comunidad FROM comunidad WHERE (estado='$com_estado') AND (municipio='$com_municipio') AND (ciudad='$com_otro')")or die("Error en consultar comunidad: " . pg_last_error());
                                                                              while ($row = pg_fetch_array($select_com))
                                                                              {
                                                                                    $id_comunidad = $row["id_comunidad"];
                                                                                    break;
                                                                              }
                                                      }else{
                                                            $select_com= pg_query("SELECT id_comunidad from comunidad where (estado='$com_estado') AND (municipio='$com_municipio') AND (ciudad='$com_otro')")or die("Error en consultar comunidad: " . pg_last_error());
                                                                              while ($row = pg_fetch_array($select_com))
                                                                              {
                                                                                    $id_comunidad = $row["id_comunidad"];
                                                                                    break;
                                                                              }
                                                      }
                                                $resp2 = pg_query("UPDATE investigacion SET
                                                 grado_proy = '$grado_proy',
                                                 area_app = '$area_app',
                                                 ano_semestre = '$ano_semestre',
                                                 id_comunidad = '$id_comunidad',
                                                 comunidad_ubv = '$comunidad_ubv',
                                                 fecha_pre = '$datetime'
                                                 WHERE 
                                                 id_doc = '$id_doc'");

                                                }
                                    }
                                    
                              if(!$resp || !$resp2){
                                          $res["res"] = "error";
                              }else{
                                          $res["res"] = "success";
                              }

                                    
                  }else{
                        $res["res"] = "vacio";
                  }
					
                print json_encode($res);
            
