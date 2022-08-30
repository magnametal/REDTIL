		<?php
			include "conexion.php";
			$id = null;
			$id = $_POST["id_noti"];
				$resp = pg_query("UPDATE notify SET id_noti_visto = 1 WHERE id_notify = '$id'")or die(pg_last_error());
	