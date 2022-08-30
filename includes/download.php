<?php 
$fullPath = $_GET["archivo"]; 
if ($fd = fopen ($fullPath, "r")) { $fsize = filesize($fullPath); 
	$path_parts = pathinfo($fullPath); $ext = strtolower($path_parts["extension"]); 
	header("Content-type: application/pdf"); 
	header("Content-Disposition: attachment; filename=contenido_redtil.pdf"); 
	header("Content-length: $fsize"); 
	header("Cache-control: private"); 
	while(!feof($fd)) { $buffer = fread($fd, 2048); echo $buffer; } } fclose ($fd); exit; 

W?> 
