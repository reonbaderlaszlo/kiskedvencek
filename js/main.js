$(function(){
    
	$('.pictures a').on('click', function (e) {
		 
		e.preventDefault();

		$('.overlay').fadeIn('fast');
		$('.gallery').fadeIn('fast');

	});

	$('.gallery .close').on('click', function (e) {

		e.preventDefault();
		$('.overlay').fadeOut('fast');
		$('.gallery').fadeOut('fast');

	});

	$('.overlay').on('click', function (e) {

		e.preventDefault();
		$('.overlay').fadeOut('fast');
		$('.gallery').fadeOut('fast');

	});

	$('.pictures a').click(function(){
	    $('html, body').animate({
	        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	    }, 500);
	    return false;
	});

});
