$(document).ready(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".main-mnu").slideToggle();
    return false;
  });

  $(".top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".arrow-bottom").click(function() {
    $("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
    return false;
  });

  $(".slider").owlCarousel({
    items : 1,
    nav : true,
    navText : "",
    loop : true,
    autoplay : true,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600
  });

  $(".section_1 .section-content .info-item").equalHeights();
  $(".section_3 .section-content .info-item").equalHeights();
  $(".s1-bottom .info-item").equalHeights();
  $(".s2-item").equalHeights();
  $(".s2-item .img-wrap").equalHeights();
  $(".section_2-1 .showcase").animated("fadeInRight");
  $(".section-head h2, .section-head p, .section-head .p").animated("fadeIn");
  $(".info-item-wrap").animated("zoomIn");
  $(".slider .slide").animated("fadeIn");
  $(".section_6 .showcase").animated("fadeInRight");
  $(".section_6-1 .img-wrap").animated("fadeInRight");
  $(".section_8 .p").animated("fadeIn");
  $(".section_8-1 .container__gallery").animated("fadeIn");
  $(".section_9 .book-section").animated("fadeInRight");
  $(".section_9 .accordion").animated("fadeIn");
  $(".section_10 .s10-items").animated("fadeIn");


  $(".section_2").waypoint(function() {
    $(".s2-item-wrap").each(function(index) {
      let ths = $(this);
      setInterval(function() {
        ths.addClass("on");
      }, 200*index);
    });
  }, {
    offset : "30%"
  });

  $(".section_4").waypoint(function() {

    $(".section_4 .card").each(function(index) {
      let ths = $(this);
      setInterval(function() {
        ths.removeClass("card-off").addClass("card-on");
      }, 200*index);
    });

  }, {
    offset : "20%"
  });

  $(".section_5").waypoint(function() {
    $(".s5-item-wrap").each(function(index) {
      let ths = $(this);
      setInterval(function() {
        ths.addClass("on");
      }, 200*index);
    });
  }, {
    offset : "30%"
  });


  $(".count_element").on("click", (function() {
    ga("send", "event", "goal", "goal");
    yaCounterXXXXXXXX.reachGoal("goal");
    return true;
  }));


  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
