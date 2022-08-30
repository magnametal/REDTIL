
<?php
session_start();
if(!isset($_SESSION["id_user"])){
$_SESSION["id_user"] = "";
}
if($_SESSION["id_user"]!="" AND $_SESSION["id_user"]!=null){
	
	$res["t_user"]=$_SESSION["t_user"];
	$res["nombre"]=$_SESSION["nombre"];
	$res["apellido"]=$_SESSION["apellido"];
	$res["imagen"]=$_SESSION["imagen"];
	$res["url_perfil"]=$_SESSION["url_perfil"];
	$res["bienvenida"]=$_SESSION["bienvenida"];
	$res["estado"]=$_SESSION["estado"];
	$habilitado=$_SESSION["habilitado"];
	if($habilitado=="F"){
		$res["res"]="banneado";
	}else{
		$res["res"]="success";
	}
}else{
	$res["res"]="fail";
}
print json_encode($res);
?>

