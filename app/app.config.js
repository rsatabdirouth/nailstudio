//mainApp
(function () {
    'use strict';

    angular.module('mainApp')
        .config(['$provide',
            function ($provide) {
                // $provide.decorator('$uiViewScroll', function ($delegate) {
                //     return function (uiViewElement) {
                //         $('html,body').animate({
                //             scrollTop: uiViewElement.offset().top
                //         }, 5000);
                //     };
                // });
            }
        ]);

})();