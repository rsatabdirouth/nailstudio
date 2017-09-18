//mainApp
(function () {
    'use strict';

    angular.module('mainApp', [
        'ui.router',
        'comp.homeApp',
        'comp.aboutusApp',
        'comp.contactusApp',
        'comp.registerApp',
        'comp.servicesApp',
        'comp.termsandconditionsApp',
        'comp.privecypolicyApp',
        'comp.sitemapApp'
    ]);
})();