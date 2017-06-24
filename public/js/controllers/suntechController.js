"use strict";

angular.module("suntechapp").controller("suntechController", ["$scope", "$translate", "userService", "languages", "$state", "translateService", "passwordService", "loadingService", suntechController]);

function suntechController($scope, $translate, userService, languages, $state, translateService, passwordService, loadingService) {
    $scope.changeLanguage = function() {
        $translate.use($scope.idLanguage);
    };

    var init = function() {
        $scope.languages = languages;
        $scope.idLanguage = languages[0].id;

        loadingService.openModal();
        userService.getUsers()
            .then(function(response) {
                $scope.users = response;
            })
            .finally(function(){
                loadingService.closeModal();
            });
    };

    $scope.showPassword = function($index) {
        var showPassword = $scope.users[$index].showPassword;
        $scope.users[$index].showPassword = !showPassword;

        // var decryptPassword = passwordService.decrypt($scope.users[$index].password);
        // console.log("decryptPassword: " + decryptPassword);
    };

    init();
};