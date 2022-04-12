/*---------------------------------------------
Template name :  Penten
Version       :  1.0
Author        :  Jit Banik

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".

[Table of Content]

    01: Main Menu
    02: Off Canvas Menu
    03: Sticky Nav
    04: Menu Responsive in Small Device
    05: Background Image
    06: PopUp Video Play
    07: Check Data
    08: Owl Carousel
    09: Changing svg color 
    10: Google map
    11: Preloader 
    12: Contact Form
    13: Back to top button
    14: Tabs
    15: Scrollspy
----------------------------------------------*/

(function ($) {
  "use strict";

  /*===================
    01: Main Menu
    =====================*/
  $('ul.nav li a[href="#"]').on("click", function (event) {
    event.preventDefault();
  });

  /* Menu Button Active */
  $("#menu-button").on("click", function () {
    $("#offcanvas_menu, .offcanvas-overlay").addClass("opened");
  });

  $(".offcanvas-close, .offcanvas-overlay").on("click", function () {
    $("#offcanvas_menu, .offcanvas-overlay").removeClass("opened");
  });

  //Toggle button Active
  $(".toggle_button").on("click", function () {
    $(".offcanvas_side_menu, .offcanvas-overlay").addClass("opened");
  });

  $(".side_menu-close, .offcanvas-overlay").on("click", function () {
    $(".offcanvas_side_menu, .offcanvas-overlay").removeClass("opened");
  });

  /* Parent li add class */
  $(".header-main .main-menu")
    .find("ul li")
    .parents(".main-menu ul li")
    .addClass("has-sub-item");
  $(".header-main .main-menu > ul > li").removeClass("has-sub-item");

  /* Main Menu Parent li add svg */
  $(".header.main .main-menu > ul.nav > li").append(
    '<img src="assets/img/icon/a-bg.svg" class="svg a-bg a-bg1" alt="">'
  );
  $(".header.conference .main-menu > ul.nav > li").append(
    '<img src="assets/img/icon/a-bg2.svg" class="svg a-bg a-bg2" alt="">'
  );

  /*===================
    02: Off Canvas Menu
    =====================*/
  $(".panel .offcanvas-main-menu")
    .find("ul li")
    .parents(".offcanvas-main-menu ul li")
    .addClass("has-sub-menu");
  $(".panel .offcanvas-main-menu")
    .find(".has-sub-menu")
    .prepend('<span class="submenu-button"></span>');

  $(".offcanvas-main-menu")
    .find(".submenu-button")
    .on("click", function (event) {
      $(this).toggleClass("sub-menu-oppened");
      if ($(this).siblings("ul").hasClass("open")) {
        $(this).siblings("ul").removeClass("open").slideUp("200");
      } else {
        $(this).siblings("ul").addClass("open").slideDown("200");
      }
    });

  /*========================
    03: Sticky Nav
    ==========================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 200) {
      $(".main-header.love-sticky").removeClass(
        "sticky fixed-top fadeInDown animated"
      );
    } else {
      $(".main-header.love-sticky").addClass(
        "sticky fixed-top fadeInDown animated"
      );
    }
  });

  /*==================================
    04: Menu Responsive in Small Device
    ====================================*/
  function subMenu() {
    var $subMain = $(".main-menu .nav > li > ul");
    var $subSub = $(".main-menu .nav > li > ul ul");

    $subMain.each(function () {
      if ($(window).width() > 991) {
        if ($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({ left: "auto", right: "0" });
        }
      }
    });

    $subSub.each(function () {
      if ($(window).width() > 991) {
        if ($(this).offset().left + $(this).width() > $(window).width()) {
          $(this).css({ left: "auto", right: "100%" });
        }
      }
    });
  }
  subMenu();

  $(window).resize(subMenu);

  /*========================
    05: Background Image
    ==========================*/
  var $bgImg = $("[data-bg-img]");
  $bgImg
    .css("background-image", function () {
      return 'url("' + $(this).data("bg-img") + '")';
    })
    .removeAttr("data-bg-img")
    .addClass("bg-img");

  /*========================
    06: PopUp Video Play
    ==========================*/
  $(".mfp-iframe, .video-preview").magnificPopup({
    type: "video",
  });
  $(".popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /*==================================
    07: Check Data
    ====================================*/
  var checkData = function (data, value) {
    return typeof data === "undefined" ? value : data;
  };

  /*==================================
    08: Owl Carousel
    ====================================*/
  var $owlCarousel = $(".owl-carousel");
  $owlCarousel.each(function () {
    var $t = $(this);

    $t.owlCarousel({
      items: checkData($t.data("owl-items"), 1),
      margin: checkData($t.data("owl-margin"), 0),
      loop: checkData($t.data("owl-loop"), true),
      smartSpeed: 450,
      autoplay: checkData($t.data("owl-autoplay"), true),
      autoplayTimeout: checkData($t.data("owl-speed"), 5000),
      center: checkData($t.data("owl-center"), false),
      animateIn: checkData($t.data("owl-animate-in"), false),
      animateOut: checkData($t.data("owl-animate-out"), false),
      nav: checkData($t.data("owl-nav"), false),
      navText: [
        '<img src="assets/img/svg/angle-left.svg" alt="" class="svg"> ',
        '<img src="assets/img/svg/angle-right.svg" alt="" class="svg"> ',
      ],
      dots: checkData($t.data("owl-dots"), false),
      stagePadding: checkData($t.data("owl-stage-padding"), false),
      autoWidth: checkData($t.data("owl-auto-width"), false),
      responsive: checkData($t.data("owl-responsive"), {}),
    });
  });

  /*==================================
    09: Changing svg color 
    ====================================*/
  jQuery("img.svg").each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr("id");
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");

    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find("svg");

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a");

        // Check if the viewport is set, else we gonna set it if we can.
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          );
        }

        // Replace image with new SVG
        $img.replaceWith($svg);
      },
      "xml"
    );
  });

  /*==================================
    10: Google map 
    ====================================*/
  var $map = $('[data-trigger="map"]'),
    $mapOps;

  if ($map.length) {
    // Map Options
    $mapOps = $map.data("map-options");

    // Map Initialization
    window.initMap = function () {
      $map.css("min-height", "773px");
      $map.each(function () {
        var $t = $(this),
          map,
          lat,
          lng,
          zoom;

        $mapOps = $t.data("map-options");
        lat = parseFloat($mapOps.latitude, 10);
        lng = parseFloat($mapOps.longitude, 10);
        zoom = parseFloat($mapOps.zoom, 10);

        map = new google.maps.Map($t[0], {
          center: { lat: lat, lng: lng },
          zoom: zoom,
          scrollwheel: false,
          disableDefaultUI: true,
          zoomControl: true,
          styles: [
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e9e9e9",
                },
                {
                  lightness: 17,
                },
              ],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f5f5",
                },
                {
                  lightness: 20,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 17,
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 29,
                },
                {
                  weight: 0.2,
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 18,
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "geometry",
              stylers: [
                {
                  color: "#ffffff",
                },
                {
                  lightness: 16,
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f5f5",
                },
                {
                  lightness: 21,
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dedede",
                },
                {
                  lightness: 21,
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "on",
                },
                {
                  color: "#ffffff",
                },
                {
                  lightness: 16,
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  saturation: 36,
                },
                {
                  color: "#333333",
                },
                {
                  lightness: 40,
                },
              ],
            },
            {
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f2f2f2",
                },
                {
                  lightness: 19,
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#fefefe",
                },
                {
                  lightness: 20,
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#fefefe",
                },
                {
                  lightness: 17,
                },
                {
                  weight: 1.2,
                },
              ],
            },
          ],
        });

        map = new google.maps.Marker({
          position: { lat: lat, lng: lng },
          map: map,
          animation: google.maps.Animation.DROP,
          draggable: false,
        });
      });
    };
    initMap();
  }

  /*==================================
    11: Preloader 
    ====================================*/
  $(window).on("load", function () {
    $(".preloader").fadeOut(1000);
  });

  /*==================================
    12: Contact Form
    ====================================*/
  $(".contact-form").on("submit", function (e) {
    e.preventDefault();

    var $el = $(this);

    $.post($el.attr("action"), $el.serialize(), function (res) {
      res = $.parseJSON(res);
      $el
        .parent(".contact-form-wrapper")
        .find(".form-response")
        .html("<span>" + res[1] + "</span>");
    });
  });

  /*============================================
    13: Back to top button
    ==============================================*/
  var $backToTopBtn = $(".back-to-top");

  if ($backToTopBtn.length) {
    var scrollTrigger = 400, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $backToTopBtn.addClass("show");
        } else {
          $backToTopBtn.removeClass("show");
        }
      };

    backToTop();

    $(window).on("scroll", function () {
      backToTop();
    });

    $backToTopBtn.on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }

  /*==================================
    14: Tabs
    ====================================*/
  var tabSelect = $("[data-tab-select]");
  var tab = $("[data-tab]");
  tabSelect.each(function () {
    var tabText = $(this).data("tab-select");
    $(this).on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      tab.each(function () {
        if (tabText === $(this).data("tab")) {
          $(this).fadeIn(1000).siblings().hide();
          $(this).addClass("active").siblings().removeClass("active");
        }
      });
    });
    if ($(this).hasClass("active")) {
      tab.each(function () {
        if (tabText === $(this).data("tab")) {
          $(this).addClass("active");
        }
        if ($(this).hasClass("active")) {
          $(this).show();
        }
      });
    }
  });

  /*========================
    15: Scrollspy
    ==========================*/
  $(window).bind("scroll", function () {
    var currentTop = $(window).scrollTop();
    var elems = $(".scrollspy");
    elems.each(function (index) {
      var elemTop = $(this).offset().top - 10;

      var elemBottom = elemTop + $(this).outerHeight();
      if (currentTop >= elemTop && currentTop <= elemBottom) {
        var id = $(this).attr("id");
        var navElem = $('a[href="#' + id + '"]');
        navElem
          .parent()
          .addClass("current-menu-parent")
          .siblings()
          .removeClass("current-menu-parent");
      }
    });
  });
})(jQuery);
