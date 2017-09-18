(function () {
    'use strict';
    angular.module('comp.registerApp')
    .controller('registerCtrl', function () {
        var vm = this;
        vm.title = "Sign Up Now";
       vm.submitForm = function (isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }

        };
    });
})();