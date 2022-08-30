<?php
    include "security.php";
	include 'pdf.php';
	$src= null;
    $tipo_cont= null;
	$cedula= null;
	const TEMPIMGLOC = 'tempimg.gif';
	$src=$_POST["src"];
    $src = limpiar($src); 
    $enlace=$_POST["enlace"];
	$id_doc=$_POST["id_doc"];
    include "conexion.php";
    session_start();
    $id_user=$_SESSION["id_user"];
    pg_query("INSERT INTO docs_comp (id_user, id_doc) VALUES ('$id_user', '$id_doc')")or die("Error en insertar id_docs_comp: " . pg_last_error());
            $sql= pg_query ("SELECT titulo_doc, tipo_doc, resume_doc FROM documento WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
                while ($row = pg_fetch_array($sql))
                {
                    $titulo_doc=$row['titulo_doc'];
                    $tipo_doc=$row['tipo_doc'];
                }

                if($tipo_doc=="I"){
                    $tipo_cont = "Investigación";
                    $tipo_inv = pg_query ("SELECT img FROM investigacion WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
                        while ($row = pg_fetch_array($tipo_inv))
                            {
                                $img=$row['img'];
                            }
                }

                if($tipo_doc=="L"){
                    $tipo_cont = "Libro";
                    $tipo_lib = pg_query ("SELECT img FROM libro WHERE id_doc='$id_doc'")or die("Error en: $sql: " . pg_last_error());
                        while ($row = pg_fetch_array($tipo_lib))
                            {
                                $img=$row['img'];
                            }
                }


	$cadena0 = "Título: ";
    $cadena0 = $cadena0.$titulo_doc;
    $cadena2 = "Tipo: ";
    $cadena2 = $cadena2.$tipo_cont;
	$dataPieces = explode(',',$src);
	$encodedImg = $dataPieces[1];
	$decodedImg = base64_decode($encodedImg);

//  Check if image was properly decoded
if( $decodedImg!==false )
{
    //  Save image to a temporary location
    if( file_put_contents(TEMPIMGLOC,$decodedImg)!==false )
    {
        //  Open new PDF document and print image
        $pdf = new PDF('P', 'mm', array(216, 279));
        $pdf->SetFont('Arial', 'I', 13);
        $pdf->AddPage();
        $pdf->image("../assets/img/instruccion.jpg", 55, 90, 100);
        $pdf->Ln(1);
        $pdf->SetFont('Arial', 'I', 10);
        $pdf->Cell(0,235, utf8_decode($cadena0),0,0,'C');
        $pdf->Ln(5);
        $pdf->Cell(0,235, utf8_decode($cadena2),0,0,'C');
        $pdf->Ln(1);
        // $pdf->Image('../img/parrafo.jpg', 20, 70, 260);
        $pdf->image(TEMPIMGLOC, 115, 150, 80);
        $pdf->image("../".$img, 30, 160, 60);
        $pdf->Ln(1);
        $pdf->Link(100, 150, 100, 100, $enlace);
        $pdf->Ln(1);
        $pdf->Cell(0,239, utf8_decode($enlace),0,0,'C');
        $pdf->Output();

        //  Delete image from server
        unlink(TEMPIMGLOC);
    }
}

 ?>