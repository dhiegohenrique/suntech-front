"use strict";

angular.module("weatherapp").service("translateService", translateService);

function translateService($http, $q) {
    function getTranslateDescription(description, lang) {
        var deferred = $q.defer();

        $http.get("/translate/" + description + "?lang=" + lang)
            .then(function(response) {
                deferred.resolve(response.data);
            }, function(error) {
                deferred.reject(error);
            });

        return deferred.promise;
    }

    return {
        "getTranslateDescription" : getTranslateDescription
    }
}