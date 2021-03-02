 $(document).ready(function () {
     "use strict";



     //common
     //햄버거 메뉴 온오프
     $(".ham").click(function (ev) {
         ev.preventDefault();
         $(this).toggleClass("active");
         $(".header").toggleClass("visible");
         $("#fp-nav").toggleClass("nav_visible");
     });
     var gnbbg = $(".gnb_bg").click(function () {
         $(".header").removeClass("visible");
         $(".ham").removeClass("active");
         $("#fp-nav").toggleClass("nav_visible");
     });
     
     



     //main
     //main-slide
    var fullpage = $("#fullpage").fullpage({
         css3: true,
         autoScroll: true,
         scrollHorizontally: true,
         navigation: true,
         autoScrolling: true,
         navigationTooltips: ["HOME", "STORY", "CAST", "PHOTO", "VIDEOS"],
         anchors: ['HOME', 'STORY', 'CAST', 'PHOTO', 'VIDEOS'],
         showActiveTooltip: true,
         scrollOverflow: true,
         onLeave: function (origin, destination, direction) {
             var leavingSection = this;
             if (destination.index == 0) {
                 $(".header_inner,#fp-nav").removeClass("h_right")
             } else if (destination.index == 1) {
                 $(".s2").find(".ani").addClass("animated")
                 $(".header_inner,#fp-nav").removeClass("h_right")
             } else if (destination.index == 2) {
                 $(".s3").find(".ani").addClass("animated")
                 $(".header_inner,#fp-nav").removeClass("h_right")
             } else if (destination.index == 3) {
                 $(".s4").find(".ani").addClass("animated");

                 $(".header_inner,#fp-nav").addClass("h_right")
             } else if (destination.index == 4) {
                 $(".s5").find(".ani").addClass("animated")
                 $(".header_inner,#fp-nav").addClass("h_right")
             }
         },
     });


     //s2 story
     $('.bestPhoto').slick({
         autoplay: true,
         autoplaySpeed: 3000,
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         dots: false,

     });


     //s3 cast
     var menu = ['<span>Robert Pattinson</span>', '<span>Zoe Kravitz</span>', '<span>Andy Serkis</span>', '<span>Colin Farrell</span>', '<span>Jeffrey Wright</span>', '<span>Paul Dano</span>']
     $('.cast').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: true,
         dots: true,
         customPaging: function (slick, index) {
             return '<a>' + (menu[index]) + '</a>';
         },

     });


     //s4 gallery

     $('.gallery').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dots: false,
         asNavFor: '.gallery_thumb',
         swipe: false
     });

     $('.gallery_thumb').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         arrows: true,
         dots: false,
         asNavFor: '.gallery',
         focusOnSelect: true,
         responsive: [
             {
                 breakpoint: 769,
                 settings: {
                     slidesToShow: 3,
                 }
            },
        ]
     });


     $(".gallery .gl_m >img").click(function () {
         var $src = $(this).attr("src");
         $(".show").show();
         $(".img-show img").attr("src", $src);
     });

     $("span, .overlay").click(function () {
         $(".show").hide();
     });


 $('.popup-youtube').magnificPopup({
 disableOn: 700,
 type: 'iframe',
 mainClass: 'mfp-fade',
 removalDelay: 160,
 preloader: false,
 fixedContentPos: "auto",
 closeBtnInside: false
 });

 });
