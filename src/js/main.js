
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

