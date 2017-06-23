"use strict";

angular.module("suntechapp").service("userService", userService);

function userService($http, $q) {
    function getWeather(city, lang) {
        var deferred = $q.defer();

        $http.get("/result/" + city + "?lang=" + lang)
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    return {
        "getWeather" : getWeather
    }
}