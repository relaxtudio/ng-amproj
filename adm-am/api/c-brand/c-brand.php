<?php
include_once('../conn/db.php');

function addBrand(){
	$conn = dbCon();

	$brand_nm = mysqli_real_escape_string($conn, $_POST['brand_nm']);
	$allow_ex = array('png');
	$temp = explode(".", $_FILES["file"]["name"]);
	$newName = strtolower($brand_nm);
	$uploadDir = "assets/car-brands/";
	$fullPath = $uploadDir . $newName;
	$detect_ex = strtolower(end($allow_ex));
	$fileSize = $_FILES["file"]["size"];
	$fileTmp = $_FILES["file"]["tmp_name"];
	if(in_array($detect_ex, $allow_ex) === true){
		if($fileSize < 512000){
			move_uploaded_file($fileTmp, $fullPath);
			$sql = "INSERT INTO cars_brand (
				brand_nm, 
				logo
				)VALUES(
				'$brand_nm',
				'$fullPath'
			)";
			$qry = mysqli_query($conn, $sql) or die(mysqli_error($conn));
			if(qry){
				echo "LOGO BERHASIL DIUPLOAD";
			}else{
				echo "LOGO GAGAL DIUPLOAD";
			}

		}else{
			echo "UKURAN FILE TERLALU BESAR";
		}
	}else{
		echo "JENIS FILE TIDAK SESUAI";
	}
}
?>