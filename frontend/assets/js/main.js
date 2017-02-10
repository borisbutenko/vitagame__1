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

    });

})(jQuery);
