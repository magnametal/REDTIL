		<?php
			include "conexion.php";	
			$sql= pg_query ("SELECT id_doc FROM documento WHERE valido='F'")or die("Error en: $sql: " . pg_last_error());
			$cantidad["cantidad"] = pg_num_rows($sql);
				print json_encode($cantidad);
	