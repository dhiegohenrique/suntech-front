"use strict";

angular.module("suntechapp").controller("errorMessageController", ["$scope", "$rootScope", errorMessageController]);

function errorMessageController($scope, $rootScope) {
    if (!$rootScope.statusCode) {
        return;
    }

    $scope.errorMessage = "errorMessage";
    $scope.errorClass = "alert-danger";
};