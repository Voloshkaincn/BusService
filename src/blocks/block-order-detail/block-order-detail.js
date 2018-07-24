$(document).ready(function(){
	$("#order-date-from").datetimepicker({
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
   	});
});