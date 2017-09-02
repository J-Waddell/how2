const app = angular.module('how2', ['ngRoute'])

    app.config(($routeProvider, $locationProvider) => {
        $locationProvider.hashPrefix('')
        $routeProvider
            .when('/home', {
                controller: 'HomeCtrl',
                templateUrl: '../partials/home.html'
            })
    })