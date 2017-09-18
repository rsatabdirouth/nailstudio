(function () {
	'use strict';
	angular.module('comp.servicesApp')
		.controller('servicesCtrl', function () {
			var vm = this;
			var imgs = ['assets/img/aboutus_img.jpg', 'assets/img/service1.jpg', 'assets/img/service2.jpg'];
			var titles = ['File and Polish', 'Hot Stone Manicure', 'Shellac coating'];
			vm.services = [];
			vm.activePage = false;
			vm.randomService = randomService;
			vm.title = "Our Services";
			vm.pages = [1, 2, 3, 4, 5];
			active();

			function active() {
				for (var i = 0; i < 3; i++) {
					var tmp = {
						image: imgs[i],
						title: titles[i]
					}
					vm.services.push(tmp);
				}
			}
			function falseOthers() {
				for (var i = 0; i < vm.pages.length; i++) {
					vm['activePage' + vm.pages[i]] = false;
				}
			}

			
			function randomService(ev,n) {				
				falseOthers()
				vm['activePage' + n] = true;
				shuffle(vm.services);
			}

			function shuffle(a) {
				var j, x, i;
				for (i = a.length; i; i--) {
					j = Math.floor(Math.random() * i);
					x = a[i - 1];
					a[i - 1] = a[j];
					a[j] = x;
				}
			}

		});
})();