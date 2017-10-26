$(document).ready(function(){
	$("#lgn-btn").on("click", function(e){
		$(".lg-bg").css("display","none");
		$("#content").empty();
		$("#content").load("template/main.php");
		e.preventDefault();
	});

	$("#snav").hover(function(){
		$("#content").find(".overlay").show().css({'opacity':0}).animate({'opacity':1});
	}, function(){
		$("#content").find(".overlay").hide().css({'opacity':1}).animate({'opacity':0});
	});

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

	$(function(){
		var ctx = document.getElementById("carSrChart").getContext("2d");	
		var car_pie = new Chart(ctx, conf_pie);
	})
});