<?php
$conn = pg_connect("user=postgres password=20155558 host=localhost port=5432 dbname=redtil");
if (!$conn){
      echo "Error, Problemas al conectar con el servidor";
}
 ?>