// $( document ).ready(function(){
//     $('.order-options-date').datetimepicker({
//     	//debug: true,
//     	format: 'hh:mm, DD.MM.YYYY',
//     	icons: {
//     		up: 'icon-chevron-up',
//             down: 'icon-chevron-down',
//             previous: 'icon-chevron-left2',
//             next: 'icon-chevron-right',
//             clear: 'icon-cancel-circle',
//             time: 'icon-clock',
//             date: 'icon-calendar2'
//     	},
//     	locale: "ru",
//         showClear: true,
//         toolbarPlacement: 'top',

//     });
//     $("#order-options-date-from").on("dp.change", function (e) {
//         $('#order-options-date-to').data("DateTimePicker").minDate(e.date);
//     });
//     $("#order-options-date-to").on("dp.change", function (e) {
//         $('#order-options-date-from').data("DateTimePicker").maxDate(e.date);
//     });
// });