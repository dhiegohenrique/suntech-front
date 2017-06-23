"use strict";

angular.module("suntechapp").config(["$stateProvider", "$urlRouterProvider", suntechState]);

function suntechState($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("error", {
        url: "/error",
        templateUrl: "./../partials/errorMessage.html",
        controller: "errorMessageController"
    });
}