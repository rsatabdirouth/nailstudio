(function () {
    'use strict';
    angular.module('comp.contactusApp')
        .controller('contactusCtrl', function () {
            var vm = this;
            vm.title = "Contact Us";
            vm.submit = submit;
            vm.contact = {};
            vm.ukPhonePattern = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
            function submit() {
                reset();
            }

            function reset(){
                vm.contact = {};                                
                vm.form.$setPristine();
                vm.form.$setUntouched();
            }
        })
})();