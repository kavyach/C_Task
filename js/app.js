angular.module('app', [])

.controller('MyCtrl', function ($scope, $interval, $http) {

        var house = [];
        var id = 1;

        $scope.house = house;
        $scope.id = id;

        $scope.server_request = function () {

            $http.get("http://localhost:8081/homes/House"+$scope.id+"/data").then(
                function (response) {
                    if(response.data.Rooms == null) {
                        $scope.id = 0;
                    }
                    $scope.house = response.data.Rooms;
                    $scope.id++;
                });
        };

        setInterval($scope.server_request,2000);
    });