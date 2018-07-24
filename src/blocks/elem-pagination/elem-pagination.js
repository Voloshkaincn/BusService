$(document).ready(function(){
	$('.pagination__number').on('click', function(){
		$('.pagination__number').removeClass('active');
		$(this).addClass('active');
	});
});