
// Jquery start



// Jquery end

// js

// wow

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

// aos

AOS.init({
  duration: 1000,
});

// counterup

$(document).ready(function(){

  $('.counter').counterUp({
      delay: 10,
      time: 2500
  });

});

// preloader 

$(function () {
  // preloader start
  $(window).load(function () {
    $("#loading").fadeOut(1000);
  });
  // preloader end
});