"use strict";

angular.module("suntechapp").service("userService", ["$http", "$q", userService]);

function userService($http, $q) {
    function getUsers() {
        var deferred = $q.defer();
        var urlLocal = "http://localhost:3000/users";
        var urlHeroku = "https://suntech-back.herokuapp.com/users";

        $http.get(urlLocal)
            .then(function(response) {
                if (response) {
                    deferred.resolve(response.data);
                } else {
                    $http.get(urlHeroku)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    })
                }
            })
            .catch(function(error) {
                deferred.reject(error);
            });

        return deferred.promise;
    };

    return {
        "getUsers" : getUsers
    }
}