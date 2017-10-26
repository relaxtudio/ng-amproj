<?php
include_once('../conn/db.php');

function usrReadAll() {
	$conn = dbCon();
	$sql = "SELECT 
		usr_id,
		usr_nm,
		usr_cred.credentials as ucred,
		usr_last_lgn
	FROM usr_lgn
	INNER JOIN usr_cred
	ON usr_lgn.uid_cred_fk = usr_cred.uid_cred ";
	$qry = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	while($row = mysqli_fetch_array($qry)){
		$id = $row['usr_id'];
		$nm = $row['usr_nm'];
		$pass = $row['ucred'];
		$last_log = $row['usr_last_lgn'];
	}
}

function usrCount() {
	$conn = dbCon();
	$sql = "SELECT COUNT(*) FROM usr_lgn";
	$qry = mysqli_query($conn, $sql) or die(mysqli_error($conn));
	$row = mysqli_fetch_row($qry);
	echo $row[0];
}
?>