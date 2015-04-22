myApp.controller('uploaderCntl', ['$scope', '$routeParams', '$route','$http',
   
    function($scope, $routeParams, $route,$http) {
       
         $scope.filesChanged=function(elm){

         	$scope.files=elm.files;
         	$scope.$apply();
         };
    }
]);