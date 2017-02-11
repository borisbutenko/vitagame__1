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
         *  Select2
         */
        $('select').select2();

        /**
         *  Pagination for table-search
         */
        $('.table-search').paginate({
            previous: false,
            next: false,
            first: false,
            last: false,
            navigationClass : 'table-search__navigation',
            limit           : 10
        });

        $('[data-page]').on('click', function() {
            $('[data-page]').each(function() {
                $(this).parent().removeClass('active');
            });

            $(this).parent().addClass('active');
        });

        $('.pagination > li:first-child').addClass('active');

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

        /**
         *  InitMap
         */
        (function() {
            var center = {
                lat: 40.712784,
                lng: -74.005941
            };

            if ( !$('#contact-google-map').length ) return false;

            var map = new google.maps.Map(document.getElementById('contact-google-map'), {
                zoom: 12,
                center: center
            });

            var marker = new google.maps.Marker({
                position: center,
                map: map
            });

            var styles = [
                {
                    featureType: "all",
                    stylers: [
                        { hue: "#fdc716" },
                        { saturation: -80 }
                    ]
                },
                {
                    featureType: "road.arterial",
                    elementType: "geometry",
                    stylers: [
                        { hue: "#00ffee" },
                        { saturation: 50 }
                    ]
                },
                {
                    featureType: "water",
                    stylers: [
                        {
                            "color": "#fdc716"
                        }
                    ]
                },
                {
                    featureType: "poi.business",
                    elementType: "labels",
                    stylers: [
                        { visibility: "off" }
                    ]
                }
            ];

            map.setOptions({styles: styles});
        }());
    });

})(jQuery);
