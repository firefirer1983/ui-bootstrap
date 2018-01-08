angular
	.module('webApp')
	.controller('modalController', modalCtrl);

angular
  .module('webApp')
	.controller('ModalInstanceController', ModalInstanceController);

function modalCtrl($uibModal) {
	let vm = this;
	vm.open = function () {
		let modalInstance = $uibModal.open({
      animation: true,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'modalDemo.html',
      controller: 'ModalInstanceController',
      controllerAs: 'modalInstanceCtrl',
      size: "md",
      resolve: {
        msg: function () {
          return "hello world!";
        }
      }
		});
    modalInstance.result.then(function (msg) {
			console.log("end ok msg:",msg);
    }, function (msg) {
			console.log("end diss at ", new Date(), "msg:", msg);
    });
	};
}

function ModalInstanceController($uibModalInstance, msg) {
	let vm = this;
	console.log("1st msg:", msg);
  vm.ok = function () {
    $uibModalInstance.close("good bye!");
  };
  vm.cancel = function () {
    $uibModalInstance.dismiss("fuck you!");
  };
}
