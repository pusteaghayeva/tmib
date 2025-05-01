
// search
const inputSearch = document.querySelector('.input-search');

inputSearch.addEventListener('click', () => {
    inputSearch.classList.add('expanded');
});

inputSearch.addEventListener('blur', () => {
    inputSearch.classList.remove('expanded');
});



jQuery(document).ready(function ($) {
    var $owl = $('.owl-carousel');
    $owl.children().each(function (index) {
        jQuery(this).attr('data-position', index);
    });

    $owl.owlCarousel({
        center: false,
        nav: true,
        loop: true,
        items: 5,
        navText: ["<i class='fa arrow-circle-left'><</i>", "<i class='fa arrow-right'>></i>"],
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $(document).on('click', '.item', function () {
        $owl.trigger('to.owl.carousel', $(this).data('position'));
    });
});

// back to top

//Scroll back to top

(function ($) {
    "use strict";

    $(document).ready(function () {
        "use strict";

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


    });

})(jQuery);

// activity
jQuery(document).ready(($) => {
    $('.as-accordion-head').click(function () {
        $(this).find('.as-accordion-close').toggleClass('open');
        $(this).next('.as-accordion-collapse').slideToggle('fast', () => {
            // Do something maybe .. 
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const moreBtn = document.querySelector('.activity-more');
    const lessBtn = document.querySelector('.activity-less');
    const modalBodyText = document.querySelector('.activity-modal-body-title');

    // Əvvəlcə "Daha az" gizlədilir
    lessBtn.style.display = 'none';

    moreBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modalBodyText.style.height = 'auto';
        moreBtn.style.display = 'none';
        lessBtn.style.display = 'inline-flex';
    });

    lessBtn.addEventListener('click', function (e) {
        e.preventDefault();
        modalBodyText.style.height = '50px';
        lessBtn.style.display = 'none';
        moreBtn.style.display = 'inline-flex';
    });
});