"use strict";

angular.module("suntechapp").factory("errorInterceptor", ["$q", "$location", "$rootScope", errorInterceptor]);

function errorInterceptor($q, $location, $rootScope) {
    return {
        responseError: function(rejection) {
            if (rejection.status < 0) {
                return;
            }

            $rootScope.statusCode = rejection.status;
            $location.path("/error");
            return $q.reject(rejection);
        }
    };
}