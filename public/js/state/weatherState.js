"use strict";

angular.module("weatherapp").config(["$stateProvider", "$urlRouterProvider", weatherState]);

function weatherState($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("error", {
        url: "/error",
        templateUrl: "./../partials/errorMessage.html",
        controller: "errorMessageController"
    })
    .state("result", {
        url: "/result",
        templateUrl: "./../partials/result.html",
        controller: "resultController",
        params: {"weatherData": null}
    });
}