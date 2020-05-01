var module = angular.module('myApp', ['ui.router']);

module.run(function () {
    angular.element(document).ready(function () {
    });
});

module.config([
    "$stateProvider",
    "$urlRouterProvider",
    function (
        $stateProvider,
        $state,
        $urlRouterProvider,
        $location,
    ) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "app/views/home.html",
            })
            .state("detail", {
                url: "/detail",
                templateUrl: "app/views/detail.html",
            })
    }
]);

module.controller('RootController', function($state, $scope, $location) {
    $state.transitionTo("home");

    $scope.movePage = function (param1, param2, param3, param4) {
        if (param4) {
            $location.path("/" + param1 + "/" + param2 + "/" + param3 + "/" + param4);
        } else if (param3) {
            $location.path("/" + param1 + "/" + param2 + "/" + param3);
        } else if (param2) {
            $location.path("/" + param1 + "/" + param2);
        } else if (param1) {
            $location.path("/" + param1);
        }
    };
});

