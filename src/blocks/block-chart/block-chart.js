serviseApp.controller("chartCtrl", ["$scope", function($scope){
	//chart settings find on http://jtblin.github.io/angular-chart.js/
	$scope.labels = ['янв', 'февр', 'апр', 'март', 'май', 'июнь', 'июль' ];
	$scope.series = ['', ''];
	$scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	];
	// $scope.onClick = function (points, evt) {
	//     console.log(points, evt);
	// };
	$scope.datasetOverride = [
	{
		lineTension: 0,
		borderColor: 'rgba(240, 110, 170, 0.5)',
		backgroundColor: 'rgba(240, 110, 170, 0.5)',
	},
	{
		lineTension: 0,
		borderColor: 'rgba(0,191,243,0.5)',
		backgroundColor: 'rgba(0,191,243,0.5)',
	}
	];
	$scope.options = {
		legend: {
	      display: true,
	      position: 'top',
	      labels: {
	        fontSize: 15,
	        padding: 15,
	        usePointStyle: true,
	        fontColor: 'black'
	      }
	    },
	}

	$scope.fullScreen = function($event) {
		angular.element($event.currentTarget).toggleClass('full-screen__exit');
		angular.element($event.currentTarget).parents('.block').toggleClass('block-full-screen');
	}

}]);