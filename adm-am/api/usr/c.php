<?php
include_once('../conn/db.php');

function createUsr() {
	$conn = dbCon();

	$usr_nm = mysqli_real_escape_string($conn, $_POST['usr_nm']);
	$usr_salt = dechex(mt_rand(0, 2147483647)) . dechex(mt_rand(0, 2147483647));
	$usr_pass = hash('sha256', $_POST['usr_pass'] . $salt);
    for($i = 0; $i < 65536; $i++) {
        $usr_pass = hash('sha256', $usr_pass . $salt);
    }
    $uid_cred_fk = mysqli_real_escape_string($conn, $_POST['uid_cred_fk']);
	$sql = "INSERT INTO usr_lgn (
			usr_nm, 
			usr_pass, 
			usr_salt, 
			uid_cred_fk
		)VALUES(
			'$usr_nm',
			'$usr_pass',
			'$usr_salt',
			'$uid_cred_fk'
		)";
	$qry = mysqli_query($conn, $sql) or die(mysqli_error($conn));
}

?>