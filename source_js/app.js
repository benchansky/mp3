var mp3 = angular.module('mp3',['ngRoute', 'mp3Controllers']);

mp3.config(function ($routeProvider) {
    $routeProvider
        .when('/details/:id', {
            templateUrl : 'partials/details.html',
            controller: 'detailsController'
        })
        .when('/gallery', {
            templateUrl : 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/list', {
            templateUrl : 'partials/list.html',
            controller: 'listController'
        })
        .otherwise({
            redirectTo: '/list'
        });
})
