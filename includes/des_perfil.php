		<?php
			session_start();
			$res["url_perfil"]=$_SESSION["url_perfil"];
			print json_encode($res);
	