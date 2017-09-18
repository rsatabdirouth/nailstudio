
//all routes
(function () {
    'use strict';

    angular.module('mainApp')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/component/home/_home.html',
                    controller: 'homeCtrl as home'
                })
                .state('aboutus', {
                    url: '/aboutus',
                    templateUrl: 'app/component/aboutus/_aboutus.html',
                    controller: 'aboutusCtrl as aboutus'
                })
                .state('services', {
                    url: '/services',
                    templateUrl: 'app/component/services/_services.html',
                    controller: 'servicesCtrl as services'
                })
                .state('contactus', {
                    url: '/contactus',
                    templateUrl: 'app/component/contactus/_contactus.html',
                    controller: 'contactusCtrl as contactus'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'app/component/register/_register.html',
                    controller: 'registerCtrl as register'
                })
                .state('termsandconditions', {
                    url: '/termsandconditions',
                    templateUrl: 'app/component/termsandconditions/_termsandconditions.html',
                    controller: 'termsandconditionsCtrl as termsandconditions'
                })
                .state('privecypolicy', {
                    url: '/privecypolicy',
                    templateUrl: 'app/component/privecypolicy/_privecypolicy.html',
                    controller: 'privecypolicyCtrl as privecypolicy'
                })
                .state('sitemap', {
                    url: '/sitemap',
                    templateUrl: 'app/component/sitemap/_sitemap.html',
                    controller: 'sitemapCtrl as sitemap'
                });           

        }]);
})();