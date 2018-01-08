angular
	.module('webApp')
	.controller('alertController', alertCtrl);

function alertCtrl($scope) {
	let vm = this;
	vm.closeAlert = function () {
		vm.show = false;
		console.log("close the alert box");
	};
}