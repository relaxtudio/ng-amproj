// 1. Google Map // 
var cities = [
    {
        lks : 'Anugerah Motor - Dharmawangsa 69',
        desc : 'Jl. Dharmawangsa No. 69',
        lat : 7.276557,
        long : 112.756154 
    },
    {
        lks : 'Anugerah Motor - Kertajaya 158',
        desc : 'Test',
        lat : -7.2789629,
        long : 112.757262
    },
    {
        lks : 'Anugerah Motor - Barata Jaya 19 / 28',
        desc : 'Test',
        lat : -7.30123239,
        long : 112.75917991
    },
    {
        lks : 'Anugerah Motor - Jenggolo 60',
        desc : 'Test',
        lat : -7.4415895,
        long : 112.7197847
    },
    {
        lks : 'Anugerah Motor - Ngagel Jaya 33',
        desc : 'Test',
        lat : -7.289509,
        long : 112.7539402
    },    
    {
        lks : 'Anugerah Motor - Kertajaya 97',
        desc : 'Test',
        lat : -7.2782748,
        long : 112.756492 
    },
    {
        lks : 'Anugerah Motor - DTC Wonokromo',
        desc : 'Test',
        lat : -7.302322,
        long : 112.7373842 
    },
    {
        lks : 'Anugerah Motor - BG Junction',
        desc : 'Test',
        lat : 7.251574,
        long : 112.7337643 
    }
];

am.controller('ContactCtrl', ['$scope', '$state', function($scope, $state){
	 // Map Settings //
    $scope.initialise = function() {
    	if (navigator.geolocation) {
		        navigator.geolocation.getCurrentPosition(showPosition);
		    } else {
		        //browser does not support geolocation
		    }
		function showPosition(position) {
		    var latitude = position.coords.latitude;
		    var longitude = position.coords.longitude; 
		}

        var myPos = new google.maps.LatLng(latitude,);
        var mapOptions = {
            center: myPos,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
      // Geo Location /
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                map: map,
                animation: google.maps.Animation.DROP,
                title: "Lokasi Saya"
            });
        });
        $scope.map = map;
        // Additional Markers //
        $scope.markers = [];
        var infoWindow = new google.maps.InfoWindow();
        var createMarker = function (info){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(info.lat, info.long),
                map: $scope.map,
                animation: google.maps.Animation.DROP,
                title: info.lks
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });
            $scope.markers.push(marker);
        }  
        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }

    };
    google.maps.event.addDomListener(document.getElementById("map"), 'load', $scope.initialise());
}])