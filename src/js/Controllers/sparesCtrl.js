serviseApp.controller('sparesCtrl', ["$scope", function($scope) {
	$scope.spares = {
		titles: {
	        name: "Наименования",
	        article: 'Артикул',
			count: 'Кол-во',
			minCount: 'Мин.кол-во',
			reserve: 'Резерв',
			purchasePrice: 'Закупочная цена',
			price: 'Розничная цена',
			model: 'Модель авто'
	    },
		data: [
			{
				name: '1Ocь Fondex, Бренд',
				article: 'ВМ3223',
				count: '2232',
				minCount: '222',
				reserve: '222',
				purchasePrice: '22 222,22 грн',
				price: '2 222,22 грн',
				model: 'Mercedes Sprinter'
			},
			{
				name: '2Ocь Fondex, Бренд',
				article: 'ВМ3223',
				count: '2232',
				minCount: '222',
				reserve: '222',
				purchasePrice: '22 222,22 грн',
				price: '2 222,22 грн',
				model: 'Mercedes Sprinter'
			},
			{
				name: '3Ocь Fondex, Бренд',
				article: 'ВМ3223',
				count: '2232',
				minCount: '222',
				reserve: '222',
				purchasePrice: '22 222,22 грн',
				price: '2 222,22 грн',
				model: 'Mercedes Sprinter'
			},
			{
				name: '4Ocь Fondex, Бренд',
				article: 'ВМ3223',
				count: '2232',
				minCount: '222',
				reserve: '222',
				purchasePrice: '22 222,22 грн',
				price: '2 222,22 грн',
				model: 'Mercedes Sprinter'
			},
			{
				name: '5Ocь Fondex, Бренд',
				article: 'ВМ3223',
				count: '2232',
				minCount: '222',
				reserve: '222',
				purchasePrice: '22 222,22 грн',
				price: '2 222,22 грн',
				model: 'Mercedes Sprinter'
			},
		],
		classes: {
			purchasePrice: 'text-nowrap',
			price: 'text-nowrap',
		}

	}
	$scope.add = function(){
		alert('add sparesCtrl');
	}
	$scope.del = function(){
		var oldSpares = $scope.spares.data;
		var oldSparesCheck = $scope.spares.check;
		$scope.spares.data = [];
		$scope.spares.check = [];
		angular.forEach(oldSpares, function(item, i){
			if (!oldSparesCheck[i]) {
				$scope.spares.data.push(item);
				$scope.spares.check.push(oldSparesCheck[i]);
			}
		});
		return $scope.spares.data; 
	};
}]);