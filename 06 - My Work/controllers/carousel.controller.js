angular
	.module('webApp')
	.controller('carouselController', carouselCtrl);

function carouselCtrl($scope) {
	let vm = this;
	vm.interval = 3000;
	vm.noWrapFlag = false;
	vm.activeSlideIdx = 0;
	vm.slides = [
		{
			imgUrl:"assets/images/carousel_large_01.jpg",
			text: "this is the first pic of the slide",
			id:0
		},
		{
			imgUrl:"assets/images/carousel_large_02.jpg",
			text: "this is the second pic of the slide",
			id:1
		},
		{
			imgUrl:"assets/images/carousel_large_03.jpg",
			text: "this is the third pic of the slide",
			id:2
		}
	]
}