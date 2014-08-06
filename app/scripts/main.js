'use strict';
$(document).ready(function(){
	$('input, textarea').placeholder();
	$('img').svgmagic();
	$('img[usemap]').rwdImageMaps();
	$('#intro').height($(window).height());
	$(window).resize(function(){
		$('#intro').height($(window).height());
	});

	// $('.scroll-jump').on('click', function(e){
	// 	e.preventDefault();
	// 	$('html,body').animate({scrollTop: $('#marketing').offset().top},800);
	// });
	// $('.intro-message').on('click', 'a.btn-secondary', function(e){
	// 	e.preventDefault();
	// 	$('html,body').animate({scrollTop: $('#features').offset().top},800);
	// });
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	      var	target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 800);
	        return false;
	      }
	    }
	  });
	// $('.features-anchor').on('click', 'a', function(e){
	// 	e.preventDefault();
	// 	var $this = $(this);
	// 	var $link = $this.attr('href');


	// 	if(!$this.hasClass('is-active')){
	// 		// $('.feat-description').removeClass('is-active');
	// 		// $this.addClass('is-active');

	// 		$this.addClass('is-active');
	// 		$this.addClass('is-active').parent().siblings().find('a').removeClass('is-active');
	// 		$($link).siblings().removeClass('is-active');
	// 		$($link).fadeIn().addClass('is-active');
	// 	}
	// });

	$('map').on('click', 'area', function(e){
		e.preventDefault();
		console.log('clicked');
			var $this = $(this);
			console.log($this);
			var $link = $this.attr('href');

			if (!$this.hasClass('is-active')){
				// remove is-active from all sibling links
				// add it to link that was clicked
				$this.siblings().removeClass('is-active');
				$this.addClass('is-active');
				// console.log($($link).siblings());
				$($link).siblings().removeClass('is-active').end().addClass('is-active');
				// $($link).fadeIn().addClass('is-active');

			}
			// if(!$this.hasClass('is-active')){
				// $('.feat-description').removeClass('is-active');
			// 	// $this.addClass('is-active');

			// 	$this.addClass('is-active');
			// 	$this.addClass('is-active').parent().siblings().find('a').removeClass('is-active');
			// 	$($link).siblings().removeClass('is-active');
			// 	$($link).fadeIn().addClass('is-active');
			// }
	});
});