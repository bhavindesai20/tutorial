myApp.controller('myCntl', ['$scope', '$http',

    function($scope, $http) {


        $http.get('server/members.json').success(function(data) {
            $scope.member = data;
            console.log($scope.member.length);
        });
        $scope.orderProp = 'id';
        //added 
        $scope.currentPage = 0;
        $scope.pageSize = 9;
        $scope.numberOfPages = function() {
            return Math.ceil($scope.member.length / $scope.pageSize);
        }
    }
]);

myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});

