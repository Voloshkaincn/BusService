$( document ).ready(function(){
	$('.sidebar-control').click(function(){
		$(this).toggleClass('close');
		$('.sidebar').toggleClass('thin-sidebar');
		$('.main-col').toggleClass('sidebar-close');
	});
	$('.sidebar-menu__link').click(function(){
		$('.sidebar-menu__link').removeClass('active');
		$(this).addClass('active');
	});
	$(window).resize(function(){
		if ( $('#max-width-991').css('display') == 'block' ){
		    $('.sidebar').removeClass('thin-sidebar');
		    $('.sidebar-control').removeClass('close');
		    $('.main-col').removeClass('sidebar-close');
		};
	});
	// if ( $('#max-width-991').css('display') == 'block' ){
	//     $('.sidebar-control').addClass('close');
	// 	$('.sidebar').addClass('thin-sidebar');
	// 	$('.main-col').addClass('sidebar-close');
	// };
	// $('.mobil-menu').on('click', function(){
	// 	$('.sidebar').toggle('300');
	// 	$('.overlay').fadeToggle('300');
	// });
});
serviseApp.controller("menuCtrl", ["$scope", '$location', function($scope, $location){
	$scope.isActive = function(location){
		return location === $location.path();
	}
	$scope.sidebarHide = function(){
		angular.element(document.querySelector('.sidebar')).removeClass('show');
		angular.element(document.querySelector('.navbar-toggler .humburger')).triggerHandler('click');
	}

}]);
