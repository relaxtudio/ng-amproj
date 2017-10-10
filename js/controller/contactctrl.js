am.controller('ContactCtrl', ['$scope', '$state', 'NgMap', function($scope, $state, NgMap){
    
    $scope.init = function() {
        $scope.locations = [
            {
                lks : 'Anugerah Motor - Dharmawangsa 69',
                desc : 'Jl. Dharmawangsa No. 69',
                lat : -7.276557, 
                lng : 112.756154
            },
            {
                lks : 'Anugerah Motor - Kertajaya 158',
                desc : 'Test',
                lat : -7.2789629, 
                lng : 112.757262
            },
            {
                lks : 'Anugerah Motor - Barata Jaya 19 / 28',
                desc : 'Test',
                lat : -7.30123239, 
                lng : 112.75917991
            },
            {
                lks : 'Anugerah Motor - Jenggolo 60',
                desc : 'Test',
                lat : -7.4415895, 
                lng : 112.7197847
            },
            {
                lks : 'Anugerah Motor - Ngagel Jaya 33',
                desc : 'Test',
                lat : -7.289509, 
                lng : 112.7539402
            },    
            {
                lks : 'Anugerah Motor - Kertajaya 97',
                desc : 'Test',
                lat : -7.2782748, 
                lng : 112.756492
            },
            {
                lks : 'Anugerah Motor - DTC Wonokromo',
                desc : 'Test',
                lat : -7.302322, 
                lng : 112.7373842
            },
            {
                lks : 'Anugerah Motor - BG Junction',
                desc : 'Test',
                lat : -7.251574, 
                lng : 112.7337643
            }
        ];

        $scope.map = {
            lat: $scope.locations[0].lat,
            lng: $scope.locations[0].lng,
            zoom: 11,
            locations : $scope.locations
        };
    };

    $scope.initFunction = function() {
        $scope.loadMap();
    };

    $scope.loadMap = function() {
        NgMap.getMap().then(function(map){
        })
    };

    $scope.selectLocation = function(index, map) {
        console.log(index, map);
        $scope.map.locations = [map];
        $scope.map.zoom = 15;
        $scope.map.lat = map.lat;
        $scope.map.lng = map.lng;
        $scope.map.index = index;
    }

    $scope.init();
    $scope.$on('$routeChangeSuccess', function() {
        $scope.initFunction();
    });
    
}])