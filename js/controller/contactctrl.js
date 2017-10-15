am.controller('ContactCtrl', ['$scope', '$state', 'NgMap', '$timeout', function($scope, $state, NgMap, $timeout){
    
    $scope.init = function() {
        $scope.status = {
            load: false
        };
        $scope.locations = [
            {
                lks : 'Anugerah Motor - Dharmawangsa 69',
                desc : 'Jl. Dharmawangsa No. 69',
                tlp : '031-5017171',
                kota: 'Surabaya',
                lat : -7.276557, 
                lng : 112.756154
            },
            {
                lks : 'Anugerah Motor - Kertajaya 158',
                desc : 'Jl. Kertajaya No.158',
                tlp : '031-5047171',
                kota: 'Surabaya',
                lat : -7.2789629, 
                lng : 112.757262
            },
            {
                lks : 'Anugerah Motor - Barata Jaya 19 / 28',
                desc : 'Jl. Barata Jaya XIX No. 28',
                tlp : '031-5045455',
                kota : 'Surabaya',
                lat : -7.30123239, 
                lng : 112.75917991
            },
            {
                lks : 'Anugerah Motor - Jenggolo 60',
                desc : 'Jl. Jenggolo No. 60',
                tlp : '031-8957171',
                kota: 'Sidoarjo',
                lat : -7.4415895, 
                lng : 112.7197847
            },
            {
                lks : 'Anugerah Motor - Ngagel Jaya 33',
                desc : 'Jl Ngagel Jaya No. 33',
                tlp : '031-5027171',
                kota : 'Surabaya',
                lat : -7.289509, 
                lng : 112.7539402
            },    
            {
                lks : 'Anugerah Motor - Kertajaya 97',
                desc : 'Jl. Kertajaya No. 97',
                tlp : '031-5057171',
                kota : 'Surabaya',
                lat : -7.2782748, 
                lng : 112.756492
            },
            {
                lks : 'Anugerah Motor - DTC Wonokromo',
                desc : 'DTC Wonokromo Lt6',
                tlp : '087851758333',
                kota : 'Surabaya',
                lat : -7.3023274, 
                lng : 112.7375112
            },
            {
                lks : 'Anugerah Motor - BG Junction',
                desc : 'Jl Bubutan I No. 7',
                tlp : '08315884747',
                kota : 'Surabaya',
                lat : -7.251574, 
                lng : 112.7337643
            }
        ];
        $scope.loadMap();
    };

    $scope.initFunction = function() {
        $scope.map = {
            lat: $scope.locations[0].lat,
            lng: $scope.locations[0].lng,
            zoom: 11,
            locations : []
        };
        $scope.status.load = true;
    };

    $scope.loadMap = function() {
        NgMap.getMap().then(function(map){
        })
    };

    $scope.loadAllMarker = function() {
        $scope.map.locations = $scope.locations;
    };

    $scope.loadBigMap = function() {
        $scope.initFunction();
        $scope.loadAllMarker();
    };

    $scope.selectLocation = function(index, map) {
        $scope.map.locations = [map];
        $scope.map.zoom = 15;
        $scope.map.lat = map.lat;
        $scope.map.lng = map.lng;
        $scope.map.index = index;
    };

    $scope.init();
    $scope.$on('$viewContentLoaded', function() {
        $scope.initFunction();
        $timeout(function() {
            $scope.loadAllMarker();
        }, 450);
        window.scrollTo(0, 0);
    });

    $scope.$on('$destroy', function() {
        $scope.map.locations = [];
    });
    
    $scope.scrollToTop = function($var) {
      $('html, body').animate({
          scrollTop: 0
      }, 'fast');
    };

}])