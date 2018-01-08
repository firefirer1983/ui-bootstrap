angular
	.module('webApp')
	.controller('tabController', tabCtrl);

function tabCtrl($scope) {
	let vm = this;
	vm.activeTabID = "1";
}
