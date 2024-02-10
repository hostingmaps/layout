/* =================================
Template Name : Nexthost
Description   : Web Hosting and Domain HTML5 Template
Author        : Youtoview
Version       : 1.1  
==================================== */


!(function ($) {
    "use strict";

    function t() {
        $(window).width() < 992 ? $(".nav-wrapper .nav-wrap-inner").hide() : $(".nav-wrapper .nav-wrap-inner").show();
    }

    function e() {
        var t = $(".nav-wrapper .nav > li > ul"),
            e = $(".nav-wrapper .nav > li > ul ul");
        t.each(function () {
            $(window).width() > 991 && $(this).offset().left + $(this).width() > $(window).width() && $(this).css({ left: "auto", right: "0" });
        }),
            e.each(function () {
                $(window).width() > 991 && $(this).offset().left + $(this).width() > $(window).width() && $(this).css({ left: "auto", right: "100%" });
            });
    }


    // menumaker
    $('ul.nav li a[href="#"]').on("click", function (a) {
        a.preventDefault();
    }),

    $(".nav-wrapper").menumaker({ title: "<span></span>", format: "multitoggle" }),

    //menu-button
    $($(window)).on("scroll", function () {
        $("ul.nav").hasClass("open") || $("#menu-button").removeClass("menu-opened");
    }),

    $(window).on("resize", function () {
        t();
    }),
    t(),
    e(),
    $(window).resize(e),


    // sticky nav
    $(window).on("scroll", function () {
        $(window).scrollTop() < 180 ? $(".header-main.set-sticky").removeClass("sticky fixed-top fadeInDown animated") : $(".header-main.set-sticky").addClass("sticky fixed-top fadeInDown animated");
    }),

    // background-imag    
    $("[data-bg-img]")
        .css("background-image", function () {
            return 'url("' + $(this).data("bg-img") + '")';
        }).removeAttr("data-bg-img").addClass("bg-img");


    var o = function (a, t) {
        return void 0 === a ? t : a;
    };

    // back to top
    var l = $(".back-to-top");
    if (l.length) {
        var r = function () {
            $(window).scrollTop() > 400 ? l.addClass("show") : l.removeClass("show");
        };
        r(),
            $(window).on("scroll", function () {
                r();
            }),
            l.on("click", function (t) {
                t.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 700);
            });
    }

    // offcanvas
    $(".offcanvas-trigger").on("click", function () {
        $(".offcanvas-wrapper, .offcanvas-overlay").addClass("show");
    }),
        $(".offcanvas-overlay, .offcanvas-close").on("click", function () {
            $(".offcanvas-wrapper, .offcanvas-overlay").removeClass("show");
        }),


    // owl-carousel
    $(".owl-carousel").each(function () {
        var t = $(this);
        t.owlCarousel({
            items: o(t.data("owl-items"), 1),
            margin: o(t.data("owl-margin"), 0),
            loop: o(t.data("owl-loop"), !0),
            smartSpeed: 450,
            autoplay: o(t.data("owl-autoplay"), !0),
            autoplayTimeout: o(t.data("owl-speed"), 5e3),
            center: o(t.data("owl-center"), !1),
            animateIn: o(t.data("owl-animate-in"), !1),
            animateOut: o(t.data("owl-animate-out"), !1),
            nav: o(t.data("owl-nav"), !1),
            navText: ['<i class="far fa-arrow-left"></i>','<i class="far fa-arrow-right"></i>'],
            dots: o(t.data("owl-dots"), !1),
            stagePadding: o(t.data("owl-stage-padding"), !1),
            autoWidth: o(t.data("owl-auto-width"), !1),
            responsive: o(t.data("owl-responsive"), {}),
        });
    }),


    // magnific popup
    $(".video-btn").magnificPopup({ type: "video" }),

    $(".gallery-link").magnificPopup({ gallery: { enabled: !0 }, type: "image" }),

    // preloader
    $(window).on("load", function () {
        $(".preloader").fadeOut(1e3);
    }),

    // counter
    $(".counter").counterUp({ delay: 100, time: 2e3 }),


    // typed
    $(function () {
        $(".typed").typed({ strings: ["your website", "your business"], typeSpeed: 30, startDelay: 1200, backSpeed: 20, backDelay: 500, loop: !0, loopCount: 5 }),
        $(".typed2").typed({ strings: ["web host", "web cloud", "VPS host"], typeSpeed: 30, startDelay: 1200, backSpeed: 20, backDelay: 500, loop: !0, loopCount: 5 });
    }),

    // search-toggle
    $(".search-toggle-btn").on("click", function () {
        $(".full-page-search").addClass("show");
    }),
    $(".search-close-btn").on("click", function () {
        $(".full-page-search").removeClass("show");
    }),

    // service point map img
    $(".service_point-map-img")
        .find(".l_info")
        .on("mouseenter", function () {
            $(".service_point-map-img").find(".l_info").removeClass("active"), $(this).addClass("active");
    });
    
    
    var d = $(".men-img"),
        c = $(".monitor-img, .men-img1, .men-img2"),
        f = $(".text-img, .men-img3"),
        m = $(".layer");
    m.mousemove(function (a) {
        var t = (1 * a.pageX) / 100,
            e = (1 * a.pageY) / 100;
        d.css({ transform: "translate3d(" + t + "px, " + e + "px,0)" });
    }),
    m.on("mousemove", function (a) {
        var t = (1 * a.pageX) / 200,
            e = (1 * a.pageY) / 200;
        c.css({ transform: "translate3d(" + t + "px, " + e + "px,0)" });
    }),
    m.mousemove(function (a) {
        var t = (-1 * a.pageX) / 150,
            e = (-1 * a.pageY) / 150;
        f.css({ transform: "translate3d(" + t + "px, " + e + "px,0)" });
    }),


    // data center map
    $(".data_center_location-map")
        .find(".l_info")
        .on("mouseenter", function () {
            $(".data_center_location-map").find(".l_info").removeClass("active"), $(this).addClass("active");
    });


    // copyright date
    var date = new Date().getFullYear();
    $('#date').html(date);


    // switcher
    var u = $(".filt-monthly"),
        w = $(".filt-yearly"),
        g = $(".switcher"),
        v = $(".monthly"),
        h = $(".yearly");
    u.on("click", function () {
        g.prop("checked", !1), u.addClass("toggler--is-active"), w.removeClass("toggler--is-active"), v.removeClass("hide"), p.addClass("hide");
    }),
        w.on("click", function () {
            g.prop("checked", !0), w.addClass("toggler--is-active"), u.removeClass("toggler--is-active"), v.addClass("hide"), p.removeClass("hide");
        }),
        g.on("click", function () {
            w.toggleClass("toggler--is-active"), u.toggleClass("toggler--is-active"), v.toggleClass("hide"), h.toggleClass("hide");
        });


        // countdown
        $('#countdown').countdown('2030/01/30', function (event) {
            $(this).html(event.strftime('' + '<div class="row">' + '<div class="col countdown-single">' + '<h2 class="mb-0">%-D</h2>' + '<h5 class="mb-0">Day%!d</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%H</h2>' + '<h5 class="mb-0">Hours</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%M</h2>' + '<h5 class="mb-0">Minutes</h5>' + '</div>' + '<div class="col countdown-single">' + '<h2 class="mb-0">%S</h2>' + '<h5 class="mb-0">Seconds</h5>' + '</div>' + '</div>'));
        }); 


        // cart quantity
        $('.add').click(function () {
            if ($(this).prev().val() < 10) {
            $(this).prev().val(+$(this).prev().val() + 1);
            }
        });
        $('.sub').click(function () {
            if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });


})(jQuery);
