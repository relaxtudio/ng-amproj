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
</head>
<body>
	<!--NAVBAR PLACE-->

	<!--CONTENT PLACE-->
	<div class="lg-bg"></div>
	<div id="content">
		<div class="container">
			<div id="lgn-wrapper" class="panel panel-default">
				<div id="lgn-logo" class="panel-heading" align="center">
					<img src="assets/img/adm.png" width="50">
				</div>
				<div class="panel-body">
					<form id="lgn-form" action="main" class="form-horizontal" method="POST">
						<div class="form-group">
							<div class="col-md-12" align="center">
								<div class="input-group">
									<span class="input-group-addon" style="background-color: transparent;">
										<i class="fa fa-user-o" style="color: #9effff;"></i>
									</span>
									<input type="text" placeholder="username" name="usr_nm" id="usr_nm" class="form-control" required="true">
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-12">
								<div class="input-group">
									<span class="input-group-addon" style="background-color: transparent;">
										<i class="fa fa-lock" style="color: #9effff; padding-right: 3px;"></i>
									</span>
									<input type="password" placeholder="password" name="usr_pass" id="usr_pass" class="form-control" required="true">
								</div>
							</div>
						</div>
						<div class="form-group">
							<label class="control-label"></label>
							<div align="center">
								<button class="btn btn-default" type="submit" id="lgn-btn">
									<b>LOGIN</b> <i class="fa fa-sign-in"></i>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
	</div>
</body>
</html>