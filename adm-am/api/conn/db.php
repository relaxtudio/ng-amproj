<?php
function dbCon(){
	$host = 'localhost';
	$uname = 'root';
	$upass = '';
	$dbname = 'anugerah-mtr';

	static $db;

	if ($db===NULL) {
		$db = mysqli_connect($host, $uname, $upass, $dbname)
			or
		trigger_error(mysqli_connect_error(),E_USER_ERROR);
	}
	return $db;
}
