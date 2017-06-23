"use strict";

angular.module("weatherapp").controller("errorMessageController", ["$scope", "$rootScope", errorMessageController]);

function errorMessageController($scope, $rootScope) {
    if (!$rootScope.statusCode) {
        return;
    }

    $scope.errorMessage = "errorMessage";
    $scope.errorClass = "alert-danger";
    if ($rootScope.statusCode === 404) {
        $scope.errorMessage = "cityNotFound";
        $scope.errorClass = "alert-warning";
    }
};