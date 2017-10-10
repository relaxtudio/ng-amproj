am.controller('ContactCtrl', ['$scope', '$state', 'NgMap', function($scope, $state, NgMap){
  $scope.init = function() {
    $scope.locations = [
        {
            lks : 'Anugerah Motor - Dharmawangsa 69',
            desc : 'Jl. Dharmawangsa No. 69',
            pos : [-7.276557, 112.756154]
        },
        {
            lks : 'Anugerah Motor - Kertajaya 158',
            desc : 'Test',
            pos : [-7.2789629, 112.757262]
        },
        {
            lks : 'Anugerah Motor - Barata Jaya 19 / 28',
            desc : 'Test',
            pos : [-7.30123239, 112.75917991]
        },
        {
            lks : 'Anugerah Motor - Jenggolo 60',
            desc : 'Test',
            pos : [-7.4415895, 112.7197847]
        },
        {
            lks : 'Anugerah Motor - Ngagel Jaya 33',
            desc : 'Test',
            pos : [-7.289509, 112.7539402]
        },    
        {
            lks : 'Anugerah Motor - Kertajaya 97',
            desc : 'Test',
            pos : [-7.2782748, 112.756492]
        },
        {
            lks : 'Anugerah Motor - DTC Wonokromo',
            desc : 'Test',
            pos : [-7.302322, 112.7373842]
        },
        {
            lks : 'Anugerah Motor - BG Junction',
            desc : 'Test',
            pos : [-7.251574,  112.7337643]
        }
    ];
    $scope.loadMap();
  };

  $scope.loadMap = function() {
    NgMap.getMap().then(function(map){
        console.log($scope.locations);
    })
  };
  $scope.init();

}])