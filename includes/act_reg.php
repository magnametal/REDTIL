<?php
include "security.php";
$correo_reg=null;
$cedula=null;
$nombre = null;
$apellido = null;
$id_user = null;
$municipio=null;
$estado=null;
$ciudad=null;

$correo_reg=$_POST["correo_reg"];
$correo_reg = limpiar($correo_reg);
if(!isset($_POST["cedula"])){
            session_start();
            $id_user=$_SESSION["id_user"];
}else{
            $id_user = $_POST["id_user"];
}


$nombre = $_POST["nombre"];
$nombre = limpiar($nombre);
$apellido = $_POST["apellido"];
$apellido = limpiar($apellido);
$municipio=$_POST["municipio"];
$municipio = limpiar($municipio);
$estado=$_POST["estado"];
$estado = limpiar($estado);
$ciudad=$_POST["ciudad"];
$ciudad = limpiar($ciudad);

include "conexion.php";
$bandera="verde";
if($correo_reg!='' &&  $correo_reg!=null){
	$correo_sql = pg_query("UPDATE usuario SET correo = '$correo_reg' WHERE id_user = $id_user")or die ('Invalid query: ' . pg_last_error());
	if(!$correo_sql){
		$bandera="rojo";
	}
}
if(isset($_POST["cedula"])){
   $cedula=$_POST["cedula"];
    if($cedula!='' &&  $cedula!=null){
        $cedula_sql = pg_query("UPDATE usuario SET cedula = '$cedula' WHERE id_user = $id_user")or die ('Invalid query: ' . pg_last_error());
        if(!$cedula_sql){
            $bandera="rojo";
        }
    }
}

if($nombre!='' &&  $nombre!=null){
	$nombre_sql = pg_query("UPDATE datos SET nombre = '$nombre' WHERE id_user = $id_user")or die ('Invalid query: ' . pg_last_error());
	if(!$nombre_sql){
		$bandera="rojo";
	}
}
if($apellido!='' &&  $apellido!=null){
	$apellido_sql = pg_query("UPDATE datos SET apellido = '$apellido' WHERE id_user = $id_user")or die ('Invalid query: ' . pg_last_error());
	if(!$apellido_sql){
		$bandera="rojo";
	}
}

				$select_comuni= pg_query ("SELECT id_comunidad FROM comunidad WHERE estado='$estado' AND municipio='$municipio' AND ciudad='$ciudad'")or die("Error en: $select_comuni: " . pg_last_error());
				$numero_comuni = pg_num_rows($select_comuni);
	if($numero_comuni==0){
				$insertar_com = pg_query("INSERT INTO comunidad (estado, municipio, ciudad) VALUES ('$estado', '$municipio', '$ciudad')")or die("Error en insertar insertar_com: " . pg_last_error());
				$select_com= pg_query("SELECT id_comunidad from comunidad where (estado='$estado') AND (municipio='$municipio') AND (ciudad='$ciudad')")or die("Error en consultar comunidad: " . pg_last_error());
				while ($row = pg_fetch_array($select_com))
				{
					$id_comunidad = $row["id_comunidad"];
					break;
				}
	}else{
				$select_com= pg_query("SELECT id_comunidad from comunidad where (estado='$estado') AND (municipio='$municipio') AND (ciudad='$ciudad')")or die("Error en consultar comunidad: " . pg_last_error());
				while ($row = pg_fetch_array($select_com))
				{
						$id_comunidad = $row["id_comunidad"];
						break;
				}
	}

	$id_comunidad_sql = pg_query("UPDATE datos SET id_comunidad = '$id_comunidad' WHERE id_user = $id_user")or die ('Invalid query: ' . pg_last_error());
	if(!$id_comunidad_sql){
		$bandera="rojo";
	}

	if($bandera=="rojo"){
	$res["res"]="fail";
	}else{
	$res["res"]="success";
	}
					
					 
                print json_encode($res);
            
