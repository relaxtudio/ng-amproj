<section id="mobil-sec" class="mobil tab-pane fade">
	<div class="row">
		<div class="col-md-12">
			<div id="tbl-mobil" class="boxshadow">
				<div class="panel panel-default custbg">
					<div class="panel-heading custbg-hd">
						Daftar Mobil
					</div>
					<div class="panel-body">
						<div id="btn-mobil" class="pull-left">
							<a href="#newmobil" data-toggle="modal" id="newmobil-btn" class="btn btn-info"><i class="fa fa-plus"></i> Mobil</a>
						</div>
						<div class="pull-right">
							<span>Cari &nbsp;</span>
							<input id="src-mobil" type="text" name="src-mobil" class="form-group">
							<p>Total : <b>{sum}</b> Mobil</p>
						</div>
						<table id="list-mobil" width="100%" class="table table-striped">
							<tr>
								<th width="5%">No. <a id="sort-mobil" href="#"> <i class="fa fa-sort"></i></a></th>
								<th width="12%">Brand</th>
								<th width="25%">Mobil</th>
								<th width="7%">Tahun</th>
								<th width="8%">Model</th>
								<th width="16%">Warna</th>
								<th width="11%">Status</th>
								<th width="21%">Aksi</th>
							</tr>
							<tr>
								<td>1</td>
								<td>Toyota</td>
								<td>Fortuner</td>
								<td>2014</td>
								<td>SUV</td>
								<td>Silver Abu-Abu</td>
								<td>Available</td>
								<td>
									<a href="#editmobil" data-toggle="modal" class="btn btn-primary action-btn" title="Edit"><i class="fa fa-edit"></i></a>
									<a href="#hapusmobil" data-toggle="modal" class="btn btn-danger action-btn" title="Hapus"><i class="fa fa-trash"></i></a>
									<a href="#terjual" data-toggle="modal" class="action-btn" title="Terjual"><img src="assets/img/sold-icon.png" width="35"></a>
								</td>
							</tr>
						</table>
						<div class="pages-mobil" align="center">
							<ul class="pagination pagination-sm">
							    <li class="disabled"><a href="#">&laquo;</a></li>
							    <li class="active"><a href="#">1</a></li>
							    <li><a href="#">2</a></li>
							    <li><a href="#">3</a></li>
							    <li><a href="#">4</a></li>
							    <li><a href="#">5</a></li>
							    <li><a href="#">&raquo;</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-4">
			<div id="tbl-brand" class="boxshadow">
				<div class="panel panel-default custbg">
					<div class="panel-heading custbg-hd">
						Brand Mobil	
					</div>
					<div class="panel-body">
						<canvas id="brandChart"></canvas>
						<br>
						<div class="col-md-6" align="center">
							<a href="#newbrand" data-toggle="modal" class="btn btn-info action-btn"><i class="fa fa-plus"></i> Brand</a>
						</div>
						<div class="col-md-6" align="center">
							<a href="#allbrand" data-toggle="modal" class="btn btn-success action-btn"><i class="fa fa-list"></i> Semua Brand</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-4">
			<div id="tbl-model" class="boxshadow">
				<div class="panel panel-default custbg">
					<div class="panel-heading custbg-hd">
						Model Mobil
					</div>
					<div class="panel-body">
						<canvas id="modelChart"></canvas>
						<br>
						<div align="center">
							<a href="#allmodel" data-toggle="modal" class="btn btn-success action-btn"><i class="fa fa-list"></i> Semua Model</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-xs-4">
			<div id="tbl-trans" class="boxshadow">
				<div class="panel panel-default custbg">
					<div class="panel-heading custbg-hd">
						Jenis Transmisi
					</div>
					<div class="panel-body">
						<canvas id="transChart"></canvas>
						<br>
						<div align="center">
							<a href="#alltrans" data-toggle="modal" class="btn btn-success action-btn"><i class="fa fa-list"></i> Semua Transmisi</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL MOBIL-->

	<div id="newmobil" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header custbg-hd">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title">Form Mobil Baru</h4>
				</div>
				<div class="modal-body">
					<ul class="nav nav-tabs">
						<li class="active">
							<a href="#dt-mobil" data-toggle="tab"><i class="fa fa-car"></i> Data Mobil</a>
						</li>
						<li>
							<a href="#ft-preview" data-toggle="tab"><i class="fa fa-camera"></i> Foto Preview</a>
						</li>
						<li>
							<a href="#ft-exterior" data-toggle="tab"><i class="fa fa-camera"></i> Exterior 360&deg;</a>
						</li>
						<li>
							<a href="#ft-interior" data-toggle="tab"><i class="fa fa-camera"></i> Interior 360&deg;</a>
						</li>
					</ul>
					<form id="newmobil-form" class="form-horizontal" enctype="multipart/form-data" method="POST" action="#">
						<div class="tab-content">
							<div id="dt-mobil" class="row tab-pane fade in active">
								<div class="col-md-12">
									<legend>Data Mobil</legend>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-xs-4" for="brand_id">Brand</label>
										<div class="col-xs-8">
											<select id="brand_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected" >---Pilih Brand---</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="c_nama">Mobil</label>
										<div class="col-xs-8">
											<input id="c_nama" type="text" name="c_nama" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="cars_model_id">Model</label>
										<div class="col-xs-8">
											<select id="cars_model_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected">---Pilih Model---</option>
												<option value="1">SUV</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="tahun">Tahun</label>
										<div class="col-xs-5">
											<input id="tahun" type="number" name="tahun" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="nopol">Nopol</label>
										<div class="col-xs-6">
											<input id="nopol" type="text" name="nopol" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="bbm">BBM</label>
										<div class="col-xs-7">
											<input id="bbm" type="text" name="bbm" class="form-control" required="true">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-xs-4" for="km">Kilometer</label>
										<div class="col-xs-6">
											<input id="km" type="number" name="km" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="trans_id">Transmisi</label>
										<div class="col-xs-8">
											<select id="trans_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected">---Transmisi---</option>
												<option value="1">Manual</option>
												<option value="2">Semi-Otomatis</option>
												<option value="3">Otomatis</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="silinder">Silinder</label>
										<div class="col-xs-4">
											<input id="silinder" type="text" name="silinder" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="warna">Warna</label>
										<div class="col-xs-8">
											<input id="warna" type="text" name="warna" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="showroom_id">Showroom</label>
										<div class="col-xs-8">
											<select id="showroom_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected">---Showroom---</option>
												<option value="1">Dharmawangsa 69</option>
											</select>
										</div>	
									</div>
								</div>
							</div>
							<div id="ft-preview" class="tab-pane fade in">
								<div class="row">
									<div class="col-md-12">
										<legend>Foto Preview</legend>
										<div class="form-group">
											<label class="control-label col-xs-4" for="preview"><i class="fa fa-camera"></i> Preview</label>
											<div class="col-xs-6">
												<input id="preview" type="file" name="preview" multiple="true" class="form-control" accept="image/*">
											</div>
											<br><br>
											<div id="prev" class="preview-img"></div>
										</div>
									</div>
								</div>
							</div>
							<div id="ft-exterior" class="tab-pane fade in">
								<div class="row">
									<div class="col-md-12">
										<legend>Exterior 360&deg;</legend>
										<div class="form-group">
											<label class="control-label col-xs-4" for="exterior"><i class="fa fa-camera"></i> Exterior 360&deg;</label>
											<div class="col-xs-6">
												<input id="exterior" type="file" name="exterior" multiple="true" class="form-control" accept="image/*">
											</div>
											<br><br>
											<div id="ext360" class="preview-img"></div>
										</div>
									</div>
								</div>
							</div>
							<div id="ft-interior" class="tab-pane fade in">
								<div class="row">
									<div class="col-md-12">
										<legend>Interior 360&deg;</legend>
										<div class="form-group">
											<label class="control-label col-xs-4" for="interiorr"><i class="fa fa-camera"></i> Interior 360&deg;</label>
											<div class="col-xs-6">
												<input id="interior" type="file" name="interior" class="form-control" accept="image/*">
											</div>
											<br><br>
											<div id="int360" class="preview-img"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<p align="justify">NB: Harap diisi semua data pada kolom yang tersedia dalam form ini</p>
							<div class="form-group">
								<a class="btn btn-warning" class="close" data-dismiss="modal">Batal</a>
								<a id="newmobil-sub" class="btn btn-success" href="#" type="submit">Simpan</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div id="editmobil" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #0099cc; color: #fff;">
					<button type="button" class="close" data-dismiss="modal">
						&times;
					</button>
					<h4 class="modal-title" align="center">Edit Data Mobil</h4>
				</div>
				<div class="modal-body">
					<ul class="nav nav-tabs">
						<li class="active">
							<a href="#ed-dt-mobil" data-toggle="tab"><i class="fa fa-car"></i> Data Mobil</a>
						</li>
						<li>
							<a href="#ed-ft-preview" data-toggle="tab"><i class="fa fa-camera"></i> Foto Preview</a>
						</li>
						<li>
							<a href="#ed-ft-exterior" data-toggle="tab"><i class="fa fa-camera"></i> Exterior 360&deg;</a>
						</li>
						<li>
							<a href="#ed-ft-interior" data-toggle="tab"><i class="fa fa-camera"></i> Interior 360&deg;</a>
						</li>
					</ul>
					<form id="editmobil-form" class="form-horizontal" enctype="multipart/form-data" method="POST" action="#">
						<div class="tab-content">
							<div id="ed-dt-mobil" class="row tab-pane fade in active">
								<div class="col-md-12">
									<legend>Data Mobil</legend>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-xs-4" for="brand_id">Brand</label>
										<div class="col-xs-8">
											<select id="brand_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected" >---Pilih Brand---</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
												<option value="1">BMW</option>
												<option value="2">Honda</option>
												<option value="3">Mercedes-Benz</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="c_nama">Mobil</label>
										<div class="col-xs-8">
											<input id="c_nama" type="text" name="c_nama" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="cars_model_id">Model</label>
										<div class="col-xs-8">
											<select id="cars_model_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected">---Pilih Model---</option>
												<option value="1">SUV</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="tahun">Tahun</label>
										<div class="col-xs-5">
											<input id="tahun" type="number" name="tahun" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="nopol">Nopol</label>
										<div class="col-xs-6">
											<input id="nopol" type="text" name="nopol" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="bbm">BBM</label>
										<div class="col-xs-7">
											<input id="bbm" type="text" name="bbm" class="form-control" required="true">
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label class="control-label col-xs-4" for="km">Kilometer</label>
										<div class="col-xs-6">
											<input id="km" type="number" name="km" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="trans_id">Transmisi</label>
										<div class="col-xs-8">
											<select id="trans_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected">---Transmisi---</option>
												<option value="1">Manual</option>
												<option value="2">Semi-Otomatis</option>
												<option value="3">Otomatis</option>
											</select>
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="silinder">Silinder</label>
										<div class="col-xs-4">
											<input id="silinder" type="text" name="silinder" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="warna">Warna</label>
										<div class="col-xs-8">
											<input id="warna" type="text" name="warna" class="form-control" required="true">
										</div>
									</div>
									<div class="form-group">
										<label class="control-label col-xs-4" for="showroom_id">Showroom</label>
										<div class="col-xs-8">
											<select id="showroom_id" class="form-control" required="true">
												<option value="" disabled="true" selected="selected">---Showroom---</option>
												<option value="1">Dharmawangsa 69</option>
											</select>
										</div>	
									</div>
								</div>
							</div>
							<div id="ed-ft-preview" class="tab-pane fade in">
								<div class="row">
									<div class="col-md-12">
										<legend>Foto Preview</legend>
										<div class="form-group">
											<label class="control-label col-xs-4" for="preview"><i class="fa fa-camera"></i> Preview</label>
											<div class="col-xs-6">
												<input id="preview" type="file" name="preview" multiple="true" class="form-control" accept="image/*">
											</div>
											<br><br>
											<div id="prev" class="preview-img"></div>
										</div>
									</div>
								</div>
							</div>
							<div id="ed-ft-exterior" class="tab-pane fade in">
								<div class="row">
									<div class="col-md-12">
										<legend>Exterior 360&deg;</legend>
										<div class="form-group">
											<label class="control-label col-xs-4" for="exterior"><i class="fa fa-camera"></i> Exterior 360&deg;</label>
											<div class="col-xs-6">
												<input id="exterior" type="file" name="exterior" multiple="true" class="form-control" accept="image/*">
											</div>
											<br><br>
											<div id="ext360" class="preview-img"></div>
										</div>
									</div>
								</div>
							</div>
							<div id="ed-ft-interior" class="tab-pane fade in">
								<div class="row">
									<div class="col-md-12">
										<legend>Interior 360&deg;</legend>
										<div class="form-group">
											<label class="control-label col-xs-4" for="interiorr"><i class="fa fa-camera"></i> Interior 360&deg;</label>
											<div class="col-xs-6">
												<input id="interior" type="file" name="interior" class="form-control" accept="image/*">
											</div>
											<br><br>
											<div id="int360" class="preview-img"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<p align="justify">NB: Harap diisi semua data pada kolom yang tersedia dalam form ini</p>
							<div class="form-group">
								<a class="btn btn-warning" class="close" data-dismiss="modal">Batal</a>
								<a id="editmobil-sub" class="btn btn-primary" href="#" type="submit">Update</a>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div id="hapusmobil" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #ff6666; color: #fff;">
					<button type="button" class="close" data-dismiss="modal">
						&times;
					</button>
					<h4 class="modal-title" align="center">Konfirmasi Hapus Data</h4>
				</div>
				<div class="modal-body">
					<p>Anda akan menghapus data mobil dengan ringkasan sebagai berikut :<p>
					<table id="resume-mobil" width="100%" class="table table-striped">
						<tr>
							<td width="20%">Mobil</td>
							<td width="5%">:</td>
							<td width="75%">{brand} {c_nama}</td>
						</tr>
						<tr>
							<td>Tahun</td>
							<td>:</td>
							<td>{tahun}</td>
						</tr>
						<tr>
							<td>Warna</td>
							<td>:</td>
							<td>{warna}</td>
						</tr>
						<tr>
							<td>Showroom</td>
							<td>:</td>
							<td>{showroom}</td>
						</tr>
						<tr>
							<td>Harga</td>
							<td>:</td>
							<td>Rp {harga}</td>
						</tr>
					</table>
					<p>Apakah anda yakin ingin menghapus data ini?</p>
				</div>
				<div class="modal-footer">
					<a class="btn btn-default" class="close" data-dismiss="modal">Batal</a>
					<a id="hapusmobil-y" href="#" class="btn btn-danger">Ya</a>
				</div>
			</div>
		</div>
	</div>

	<div id="terjual" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #00cc7a; color: #fff;">
					<button type="button" class="close" data-dismiss="modal">
						&times;
					</button>
					<h4 class="modal-title" align="center">Konfirmasi Mobil Terjual</h4>
				</div>
				<div class="modal-body">
					<p>Anda akan mengubah status data mobil dengan ringkasan sebagai berikut :</p>
					<table id="resume-mobil" width="100%" class="table table-striped">
						<tr>
							<td width="20%">Mobil</td>
							<td width="5%">:</td>
							<td width="75%">{brand} {c_nama}</td>
						</tr>
						<tr>
							<td>Tahun</td>
							<td>:</td>
							<td>{tahun}</td>
						</tr>
						<tr>
							<td>Warna</td>
							<td>:</td>
							<td>{warna}</td>
						</tr>
						<tr>
							<td>Showroom</td>
							<td>:</td>
							<td>{showroom}</td>
						</tr>
						<tr>
							<td>Harga</td>
							<td>:</td>
							<td>Rp {harga}</td>
						</tr>
					</table>
					<p>Apakah anda yakin ingin mengubah status data mobil ini menjadi <b>SOLD OUT?</b></p>
					<div class="modal-footer">
						<a class="btn btn-default" class="close" data-dismiss="modal">Batal</a>
						<a id="terjual-y" href="#" class="btn btn-success">Ya</a>
					</div>	
				</div>
			</div>
		</div>
	</div>

	<!--MODAL BRAND-->
	<div id="newbrand" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header custbg-hd">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title">Form Brand Mobil Baru</h4>
				</div>
				<div class="modal-body">
					<form id="newbrand-form" class="form-horizontal" action="#" method="POST">
						<div class="form-group">
							<label class="control-label col-xs-4" for="brand_nm">Nama Brand</label>
							<div class="col-xs-6">
								<input id="brand_nm" type="text" name="brand_nm" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<label class="control-label col-xs-4" for="brand_img">Upload Logo</label>
							<div class="col-xs-6">
								<input id="brand_img" type="file" name="brand_img" class="form-control">
							</div>
						</div>
						<div class="modal-footer">
							<a class="btn btn-warning" class="close" data-dismiss="modal">Batal</a>
							<a id="newbrand-sub" href="#" class="btn btn-success" type="submit">Simpan</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<div id="allbrand" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #00cc7a; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #000;">
						&times;
					</button>
					<h4 class="modal-title">Data Brand Mobil</h4>
				</div>
				<div class="modal-body">
					<table id="brand-tbl" width="100%">
						<tr> 
							<th width="8%">ID</th>
							<th width="60%">Nama Brand</th>
							<th width="12%">Logo</th>
							<th width="20%">Aksi</th>
						</tr>
						<tr>
							<td>1</td>
							<td>Toyota</td>
							<td><img src="assets/car-brands/toyota.png" width="50px;"></td>
							<td><a id="del-brand" class="btn btn-danger" href="#" title="Hapus"><i class="fa fa-trash"></i> </a></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL MODEL-->
	<div id="allmodel" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #00cc7a; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #000;">
						&times;
					</button>
					<h4 class="modal-title">Data Model Mobil</h4>
				</div>
				<div class="modal-body">
					<table id="model-tbl" class="table table-striped" width="100%">
						<tr>
							<th width="60%">Jenis Model</th>
							<th width="40%">Aksi</th>
						</tr>
						<tr>
							<td>SUV</td>
							<td>
								<a href="#" class="btn btn-primary" id="editmodel"><i class="fa fa-edit"></i> Edit</a>
								<a href="#" class="btn btn-danger" id="del-model">
									<i class="fa fa-trash"></i> Hapus
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<input id="newmodel" class="form-control" type="text" name="newmodel" placeholder="Model mobil baru">
							</td>
							<td>
								<a href="#" id="newmodel-btn" class="btn btn-success">
									<i class="fa fa-save"></i> Simpan
								</a>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>

	<!--MODAL TRANSMISI-->
	<div id="alltrans" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #00cc7a; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #000;">
						&times;
					</button>
					<h4 class="modal-title">Data Transmisi Mobil</h4>
				</div>
				<div class="modal-body">
					<table id="trans-tbl" class="table table-striped" width="100%">
						<tr>
							<th width="60%">Jenis Transmisi</th>
							<th width="40%">Aksi</th>
						</tr>
						<tr>
							<td contenteditable="true">Manual</td>
							<td>
								<a href="#" class="btn btn-primary" id="ed-trans"><i class="fa fa-edit"></i> Edit</a>
								<a href="#" class="btn btn-danger" id="del-trans">
									<i class="fa fa-trash"></i> Hapus
								</a>
							</td>
						</tr>
						<tr>
							<td>
								<input id="newtrans" class="form-control" type="text" name="newtrans" placeholder="Transmisi baru">
							</td>
							<td>
								<a href="#" id="newmodel-btn" class="btn btn-success">
									<i class="fa fa-save"></i> Simpan
								</a>
							</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</section>