"use strict";

angular.module("suntechapp").config(["$httpProvider", interceptorsConfig]);

function interceptorsConfig($httpProvider) {
    $httpProvider.interceptors.push("errorInterceptor");
};