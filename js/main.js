$(function() {

    $('.pictures a').on('click', function(e) {

        e.preventDefault();

        $('.overlay').fadeIn('fast');
        $('.gallery').fadeIn('fast');

    });

    $('.gallery .close').on('click', function(e) {

        e.preventDefault();
        $('.overlay').fadeOut('fast');
        $('.gallery').fadeOut('fast');

    });

    $('.overlay').on('click', function(e) {

        e.preventDefault();
        $('.overlay').fadeOut('fast');
        $('.popup').fadeOut('fast');

    });

    $('.pictures a').click(function() {
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });

    $('.show-password').on('click', function(e) {

        e.preventDefault();


        if ($(this).hasClass('active')) {

            $(this).removeClass('active');

            var text_val = $(this).parent().find('input:text').val();

            $(this).parent().find('input:text').hide();

            $(this).parent().find('input:password').val(text_val);

            $(this).parent().find('input:password').show();



        } else {

            $(this).addClass('active');

            var pw_val = $(this).parent().find('input:password').val();

            $(this).parent().find('input:password').hide();

            $(this).parent().find('input:text').val(pw_val);

            $(this).parent().find('input:text').show();

        }

    });

});