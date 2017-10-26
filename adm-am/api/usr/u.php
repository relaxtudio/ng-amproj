<?php
include_once('../conn/db.php');

function updUser() {
	$conn = dbCon();
	$usr_id = mysqli_real_escape_string($conn, $_POST['usr_id']);
	$usr_nm = mysqli_real_escape_string($conn, $_POST['usr_nm']);
	$usr_salt = dechex(mt_rand(0, 2147483647)) . dechex(mt_rand(0, 2147483647));
	$usr_pass = hash('sha256', $_POST['usr_pass'] . $salt);
    for($i = 0; $i < 65536; $i++) {
        $usr_pass = hash('sha256', $usr_pass . $salt);
    }
    $uid_cred_fk = mysqli_real_escape_string($conn, $_POST['uid_cred_fk']);

    $sql = "UPDATE 
		usr_nm,
		usr_pass,
		usr_salt,
		uid_cred_fk
		SET
		usr_nm = '$usr_nm',
		usr_pass = '$usr_pass',
		usr_salt = '$usr_salt',
		uid_cred_fk = '$uid_cred_fk'
		WHERE usr_id = $usr_id";
	$qry = mysqli_query($conn, $sql) or die( mysqli_error($conn));

}
?>