<?php
include_once('../conn/db.php');

function readAllBrand(){
	$conn = dbCon();

	$sql = "SELECT
		brand_id,
		brand_nm,
		logo
		FROM cars_brand";
	$qry = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	while($row = mysqli_fetch_array($qry)){
		$brand_id = $row['brand_id'];
		 $brand_nm = $row['brand_nm'];
		$logo = $row['logo'];
	}
}

readAllBrand();
?>