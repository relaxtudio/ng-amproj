<section id="akun-sec" class="akun tab-pane fade">
	<div class="row">
		<div class="col-md-8">
			<div id="akun-manage" class="boxshadow">
				<div class="panel panel-default custbg">
					<div class="panel-heading custbg-hd">
						Manajemen Akun		
					</div>
					<div class="panel-body">
						<div id="btn-akun" class="pull-left">
							<a id="new-akun" href="#modal1" data-toggle="modal" class="btn btn-info">
								<i class="fa fa-plus"></i> Akun Baru
							</a>
						</div>
						<div class="pull-right">
							<span>Cari</span>
							<input type="text" name="search" class="form-group">
						</div>
						<div class="akun-wrap">
							<table id="list-akun" width="100%" class="table table-stripped table-bordered">
								<tr>
									<th width="5%">ID</th>
									<th width="33%">Username</th>
									<th width="15%">Hak Akses</th>
									<th width="28%">Last Login</th>
									<th width="23%">Aksi</th>
								</tr>
								<tr>
									<td>1</td>
									<td>Testing</td>
									<td>ADM</td>
									<td>25-10-2017&emsp;21:00</td>
									<td>
										<a id="edit-akun" href="#modal2" data-toggle="modal" class="btn btn-primary action-btn" title="Edit"><i class="fa fa-edit"></i></a>
										<a id="del-akun" href="#modal3" data-toggle="modal" class="btn btn-danger action-btn" title="Hapus"><i class="fa fa-trash"></i></a>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div id="usr-cred" class="boxshadow">
				<div class="panel-default custbg">
					<div class="panel-heading custbg-hd">
						Manajemen Hak Akses
					</div>
					<div class="panel-body">
						<div id="btn-cred" class="pull-right">
							<a id="new-cred" href="#modal4" data-toggle="modal" class="btn btn-info">
								<i class="fa fa-plus"></i> Hak Akses Baru
							</a>
						</div>
						<table id="list-cred" width="100%" class="table table-stripped">
							<tr>
								<th width="5%">No.</th>
								<th width="55%">Hak Akses</th>
								<th width="40%">Aksi</th>
							</tr>
							<tr>
								<td>1</td>
								<td>ADM</td>
								<td>
									<a id="edit-cred" href="#modal5" data-toggle="modal" class="btn btn-primary action-btn" title="Edit"><i class="fa fa-edit"></i></a>&nbsp;
									<a id="del-cred" href="#modal6" data-toggle="modal" class="btn btn-danger action-btn" title="Hapus"><i class="fa fa-trash"></i></a>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL AKUN BARU-->
	<div id="modal1" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header custbg-hd">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title">Tambah Akun</h4>
				</div>
				<div class="modal-body">
					<form id="newakun-form" class="form-horizontal" action="#" method="POST">
						<div class="form-group">
							<label class="control-label col-xs-4" for="u_nm">Username</label>
							<div class="col-xs-6">
								<input id="u_nm" type="text" name="u_nm" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-xs-4" for="u_pass">Password</label>
							<div class="col-xs-6">
								<input id="u_pass" type="password" name="u_pass" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-xs-4" for="u_cred">Hak Akses</label>
							<div class="col-xs-4">
								<select id="u_cred" class="form-control">
									<option value="1">ADM</option>
								</select>
							</div>
						</div>
						<div class="form-group modal-footer">
							<a class="btn btn-warning" class="close" data-dismiss="modal">Batal</a>
							<a id="newakun-sub" href="#" class="btn btn-success" type="submit">Simpan</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL EDIT AKUN-->
	<div id="modal2" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #0099cc; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title" align="center">Edit Akun</h4>
				</div>
				<div class="modal-body">
					<form id="editakun-form" class="form-horizontal" action="#" method="POST">
						<div class="form-group">
							<label class="control-label col-xs-4" for="u_nm">Username</label>
							<div class="col-xs-6">
								<input id="u_nm" type="text" name="u_nm" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-xs-4" for="u_pass">Password</label>
							<div class="col-xs-6">
								<input id="u_pass" type="password" name="u_pass" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-xs-4" for="u_cred">Hak Akses</label>
							<div class="col-xs-4">
								<select id="u_cred" class="form-control">
									<option value="1">ADM</option>
								</select>
							</div>
						</div>
						<div class="form-group modal-footer">
							<a class="btn btn-warning" class="close" data-dismiss="modal">Batal</a>
							<a id="editakun-sub" href="#" class="btn btn-success" type="submit">Simpan</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL HAPUS AKUN-->
	<div id="modal3" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #ff6666; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title" align="center">Konfirmasi Hapus Akun</h4>
				</div>
				<div class="modal-body">
					<p>Anda yakin akan menghapus akun ini?</p>

					<div class="modal-footer">
						<a class="btn btn-default" class="close" data-dismiss="modal">Batal</a>
						<a id="delakun-y" href="#" class="btn btn-danger">Ya</a>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL HAK AKSES BARU-->
	<div id="modal4" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header custbg-hd">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title">Tambah Hak Akses</h4>
				</div>
				<div class="modal-body">
					<form id="newcred-form" class="form-horizontal" action="#" method="POST">
						<div class="form-group">
							<label class="control-label col-xs-4" for="credentials">Hak Akses</label>
							<div class="col-xs-6">
								<input id="credentials" type="text" name="credentials" class="form-control">
							</div>
						</div>
						<div class="form-group modal-footer">
							<a class="btn btn-warning" class="close" data-dismiss="modal">Batal</a>
							<a id="newcred-sub" href="#" class="btn btn-success" type="submit">Simpan</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL EDIT HAK AKSES-->
	<div id="modal5" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #0099cc; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title">Edit Hak Akses</h4>
				</div>
				<div class="modal-body">
					<form id="editcred-form" class="form-horizontal" action="#" method="POST">
						<div class="form-group">
							<label class="control-label col-xs-4" for="credentials">Hak Akses</label>
							<div class="col-xs-6">
								<input id="credentials" type="text" name="credentials" class="form-control">
							</div>
						</div>
						<div class="form-group modal-footer">
							<a class="btn btn-warning" class="close" data-dismiss="modal">Batal</a>
							<a id="editcred-sub" href="#" class="btn btn-success" type="submit">Simpan</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div id="modal6" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #ff6666; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title" align="center">Konfirmasi Hapus Hak Akses</h4>
				</div>
				<div class="modal-body">
					<p>Anda yakin akan menghapus hak akses ini?</p>

					<div class="modal-footer">
						<a class="btn btn-default" class="close" data-dismiss="modal">Batal</a>
						<a id="delcred-y" href="#" class="btn btn-danger">Ya</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>