/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';
  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');
  });

    // Add smooth scrolling on all links inside the navbar
    $("#main-nav a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 80
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          // window.location.hash = hash;
        });
      }  // End if
    });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }
  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 100 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: [ "Designer", "Developer", "Software Engineer", "Data Analyst"],
      typeSpeed: 100,
      loop: true,
    });
  });

  
  // ========================================================================= //
  //  PROGRESS BAR
  // ========================================================================= //
    window.onscroll = function () { myFunction() };

    function myFunction() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    }


  // ========================================================================= //
  //  CUSTOM CURSOR
  // ========================================================================= //
    var kursorx = new kursor({
      type: 1,
      removeDefaultCursor: true
    })


    // ========================================================================= //
  //  GEARS
  // ========================================================================= //
    $(window).scroll(function () {
      var theta = $(window).scrollTop() / 300 % Math.PI;
      $('.leftgear').css({ transform: 'rotate(' + theta + 'rad)' });
      $('.rightgear').css({ transform: 'rotate(-' + theta + 'rad)' });
    });

  
});
