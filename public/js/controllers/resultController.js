"use strict";

angular.module("weatherapp").controller("resultController", ["$scope", "$rootScope", "$stateParams", "moment", "$translate", "translateService", resultController]);

function resultController($scope, $rootScope, $stateParams, moment, $translate, translateService) {
    var weatherConditions = $stateParams.weatherData;
    $scope.cityName = weatherConditions.cityName;
    $scope.icon = weatherConditions.cod;

    $scope.searchFormatDate = moment(weatherConditions.searchDate).format("LLLL");

    fillInWeather($scope, weatherConditions);
    fillInMain($scope, weatherConditions);
    fillInWind($scope, weatherConditions);
    fillInSys($scope, weatherConditions, moment);
    fillInCoord($scope, weatherConditions);

    $scope.$on("changeLanguage", function(event, description) {
        var currentLang = $translate.proposedLanguage() || $translate.use();
        moment.locale(currentLang);

        $scope.searchFormatDate = moment(weatherConditions.searchDate).format("LLLL");
        $scope.description = description;
    });
};

function fillInMain($scope, weatherConditions) {
    var main = weatherConditions.main;
    $scope.temp = main.temp;
    $scope.pressure = main.pressure;
    $scope.humidity = main.humidity;
    $scope.tempMin = main.tempMin;
    $scope.tempMax = main.tempMax;
};

function fillInWeather($scope, weatherConditions) {
    var weather = weatherConditions.weather;
    $scope.icon = $scope.icon + "-" + weather.icon.substring(2);
    $scope.description = weather.description;

    $scope.$emit("weatherDescription", $scope.description);
};

function fillInWind($scope, weatherConditions) {
    var wind = weatherConditions.wind;
    $scope.speed = wind.speed;
};

function fillInSys($scope, weatherConditions, moment) {
    var sys = weatherConditions.sys;
    $scope.country = sys.country;
    $scope.sunrise = formatHour(sys.sunrise, moment);
    $scope.sunset = formatHour(sys.sunset, moment);
};

function fillInCoord($scope, weatherConditions) {
    var coord = weatherConditions.coord;
    $scope.lon = coord.lon;
    $scope.lat = coord.lat;
};

function formatHour(hour, moment) {
    return moment.unix(hour).format("HH:mm");
};