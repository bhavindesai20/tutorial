"use strict";
var myApp = angular.module('myApp', ['ngRoute']);

myApp.run(['$http', '$templateCache', '$rootScope',
    function($http, $templateCache, $rootScope) {

        //caching all templates at app bootstrap
        $http.get('templates/view1.html', {
            cache: $templateCache
        });
        $http.get('templates/view2.html', {
            cache: $templateCache
        });
        $http.get('templates/view3.html', {
            cache: $templateCache
        });

    }
]);


myApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/first', {
                templateUrl: 'templates/view1.html',
                controller: 'FirstCtrl',
                resolve: {
                    initData: ['DataService',
                        function(DataService) {
                            return DataService.getData();
                        }
                    ]
                }
            })
            .when('/second', {
                templateUrl: 'templates/view2.html',
                controller: 'SecondCtrl'
            })
            .when('/Upload', {
                templateUrl: 'templates/fileupload.html',
                controller: 'FileUploadCtrl'
            })

        .when('/UploaderAjs', {
            templateUrl: 'templates/FileUwithAJS.html',
            controller: 'uploaderCntl'
        })

        .when('/third/:name/:city', {
            templateUrl: 'templates/view3.html',
            controller: 'ThirdCtrl'
        })
            .when('/phone', {
                templateUrl: 'templates/phonelist.html',
                controller: 'myCntl'
            })
            .when('/phones/:phoneId', {
                templateUrl: 'templates/phoneDetaillist.html',
                controller: 'myMCntl'
            })

        .otherwise({
            redirectTo: '/phone'
        });

        //setting to use HTML5 mode of SPA
        //$locationProvider.html5Mode(true);
    }
]);
