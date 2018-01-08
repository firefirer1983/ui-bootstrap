angular
	.module('webApp')
	.controller('navbarController', navbarCtrl);

function navbarCtrl($scope) {
	let vm = this;
	vm.isNavCollapse = true;
}
