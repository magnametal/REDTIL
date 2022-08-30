<?php
	
	require 'fpdf/fpdf.php';
	
	class PDF extends FPDF
	{
		function Header()
		{
			$this->Image('../assets/img/redtillogo3.png', 85, 20, 40);
			$this->SetFont('Arial','B',25);
			$this->Cell(50);
			$this->Cell(100,110, 'Contenido RedTIL',0,0,'C');
			$this->SetFont('Arial','B', 12);
			$this->Cell(-100,140, utf8_decode('Red Científica de Invetigadores en Tecnologías de Información Libre'), 0, 0,'C');
			
		}
		function Footer()
		{
			$this->SetY(-15);
			$this->SetFont('Arial','I', 8);
			$this->Cell(0,10, 'QR Generado por el sistema RedTIL',0,0,'C' );
		}	
			
	}
?>