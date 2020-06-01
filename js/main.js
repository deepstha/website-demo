$(document).ready(function () {
        //Parallax 
        var rellax = new Rellax('.rellax');
        //Parallax 
        function t(t, e) {
            t.each(function () {
                var t = $(this),
                    i = "animated " + t.data("animation-" + e);
                t.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                    t.removeClass(i);
                });
            });
        }

        var i = $("#banner");
        $("#banner").owlCarousel({
            items: 1, 
            loop: true,
            dots: true, 
            nav: false, 
            animateIn: "fadeIn", 
            autoplay: !0 
        }),

        i.on("change.owl.carousel", function (e) {
            t($(".owl-item", i).eq(e.item.index).find("[data-animation-out]"), "out");
        }),
        i.on("changed.owl.carousel", function (e) {
            t($(".owl-item", i).eq(e.item.index).find("[data-animation-in]"), "in");
        }),

        $(window).scroll(function () {
            $(this).scrollTop() > 1 ? $(".header").addClass("sticky-header").fadeTo(400, 1) : $(".header").removeClass("sticky-header");
        }),

        $(document).on("scroll", e),
            $('a.collapsed[href^="#"]').on("click", function (t) {
                t.preventDefault(),
                $(document).off("scroll"),
                $("a").each(function () {
                    $(this).removeClass("active");
                }),
                $(this).addClass("active");
                
            });

        (jQuery);
});
