'use strict';
$(document).ready(function(){
	$('input, textarea').placeholder();
	$('img').svgmagic();
	$('img[usemap]').rwdImageMaps();
	$('#intro').height($(window).height());
	$(window).resize(function(){
		$('#intro').height($(window).height());
	});
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
	$('map').on('click', 'area', function(e){
		e.preventDefault();
		console.log('clicked');
		var $this = $(this);
		console.log($this);
		var $link = $this.attr('href');

		if (!$this.hasClass('is-active')){
			$this.siblings().removeClass('is-active');
			$this.addClass('is-active');
			$($link).siblings().removeClass('is-active').end().addClass('is-active');
		}
	});
	$('#form-demo').submit(function(e){
		e.preventDefault();
		$('input').each(function(){
			var $this = $(this);
			var $required = $('input[required]');
			var $input = $this.val();
			if($required && $input === ''){
				$this.parent('div').removeClass('has-success').addClass('has-error');
			} else {
				$this.parent('div').removeClass('has-error').addClass('has-success');
			}
		});

		$.ajax({
			type:$(this).attr('method'),
			url:$(this).attr('action'),
			data:$(this).serialize(),
			dataType: 'json'
		}).done(function(data){
			if (!(data.success)){
				if (data.errors.name){
					$('#name').parent().addClass('has-error');
					$('#name').attr('placeholder', data.errors.name);
				} else if (data.errors.email){
					$('#email').parent().addClass('has-error');
					$('#email').attr('placeholder', data.errors.email);
				} else if (data.errors.company){
					$('#company').parent().addClass('has-error');
					$('#company').attr('placeholder', data.errors.company);
				} else if (data.errors.message){
					$('#message').parent().addClass('has-error');
					$('#message').attr('placeholder', data.errors.message);
				}
			}
			$('.message').html(data.msg);
			$(this).reset();
		}).fail(function(error){
			$('.message').html(data.msg);
			$(this).reset();
		});
	});
});