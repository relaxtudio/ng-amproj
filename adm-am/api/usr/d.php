<?php
include_once('../conn/db.php');

function delUsr() {
	$conn = dbCon();

	$usr_id = mysqli_real_escape_string($conn, $_POST['usr_id']);

	$sql = "ELETE FROM usr_lgn WHERE usr_id = '$usr_id";
	$qry = mysqli_query($conn, $sql) or die(mysqli_error($conn));

	if(!qry){
		echo "DATA GAGAL DIHAPUS!";
	}
}
?>