serviseApp.controller('orderCtrl', ["$scope", function($scope) {
	$scope.orders = [
		{
			check: false,
			id: 22,
			client: 'Авранко Андрей Михайлович',
			model: 'Mercedes Transporter',
			number: 'ЧН241555ВП',
			post: 'Пост 1',
			summ: '22 222,22 грн',
			debt: '2 222,22 грн',
			time: '22,03.2017 22:03',
			author: 'Андрей Кривошейко',

		},
		{
			check: false,
			id: 22,
			client: 'Семег Семенович Пупкин',
			model: 'Mercedes Transporter',
			number: 'ЧН241555ВП',
			post: 'Пост 1',
			summ: '222,22 грн',
			debt: '',
			time: '22,03.2017 22:03',
			author: 'Игнатий Длиннофамиленко',

		},
		{
			check: false,
			id: 22,
			client: 'Авранко Андрей Михайлович',
			model: 'Mercedes Transporter',
			number: 'ЧН241555ВП',
			post: 'Пост 1',
			summ: '22 222,22 грн',
			debt: '2 222,22 грн',
			time: '22,03.2017 22:03',
			author: 'Андрей Кривошейко',

		},
		{
			check: false,
			id: 22,
			client: 'Авранко Андрей Михайлович',
			model: 'Mercedes Transporter',
			number: 'ЧН241555ВП',
			post: 'Пост 1',
			summ: '22 222,22 грн',
			debt: '',
			time: '22,03.2017 22:03',
			author: 'Андрей Кривошейко',

		},
		{
			check: false,
			id: 22,
			client: 'Авранко Андрей Михайлович',
			model: 'Mercedes Transporter',
			number: 'ЧН241555ВП',
			post: 'Пост 1',
			summ: '22 222,22 грн',
			debt: '2 222,22 грн',
			time: '22,03.2017 22:03',
			author: 'Андрей Кривошейко',

		},
		{
			check: false,
			id: 22,
			client: 'Авранко Андрей Михайлович',
			model: 'Mercedes Transporter',
			number: 'ЧН241555ВП',
			post: 'Пост 1',
			summ: '22 222,22 грн',
			debt: '2 222,22 грн',
			time: '22,03.2017 22:03',
			author: 'Андрей Кривошейко',

		},
		{
			check: false,
			id: 22,
			client: 'Авранко Андрей Михайлович',
			model: 'Mercedes Transporter',
			number: 'ЧН241555ВП',
			post: 'Пост 1',
			summ: '22 222,22 грн',
			debt: '2 222,22 грн',
			time: '22,03.2017 22:03',
			author: 'Андрей Кривошейко',

		}
	];
	$scope.ordersArchive = [];
	$scope.add = function(){
		location.href = '#!order-detail';
	};
	$scope.del = function(){
		var oldOrders = $scope.orders;
		$scope.orders = [];
		angular.forEach(oldOrders, function(item){
			if (!item.check) {
				$scope.orders.push(item);
			}
		});
		return $scope.orders;
	};
	$scope.archive = function(){
		var oldOrders = $scope.orders;
		$scope.orders = [];
		angular.forEach(oldOrders, function(item){
			if (!item.check) {
				$scope.orders.push(item);
			}
			else {
				$scope.ordersArchive.push(item);
			}
		});
		return $scope.orders;
	};
	$scope.allCheck = function(){
		var tagleChack = $scope.toggleCheck;
		angular.forEach($scope.orders, function(item){
			item.check = tagleChack;
		});
	};
}]);