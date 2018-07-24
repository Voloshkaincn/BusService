serviseApp.controller('orderDetailCtrl', ["$scope", function($scope) {
	//scope
	$scope.orderDetails = [
		{
			check: false,
			id: 1,
			kind: 'Услуга',
			goods: 'Замена ремня грт2 ОТDI',
			article: 'RD202',
			brand: 'Ruville',
			count: '22',
			price: '22 222,22 грн',
			summ: '22 222,22 грн',
			cashbox: 'Услуги',
			post: 'Пост 1'
		},
		{
			check: false,
			id: 2,
			kind: 'Товар',
			goods: 'Некий товар с очень длинннннннннным названием и описанием, который не помещается в одну строчку',
			article: 'RD202',
			brand: 'БрендиссимоБарендиссимо',
			count: '2222',
			price: '3 222 222,22 грн',
			summ: '22 222,22 грн',
			cashbox: 'Услуги',
			post: 'Пост 3'
		},
		{
			check: false,
			id: 33,
			kind: 'Услуга',
			goods: 'Замена ремня грт2 ОТDI',
			article: 'RD202',
			brand: 'Ruville',
			count: '22',
			price: '22 222,22 грн',
			summ: '22 222,22 грн',
			cashbox: 'Услуги',
			post: 'Пост 1'
		},
		{
			check: false,
			id: 44,
			kind: 'Услуга',
			goods: 'Замена ремня грт2 ОТDI',
			article: 'RD202',
			brand: 'Ruville',
			count: '22',
			price: '22 222,22 грн',
			summ: '22 222,22 грн',
			cashbox: 'Услуги',
			post: 'Пост 1'
		},
		{
			check: false,
			id: 55,
			kind: 'Услуга',
			goods: 'Замена ремня грт2 ОТDI',
			article: 'RD202',
			brand: 'Ruville',
			count: '22',
			price: '22 222,22 грн',
			summ: '',
			cashbox: 'Услуги',
			post: 'Пост 1'
		},
		{
			check: false,
			id: 66,
			kind: 'Услуга',
			goods: 'Замена ремня грт2 ОТDI',
			article: 'RD202',
			brand: 'Ruville',
			count: '22',
			price: '22 222,22 грн',
			summ: '',
			cashbox: 'Услуги',
			post: 'Пост 1'
		}
	];

	//calendar activation
	var orderDateFrom = angular.element('#orderDateFrom');
	var orderDateSettings = {
        //debug: true,
        format: 'DD.MM.YYYY',
        icons: {
            up: 'icon-chevron-up',
            down: 'icon-chevron-down',
            previous: 'icon-chevron-left2',
            next: 'icon-chevron-right',
            clear: 'icon-cancel-circle',
        },
        locale: "ru",
        showClear: true,
        toolbarPlacement: 'top',
        defaultDate: new Date()
    };
    orderDateFrom.datetimepicker(orderDateSettings);

    //delete table row
	$scope.del = function(){
		var oldOrderDetails = $scope.orderDetails;
		$scope.orderDetails = [];
		angular.forEach(oldOrderDetails, function(item){
			if (!item.check) {
				$scope.orderDetails.push(item);
			}
		});
		return $scope.orderDetails;
	};

	//sets the check box in all the rows of the table
	$scope.allCheck = function(){
		var tagleChack = $scope.toggleCheck;
		angular.forEach($scope.orderDetails, function(item){
			item.check = tagleChack;
		});
	};
	
}]);