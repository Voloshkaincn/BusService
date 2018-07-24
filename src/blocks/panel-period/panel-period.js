serviseApp.controller("periodCtrl", ["$scope", function($scope){
    var inputDateFrom = angular.element(document.querySelector("#periodFrom"));
    var inputDateTo = angular.element(document.querySelector("#periodTo"));
    var dateSettings = {
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
    };
    inputDateFrom.datetimepicker(dateSettings);
    inputDateTo.datetimepicker(dateSettings);

    inputDateFrom.on("dp.change", function (e) {
        inputDateTo.data("DateTimePicker").minDate(e.date);
    });
    inputDateTo.on("dp.change", function (e) {
        inputDateFrom.data("DateTimePicker").maxDate(e.date);
    });
}]);