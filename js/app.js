$(function() {

    const worksSlider = $('[data-slider="slick"]')

    /* FILTER 
================================ */

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function() {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    /* Modal
    ================================ */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");


    modalCall.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-skroll no-scroll');

        worksSlider.slick('setPosition');
    });

    modalClose.on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');
        modalParent.removeClass('show');
        $("body").removeClass('no-skroll no-scroll');
    });

    $(".modal").on("click", function(event) {
        $(this).removeClass('show');
        $("body").removeClass('no-skroll no-scroll');
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });

    /* Slider: https://kenwheeler.github.io/slick/ ===
    === === === === === === === === === == */

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });
    $(".slickPrev").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick("slickPrev");
    });
    $(".slickNext").on("click", function(event) {
        event.preventDefault();

        let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick("slickNext");
    });

    /*Mobile nav
    ==============*/
    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");

    });
});

/*ScrollTo About*/
function ScrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
var footer = document.querySelector('#footer')
var button = document.querySelector('.nav__linkScroll');
button.addEventListener('click', () => {
    ScrollTo(footer);
})
var button = document.querySelector('.footer__nav-linkScroll');

button.addEventListener('click', () => {
    ScrollTo(footer);
})

/*Skroll to Works */
function ScrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}
var workSkroll = document.querySelector('#toSkrollWorks')
var a = document.querySelector('.nav__linkWork');
a.addEventListener('click', () => {
    ScrollTo(workSkroll);
})