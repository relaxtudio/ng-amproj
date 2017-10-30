<section id="promo-sec" class="promo tab-pane fade">
	<div class="row">
		<div class="col-md-4">
			<div id="promo" class="boxshadow">
				<div class="panel panel-default custbg">
					<div class="panel-heading custbg-hd">
						Daftar Promo
					</div>
					<div class="panel-body">
						<div id="btn-promo">
							<a href="#newpromo" class="btn btn-info" data-toggle="modal"><i class="fa fa-plus"></i> Promo Baru</a>
						</div>
						<table id="list-promo" width="100%" class="table table-striped">
							<tr>
								<th width="10%">No.</th>
								<th width="70%">Promo</th>
								<th width="20%">Aksi</th>
							</tr>
							<tr>
								<td>1</td>
								<td><a href="#promo-prev1" data-toggle="modal">promo1.jpg</a></td>
								<td><a href="#" class="btn btn-danger" title="Hapus" onclick="confirm('Anda yakin menghapus promo ini?');"><i class="fa fa-trash"></i></a></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-8">
			<div id="slideshow-prev" class="boxshadow">
				<div class="panel panel-default custbg">
					<div class="panel-heading custbg-hd">
						Preview Slideshow
					</div>
					<div class="panel-body">
						<div id="ss-promo" class="carousel slide" data-ride="carousel">
							<ol class="carousel-indicators">
							    <li data-target="#ss-promo" data-slide-to="0" class="active"></li>
							    <li data-target="#ss-promo" data-slide-to="1"></li>
							    <li data-target="#ss-promo" data-slide-to="2"></li>
						  	</ol>
						  	<div class="carousel-inner">
						  		<div class="item active">
						  			<img src="http://www.bekasihonda.com/wp-content/uploads/2017/10/Honda-JAZZ-2017.jpg" width="100%">
						  		</div>
						  		<div class="item">
						  			<img src="https://i.ytimg.com/vi/T0OTSiDvC34/maxresdefault.jpg">
						  		</div>
						  		<div class="item">
						  			<img src="https://grapesandoranges.files.wordpress.com/2012/11/petrons-passion-for-porsche.jpg">
						  		</div>

						  		<a class="left carousel-control" href="#ss-promo" data-slide="prev">
							      <span class="glyphicon glyphicon-chevron-left"></span>
							      <span class="sr-only">Previous</span>
							    </a>
							    <a class="right carousel-control" href="#ss-promo" data-slide="next">
							      <span class="glyphicon glyphicon-chevron-right"></span>
							      <span class="sr-only">Next</span>
							    </a>
						  	</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="promo-prev1" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header" style="background-color: #ff6666; color: #fff;">
					<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
						&times;
					</button>
					<h4 class="modal-title" align="center">Preview Promo</h4>
				</div>
				<div class="modal-body">
					<img src="http://www.bekasihonda.com/wp-content/uploads/2017/10/Honda-JAZZ-2017.jpg" width="100%">
				</div>
			</div>
		</div>
	</div>

	<div id="newpromo" class="modal fade" role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="">
					<div class="modal-header custbg-hd">
						<button type="button" class="close" data-dismiss="modal" style="color: #9effff;">
							&times;
						</button>
						<h4 class="modal-title">Promo Baru</h4>
					</div>
					<div class="modal-body">
						<form id="newpromo-form" method="POST" action="#" class="form-horizontal" enctype="multipart/form-data">
							<div class="form-group">
								<label class="control-label col-xs-4" for="c_promo">Promo</label>
								<div class="col-xs-6">
									<input id="c_promo" type="file" name="c_promo" accept="image/*">
								</div>
							</div>
							<div class="modal-footer">
								<a id="promo-btn" href="#" type="submit" class="btn btn-success"><i class="fa fa-save"></i> Simpan</a>
							</div> 
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> 