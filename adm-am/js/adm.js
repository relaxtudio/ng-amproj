$(document).ready(function(){

	$(function(){
		$("#snav").hover(function(){
			$("#content").find(".overlay").show().css({'opacity':0}).animate({'opacity':1});
		}, function(){
			$("#content").find(".overlay").hide().css({'opacity':1}).animate({'opacity':0});
		});
	})

	$(function(){
		$('.modal').on('hidden.bs.modal', function(){
		    $('.modal-body').find('label,input,textarea,select,img').val('');
		    $('.modal-body').find('.preview-img').empty();
		});
	});

	$(function(){
		$("#newmobil").on("hidden.bs.modal", function(){
			$('#newmobil a:first').tab('show');
		});
		$("#editmobil").on("hidden.bs.modal", function(){
			$('#editmobil a:first').tab('show');
		});
	})

	function getRandomColor() {
		var letters = '0123456789ABCDEF';
	  	var color = '#';
	  	for (var i = 0; i < 6; i++) {
	    	color += letters[Math.floor(Math.random() * 16)];
	  	}
	  	return color;
	}

	$(function(){
		var conf_pie = {
			type: 'pie',
			data: {
				labels: ["Dharmawangsa 69", "Kertajaya 97", "Kertajaya 158", "Barata Jaya XIX/29", "Jenggolo 60", "DTC Wonokromo", "Ngagel Jaya 33", "BG Junction"],
				datasets: [{
					data: [27,14,19,21,16,9,22,17],
					backgroundColor: [
						"#3366ff",
						"#00ffff",
						"#cc66ff",
						"#ff0066",
						"#ffff80",
						"#00ff99",
						"#ff66cc",
						"#ff9966"
					]
				}]
			},
			options: {
				cutoutPercentage: 50,
				legend: {
					position: "bottom",
					display: false,
					labels: {
						fontFamily: "Poppins"
					}
				}
			}
		};

		var ctx = document.getElementById("carSrChart").getContext("2d");	
		var car_pie = new Chart(ctx, conf_pie);
	});

	$(function(){
		var conf_brand = {
			type: 'pie',
			data: {
				labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
				datasets: [{
					data: [5, 15,10,25,11,19,7,16,9,3],
					backgroundColor:[
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor()
					]
				}]
			},
			options: {
				cutoutPercentage: 50,
				legend: {
					position: "bottom",
					display: false,
					labels: {
						fontFamily: "Poppins"
					}
				}
			}
		}
		var ctx2 = document.getElementById("brandChart").getContext("2d");
		var brand_pie = new Chart(ctx2, conf_brand);
	});

	$(function(){
		var conf_model = {
			type: 'pie',
			data: {
				labels: ["4x4","Jeep","Pick-Up","Sedan","SUV","Truk"],
				datasets: [{
					data: [5, 15,10,25,11,19],
					backgroundColor:[
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor(),
						getRandomColor()
					]
				}]
			},
			options: {
				cutoutPercentage: 50,
				legend: {
					position: "bottom",
					display: false,
					labels: {
						fontFamily: "Poppins"
					}
				}
			}
		}
		var ctx3 = document.getElementById("modelChart").getContext("2d");
		var model_pie = new Chart(ctx3, conf_model);
	});

	$(function(){
		var conf_trans = {
			type: 'pie',
			data: {
				labels: ["Manual","Semi-Otomatis","Otomatis"],
				datasets: [{
					data: [55,10,71],
					backgroundColor:[
						getRandomColor(),
						getRandomColor()
					]
				}]
			},
			options: {
				cutoutPercentage: 50,
				legend: {
					position: "bottom",
					display: false,
					labels: {
						fontFamily: "Poppins"
					}
				}
			}
		}
		var ctx4 = document.getElementById("transChart").getContext("2d");
		var trans_pie = new Chart(ctx4, conf_trans);
	});

	$(function(){
		$("#preview").on("change", function(){
			var countFiles = $(this)[0].files.length;
 
		    var imgPath = $(this)[0].value;
		    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
		    var image_holder = $("#prev");
		    image_holder.empty();
		 
		    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
		        if (typeof (FileReader) != "undefined") {
		 
		            for (var i = 0; i < countFiles; i++) {
		 
		                var reader = new FileReader();
		                reader.onload = function (e) {
		                    $("<img />", {
		                        "src": e.target.result,
		                            "class": "thumbimage"
		                    }).appendTo(image_holder);
		                }
		                image_holder.show();
		                reader.readAsDataURL($(this)[0].files[i]);
		            }
		        } else {
		            alert("It doesn't supports");
		        }
		    } else {
		        alert("Select Only images");
		    }
		});
	});

	$(function(){
		$("#exterior").on("change", function(){
			var countFiles = $(this)[0].files.length;
 
		    var imgPath = $(this)[0].value;
		    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
		    var image_holder = $("#ext360");
		    image_holder.empty();
		 
		    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
		        if (typeof (FileReader) != "undefined") {
		 
		            for (var i = 0; i < countFiles; i++) {
		 
		                var reader = new FileReader();
		                reader.onload = function (e) {
		                    $("<img />", {
		                        "src": e.target.result,
		                            "class": "thumbimage"
		                    }).appendTo(image_holder);
		                }
		                image_holder.show();
		                reader.readAsDataURL($(this)[0].files[i]);
		            }
		        } else {
		            alert("It doesn't supports");
		        }
		    } else {
		        alert("Select Only images");
		    }
		});
	});

	$(function(){
		$("#interior").on("change", function(){
			var countFiles = $(this)[0].files.length;
 
		    var imgPath = $(this)[0].value;
		    var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
		    var image_holder = $("#int360");
		    image_holder.empty();
		 
		    if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
		        if (typeof (FileReader) != "undefined") {
		 
		            for (var i = 0; i < countFiles; i++) {
		 
		                var reader = new FileReader();
		                reader.onload = function (e) {
		                    $("<img />", {
		                        "src": e.target.result,
		                            "class": "thumbimage-int"
		                    }).appendTo(image_holder);
		                }
		                image_holder.show();
		                reader.readAsDataURL($(this)[0].files[i]);
		            }
		        } else {
		            alert("It doesn't supports");
		        }
		    } else {
		        alert("Select Only images");
		    }
		});
	});
});