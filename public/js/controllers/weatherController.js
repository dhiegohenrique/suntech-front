"use strict";

angular.module("weatherapp").controller("weatherController", ["$scope", "$translate", "weatherService", "languages", "$state", "translateService", "$q", weatherController]);

function weatherController($scope, $translate, weatherService, languages, $state, translateService, $q) {
    $scope.changeLanguage = function() {
        var promiseTranslate = $translate.use($scope.idLanguage);
        var promiseTranslateService = translateService.getTranslateDescription($scope.description, $scope.idLanguage);

        $q.all([promiseTranslate, promiseTranslateService])
            .then(function(results) {
                $scope.$broadcast("changeLanguage", results[1]);
            });
    };

    $scope.submitForm = function(isValid) {
        if (!isValid) {
            return;
        }

        $scope.spinner = true;
        $scope.searchDate = new Date();

        weatherService.getWeather($scope.city, $scope.idLanguage)
            .then(function(response) {
                response.searchDate = $scope.searchDate;
                $state.go("result", {"weatherData" : response});
            })
            .finally(function(){
                $scope.spinner = false;
            });
    };

    $scope.$on("weatherDescription", function(event, description) {
        $scope.description = description;
    });

    var init = function() {
        $scope.languages = languages;
        $scope.idLanguage = languages[0].id;
        $scope.inputType = "password";

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