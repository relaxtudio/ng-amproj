am.controller('ContactCtrl', function($scope, $state, $ws, NgMap, $timeout){
    
    $scope.init = function() {
        $scope.status = {
            load: false
        };
        $scope.locations = [];
        $scope.initWs();
    };

    $scope.initWs = function() {
        $ws.getMap(null, function(respon) {
            $scope.locations = respon.data;
            $scope.loadMap();
            $scope.initFunction();
            $timeout(function() {
                $scope.loadAllMarker();
            }, 450);
            window.scrollTo(0, 0);
        }, error);
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
            $scope.map = map;
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
        $scope.map.zoom = 17;
        $scope.map.lat = map.lat;
        $scope.map.lng = map.lng;
        $scope.map.index = index;
        $scope.map.lks = map.lks;
        $scope.map.descr = map.descr;
        $scope.map.tlp = map.tlp;
        $scope.map.tlp = map.kota;
    };

    $scope.init();
    $scope.$on('$viewContentLoaded', function() {
        $scope.initWs();
    });

    $scope.$on('$destroy', function() {
        $scope.map.locations = [];
    });
    
    $scope.scrollToTop = function($var) {
      $('html, body').animate({
          scrollTop: 0
      }, 'fast');
    };

})