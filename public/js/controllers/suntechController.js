"use strict";

angular.module("suntechapp").controller("suntechController", ["$scope", "$translate", "userService", "languages", "$state", "translateService", suntechController]);

function suntechController($scope, $translate, userService, languages, $state, translateService) {
    $scope.changeLanguage = function() {
        $translate.use($scope.idLanguage);
    };

    var init = function() {
        $scope.languages = languages;
        $scope.idLanguage = languages[0].id;

        $scope.users = [
            {
                id: "1",
                userName: "user1",
                password: "123qwe",
                isEnabled: true,
                registerDate: new Date(),
                name: "Dhiego",
                surName: "Henrique",
                email: "dhiego.henrique@hotmail.com",
                phone: "48999999999"
            },
            {
                id: "2",
                userName: "user2",
                password: "123qwe",
                isEnabled: false,
                registerDate: new Date(),
                name: "Maria",
                surName: "Carmo",
                email: "maria@hotmail.com",
                phone: "48996710952"
            },
            {
                id: "3",
                userName: "user3",
                password: "123qwe",
                isEnabled: true,
                registerDate: new Date(),
                name: "Frederico",
                surName: "Silva",
                email: "frederico.silva@gmail.com",
                phone: "49996712354"
            },
            {
                id: "4",
                userName: "user2",
                password: "123qwe",
                isEnabled: false,
                registerDate: new Date(),
                name: "Joana",
                surName: "Alves",
                email: "dhiego.henrique@hotmail.com",
                phone: "49888888888"
            },
        ]
    };

    $scope.showPassword = function($index) {
        var showPassword = $scope.users[$index].showPassword;
        $scope.users[$index].showPassword = !showPassword;
    };

    init();
};