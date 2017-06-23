"use strict";

var languages = getLanguages();

angular.module("weatherapp")
.value("languages", languages)
.config(["$translateProvider", languageConfig]);

function languageConfig($translateProvider) {
    $translateProvider.useSanitizeValueStrategy("escape");

    $translateProvider.useStaticFilesLoader({
        prefix: "translations/locale-",
        suffix: ".json"
    });

    $translateProvider.preferredLanguage(languages[0].id);
    $translateProvider.useLoaderCache(true);
};

function getLanguages() { 
    return [
        {
            id: "pt-br",
            name: "Português"
        },
        {
            id: "en-au",
            name: "English"
        },
        {
            id: "es",
            name: "Español"
        }
    ];
}