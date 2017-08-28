$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 88) {
      $('.guide-nav').addClass('fixed-nav');
      $('#intro').css('margin-top', '118px');
    }
    else {
      $('.guide-nav').removeClass('fixed-nav');
      $('#intro').css('margin-top', '0px');
    }
  });
});

$('.hamburger').click(function(event) {
  event.stopPropagation();
  $('.hamburger-nav').slideToggle();
});

$('body:not(.hamburger)').click(function(){
    $('.hamburger-nav').slideUp();
});

var basicsDistance  = $('#basics').position().top;

$(document).on('scroll', function() {
  var distanceScrolled = $(this).scrollTop();
    if(distanceScrolled>=basicsDistance){
      $('.basics-1').addClass('visible');
      $('.basics-2').addClass('visible');
      $('.basics-3').addClass('visible');
    } else {
      $('.basics-1').removeClass('visible');
      $('.basics-2').removeClass('visible');
      $('.basics-3').removeClass('visible');
    }

    if(distanceScrolled>=$('#setup').position().top){
      $('#components').addClass('raised');
      $('#incidents').addClass('raised');
    } else {
      $('#components').removeClass('raised');
      $('#incidents').removeClass('raised');
    }

    if(distanceScrolled>=$('#managing').position().top){
      $('#subscribers').addClass('inset');
      $('#team-members').addClass('inset');
    } else {
      $('#subscribers').removeClass('inset');
      $('#team-members').removeClass('inset');
    }
})

$('#basics-jump').on('click', function() {
  $('.active').removeClass('active');
  $('#basics-jump').addClass('active');
});

$('#setup-jump').on('click', function() {
  $('.active').removeClass('active');
  $('#setup-jump').addClass('active');
});

$('#managing-jump').on('click', function() {
  $('.active').removeClass('active');
  $('#managing-jump').addClass('active');
});

$('#automating-jump').on('click', function() {
  $('.active').removeClass('active');
  $('#automating-jump').addClass('active');
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//When user scrolls to bottom of window, pop up alert (to be replaced with Modal code!)
  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() == $(document).height()) {
         //alert("bottom!");
     }
  });
