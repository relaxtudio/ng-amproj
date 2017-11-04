<!DOCTYPE html>
<html>
<head>
	<!--<meta name="viewport" content="width=device-width, initial-scale=1">-->
	<title>Administrator Page</title>

	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">

	<script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.bundle.js"></script>

	<script type="text/javascript" src="js/service.js"></script>
	<script type="text/javascript" src="js/adm.js"></script>
</head>
<body>
	<!--NAVBAR PLACE-->
	<?php include('incl/header.html'); ?>
	<!--CONTENT PLACE-->
	<div id="content">
		<div class="container">
			<div class="top-logo" align="center">
				<span>
					<img src="assets/img/logo1.png" width="150px">
				</span>
			</div>
			<div class="lgn-as" align="right">Selamat Datang, {u_nm}</div>
			<!--SECTION PLACE INCLUDE HERE-->
			<div id="sections" class="tab-content">
				<?php include('template/dashboard.php');?>
				<?php include('template/akun.php');?>
				<?php include('template/mobil.php');?>
				<?php include('template/showroom.php');?>
				<?php include('template/simkredit.php');?>
				<?php include('template/promo.php');?>
				<?php include('template/profile.php');?>
			</div>
			<div id="forms"></div>
		</div>
		<div class="overlay"></div>
	</div>
</body>
</html>