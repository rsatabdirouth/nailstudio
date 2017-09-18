(function(){
	'use strict';
	
	angular.module('comp.homeApp')
	.controller('homeCtrl', function($rootScope){
		var vm = this;
		vm.title = 'Home';		
		activate();

		function activate(){
			//vm.isSlider = true;
		}
		
	});
	
})();