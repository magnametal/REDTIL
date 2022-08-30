<?php 

      function limpiar($string){
          $string = str_replace("'", "", $string);
          $string = str_replace("<script>", "", $string);
              return $string;
      }

 ?>