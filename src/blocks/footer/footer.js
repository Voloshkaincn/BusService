$( document ).ready(function(){
	
	$('.add-footer-tab').click(function(){
		$('.footer__tab').removeClass('active');
		$('.footer__tabs').append('<div class="footer__tab active"><div class="tab__close">x</div><span class="menu-icon icon-home"></span><span class="menu-text">Главная</span></div>');
			$('.tab__close').click(function(){
				if ($('.footer__tab').length > 1){
					$(this).parent('.footer__tab').remove();
				};
			});
	});
});