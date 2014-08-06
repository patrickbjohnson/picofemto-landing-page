'use strict';
$(document).ready(function(){
	$('input, textarea').placeholder();
	$('img').svgmagic();
	$('.scroll-jump').on('click', function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop: $('#marketing').offset().top},800);
	});
	$('.features-anchor').on('click', 'a', function(e){
		e.preventDefault();
		var $this = $(this);
		var $link = $this.attr('href');


		if(!$this.hasClass('is-active')){
			// $('.feat-description').removeClass('is-active');
			// $this.addClass('is-active');

			$this.addClass('is-active');
			$this.addClass('is-active').parent().siblings().find('a').removeClass('is-active');
			$($link).siblings().removeClass('is-active');
			$($link).fadeIn().addClass('is-active');
		}
	});
});