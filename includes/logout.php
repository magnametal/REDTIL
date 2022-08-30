		<?php
		session_start();
		session_destroy();
			$res["res"] = "success";
		print json_encode($res);
		?>
	