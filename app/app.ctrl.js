(function () {
    'use strict';

    angular
        .module('mainApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$rootScope', '$anchorScroll'];

    function MainCtrl($rootScope, $anchorScroll) {
        /* jshint validthis:true */
        var vm = this;
        vm.date = new Date().getFullYear();
        $rootScope.bodyShow = false;
        var myNavBar = {
            flagAdd: true,
            elements: [],
            init: function (elements) {
                // console.info(elements);
                this.elements = elements;
            },
            add: function () {
                if (this.flagAdd) {
                    for (var i = 0; i < this.elements.length; i++) {
                        document.getElementById(this.elements[i]).className += " fixed-theme";
                    }
                    this.flagAdd = false;
                }
            },
            remove: function () {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
                }
                this.flagAdd = true;
            }
        };

        function offSetManager() {

            var yOffset = 0;
            var currYOffSet = window.pageYOffset;

            if (yOffset < currYOffSet) {
                myNavBar.add();
            }
            else if (currYOffSet == yOffset) {
                myNavBar.remove();
            }
        }

        window.onscroll = function (e) {
            offSetManager();
        }

        myNavBar.init([
            "header",
            "header-container",
            "brand"
        ]);

        function active() {

        }

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {           
              $("html, body").animate({ scrollTop: 0 }, 400);     
              $rootScope.bodyShow = true;         
        });
    }
})();
