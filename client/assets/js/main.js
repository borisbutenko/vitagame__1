(function($) {

    $(function() {

        /**
         * Init slider on main-page
         */
        var sliderMain = new Swiper('.slider-main', {
            pagination          : '.slider-main__pagination',
            nextButton          : '.slider-main__next',
            prevButton          : '.slider-main__prev',
            slidesPerView       : 1,
            paginationClickable : true,
            loop                : true,
            autoplay            : 4000,
            effect              : 'fade'
        });

        /**
         * Init gallery on main-page
         */
        var sliderGallery = new Swiper('.slider-gallery', {
            slidesPerView       : 4,
            paginationClickable : true,
            loop                : true,
            spaceBetween: 30,
            autoplay            : 6000
        });

        /**
         * Init select2 for search form
         */
        $(".select__search").select2({ placeholder: 'Select a solution' });

        /**
         *  Scroll to top button
         */
        (function() {
            var btn$ = $('.scroll-to-top');

            btn$.on('click', function() {
                $('html, body').animate( { scrollTop: 0 }, 1000);
            });

            window.onscroll = function() {

                if ( $('body').scrollTop() > 200 ) btn$.addClass('scroll-to-top-show');
                else btn$.removeClass('scroll-to-top-show');
            };
        })();
    });

})(jQuery);
