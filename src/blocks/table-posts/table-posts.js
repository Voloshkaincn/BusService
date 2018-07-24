$( document ).ready(function(){
	$('.table-posts__toggle').on('click', function(){
		$(this).toggleClass('open');
		$('.table-posts table').toggle();
	});
});