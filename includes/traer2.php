<?php
session_start();
$id_actual=$_SESSION["id_user"];
include "conexion.php";	
$final=array();
        $resultado = pg_query("SELECT * FROM publicacion WHERE receptor='$id_actual' ORDER BY horafecha DESC")or die("Error en insertar publicacion: " . pg_last_error());
                    if($resultado){
                        $res["id_publicacion"]="0";
                        $res["res"]="success";
                        array_push($final, $res);
                        while ($row = pg_fetch_array($resultado))
                        {	
                            $on['id_publicacion']=$row['id_publicacion'];
                            $id_user=$row['id_user']; 
                            $id_publicacion=$row['id_publicacion'];
                            $resultado2 = pg_query("SELECT * FROM datos WHERE id_user='$id_user' ")or die("Error en insertar datos: " . pg_last_error()); 
                            while ($row1 = pg_fetch_array($resultado2))
                            {
                            $on['nombre']=$row1['nombre'];
                            $on['apellido']=$row1['apellido'];   
                            $on['imagen']=$row1['imagen'];
                            break;
                            }

                            $resultado3 = pg_query("SELECT * FROM datos WHERE id_user='$id_actual' ")or die("Error en insertar datos: " . pg_last_error()); 
                            while ($row6 = pg_fetch_array($resultado3))
                            {
                            $on['mi_nombre']=$row6['nombre'];  
                            $on['mi_apellido']=$row6['apellido'];
                            break;
                            }
                            $resultado4 = pg_query("SELECT url_perfil FROM usuario WHERE id_user='$id_user' ")or die("Error en insertar datos: " . pg_last_error()); 
                            while ($row2 = pg_fetch_array($resultado4))
                            {
                            $on['url_perfil2']=$row2['url_perfil'];
                            $on['url_perfil']=$_SESSION["url_perfil"];
                            break;
                            }
                            $cuenta= pg_query ("SELECT id_publi_favs FROM publi_favs WHERE id_publicacion='$id_publicacion' AND id_user='$id_actual'")or die("Error en: $cuenta: " . pg_last_error());
                            $cantida_cuenta = pg_num_rows($cuenta);
                            $cuenta2= pg_query ("SELECT id_publi_favs FROM publi_favs WHERE id_publicacion='$id_publicacion'")or die("Error en: $cuenta2: " . pg_last_error());
                            $cantida_cuenta2 = pg_num_rows($cuenta2);
                            $on['favs']=$cantida_cuenta2;
                            if($cantida_cuenta>0){
                            $on['fav_val']="done";
                            }else{
                            $on['fav_val']="false"; 
                            }
                            $on['personal']="verdadero";
                            $id_t_publicacion=$row['id_t_publicacion'];
                             $selec_id_t_pub= pg_query ("SELECT t_publicacion FROM t_publicacion WHERE id_t_publicacion='$id_t_publicacion'")or die("Error en: $cuenta: " . pg_last_error());
                            while ($row7 = pg_fetch_array($selec_id_t_pub))
                            {
                            $on['t_publicacion']=$row7['t_publicacion']; 
                            break;
                            }					
                            $on['mensaje']=$row['mensaje'];
                            $on['img']=$row['img'];
                            $on['horafecha']=$row['horafecha'];					
                            array_push($final, $on);
                        }



        $resultado2 = pg_query("SELECT DISTINCT(seguido) FROM seguidores WHERE seguidor='$id_actual'")or die("Error en insertar publicacion: " . pg_last_error());
            while ($row = pg_fetch_array($resultado2)){
                $id_seguido=$row['seguido'];
                $resultado3 = pg_query("SELECT * FROM publicacion WHERE id_user='$id_seguido' AND receptor='$id_seguido' ORDER BY horafecha DESC")or die("Error en insertar publicacion: " . pg_last_error());
                while ($row5 = pg_fetch_array($resultado3)){
                            $on['id_publicacion']=$row5['id_publicacion'];
                            $id_user=$row5['id_user']; 
                            $id_publicacion=$row5['id_publicacion'];
                            $resultado7 = pg_query("SELECT * FROM datos WHERE id_user='$id_user' ")or die("Error en insertar datos: " . pg_last_error()); 
                            while ($row1 = pg_fetch_array($resultado7))
                            {
                            $on['nombre']=$row1['nombre']; 
                            $on['apellido']=$row1['apellido'];
                            $on['imagen']=$row1['imagen'];
                            break;
                            }
                            $resultado4 = pg_query("SELECT url_perfil FROM usuario WHERE id_user='$id_user' ")or die("Error en insertar datos: " . pg_last_error()); 
                            while ($row2 = pg_fetch_array($resultado4))
                            {
                            $on['url_perfil']=$row2['url_perfil'];
                            break; 
                            }
                            $cuenta= pg_query ("SELECT id_publi_favs FROM publi_favs WHERE id_publicacion='$id_publicacion' AND id_user='$id_actual'")or die("Error en: $cuenta: " . pg_last_error());
                            $cantida_cuenta = pg_num_rows($cuenta);
                            $cuenta2= pg_query ("SELECT id_publi_favs FROM publi_favs WHERE id_publicacion='$id_publicacion'")or die("Error en: $cuenta2: " . pg_last_error());
                            $cantida_cuenta2 = pg_num_rows($cuenta2);
                            $on['favs']=$cantida_cuenta2;
                            if($cantida_cuenta>0){
                            $on['fav_val']="done";
                            }else{
                            $on['fav_val']="false"; 
                            }
                            $on['personal']="falso";      
                            $id_t_publicacion=$row5['id_t_publicacion'];
                             $selec_id_t_pub= pg_query ("SELECT t_publicacion FROM t_publicacion WHERE id_t_publicacion='$id_t_publicacion'")or die("Error en: $cuenta: " . pg_last_error());
                            while ($row7 = pg_fetch_array($selec_id_t_pub))
                            {
                            $on['t_publicacion']=$row7['t_publicacion']; 
                            break;
                            }                 
                            $on['mensaje']=$row5['mensaje'];
                            $on['img']=$row5['img'];
                            $on['horafecha']=$row5['horafecha'];                 
                            array_push($final, $on);
                }
            }
                        
                    }else{
                        $res["id_publicacion"]="0";
                        $res["res"]="fail";
                        array_push($final, $res); 
                    }

                   print json_encode($final);

			
		
	
        ?>