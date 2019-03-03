(function($) {
    "use strict";
    $(window).on("load", function() { // makes sure the whole site is loaded
      //preloader
      $("#status").fadeOut(); // will first fade out the loading animation
      $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.
  
      // //masonry
      // $('.grid').masonry({
      //   itemSelector: '.grid-item'
  
      // });
    });
  

    $(document).ready(function(){
  
      //active menu
      $(document).on("scroll", onScroll);
  
      $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
  
        $('a').each(function () {
          $(this).removeClass('active');
        })
        $(this).addClass('active');
  
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        });
      });
  
  
      //scroll js
      smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
        selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function ( toggle, anchor ) {} // Function to run after scrolling
      });
  
      //menu
      var bodyEl = document.body,
      content = document.querySelector( '.content-wrap' ),
      openbtn = document.getElementById( 'open-button' ),
      closebtn = document.getElementById( 'close-button' ),
      isOpen = false;
  
      function inits() {
        initEvents();
      }
  
      function initEvents() {
        openbtn.addEventListener( 'click', toggleMenu );
        if( closebtn ) {
          closebtn.addEventListener( 'click', toggleMenu );
        }
  
        // close the menu element if the target it´s not the menu element or one of its descendants..
        if(content){
          content.addEventListener( 'click', function(ev) {
          var target = ev.target;
          if( isOpen && target !== openbtn ) {
            toggleMenu();
          }
        })};
      }
  
      function toggleMenu() {
        if( isOpen ) {
          classie.remove( bodyEl, 'show-menu' );
        }
        else {
          classie.add( bodyEl, 'show-menu' );
        }
        isOpen = !isOpen;
      }
  
      inits();
  
  
      //typed js 
      $(".typed").typed({
          strings: ["Electrical Engineer", "Data Scientist", "Lifelong Student"],
          typeSpeed: 50,
          backDelay: 400,
          loop: true,  // loop
          smartBackspace: true,
      });
  
      // //owl carousel
      // $('.owl-carousel').owlCarousel({
      //   autoPlay: 3000, //Set AutoPlay to 3 seconds
  
      //   items : 1,
      //   itemsDesktop : [1199,1],
      //   itemsDesktopSmall : [979,1],
      //   itemsTablet : [768,1],
      //   itemsMobile : [479,1],
  
      //   // CSS Styles
      //   baseClass : "owl-carousel",
      //   theme : "owl-theme"
      // });
  
      // $('.owl-carousel2').owlCarousel({
      //   autoPlay: 3000, //Set AutoPlay to 3 seconds
  
      //   items : 1,
      //   itemsDesktop : [1199,1],
      //   itemsDesktopSmall : [979,1],
      //   itemsTablet : [768,1],
      //   itemsMobile : [479,1],
      //   autoPlay : false,
  
      //   // CSS Styles
      //   baseClass : "owl-carousel",
      //   theme : "owl-theme"
      // });
  
      // //contact
      // $('input').blur(function() {
  
      //   // check if the input has any value (if we've typed into it)
      //   if ($(this).val())
      //     $(this).addClass('used');
      //   else
      //     $(this).removeClass('used');
      // });
  
      // //pop up porfolio
      // $('.portfolio-image li a').magnificPopup({
      //   type: 'image',
      //   gallery: {
      //     enabled: true
      //   }
      //   // other options
      // });
  
      // //Skill
      // jQuery('.skillbar').each(function() {
      //   jQuery(this).appear(function() {
      //     jQuery(this).find('.count-bar').animate({
      //       width:jQuery(this).attr('data-percent')
      //     },3000);
      //     var percent = jQuery(this).attr('data-percent');
      //     jQuery(this).find('.count').html('<span>' + percent + '</span>');
      //   });
      // });

      // Contact
      // Test for placeholder support
        $.support.placeholder = (function(){
          var i = document.createElement('input');
          return 'placeholder' in i;
      })();

      // Hide labels by default if placeholders are supported
      if($.support.placeholder) {
          $('.form-label').each(function(){
              $(this).addClass('js-hide-label');
          });  

          // Code for adding/removing classes here
          $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
              
              // Cache our selectors
              var $this = $(this),
                  $parent = $this.parent().find("label");
            
              switch(e.type) {
                case 'keyup': {
                  $parent.toggleClass('js-hide-label', $this.val() == '');
                } break;
                case 'blur': {
                  if( $this.val() == '' ) {
                      $parent.addClass('js-hide-label');
                  } else {
                      $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                  }
                } break;
                case 'focus': {
                  if( $this.val() !== '' ) {
                      $parent.removeClass('js-unhighlight-label');
                  }
                } break;
                default: break;
              }
              
          });
      } 
  
  
    });
  
    //smooth
    $('.packageBtn').click(function() {
      $('html, body').animate({
          scrollTop: $('#complate').offset().top
      }, 1000);
  });
  
    //header
    function inits() {
      window.addEventListener('scroll', function(e){
          var distanceY = window.pageYOffset || document.documentElement.scrollTop,
              shrinkOn = 300,
              header = document.querySelector(".for-sticky");
          if (distanceY > shrinkOn) {
              classie.add(header,"opacity-nav");
          } else {
              if (classie.has(header,"opacity-nav")) {
                  classie.remove(header,"opacity-nav");
              }
            }
        });
      }
  
    window.onload = inits();
  
    //nav-active
    function onScroll(event){
      var scrollPosition = $(document).scrollTop();
      $('.menu-list a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
          $('.menu-list a').removeClass("active");
          currentLink.addClass("active");
        }
        else{
          currentLink.removeClass("active");
        }
      });
    }
  
  
  
  })(jQuery);
  