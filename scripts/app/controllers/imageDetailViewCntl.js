myApp.controller('myMCntl', ['$scope', '$http', '$routeParams',

    function($scope, $http, $routeParams) {


        $http.get('server/members.json').success(function(data) {
         $scope.memberDetail=data[$routeParams.phoneId-1];
        });
        

    }
]);
