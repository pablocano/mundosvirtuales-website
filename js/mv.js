$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 10});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
  
  $('.nav a').on('click', function(){
    if($(window).width() < 767){
      $('.navbar-toggle').click() //bootstrap 3.x by Richard
    }
  });
  
  function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
      $('.navbar').addClass("scrolled");
      $('.navbar li a').css('color', '#1D70B7');
    }else{
      $(".nav").find(".active").removeClass("active");
      $('.navbar').removeClass("scrolled");
      if($(window).width() > 767){
        $('.navbar li a').css('color', 'rgb(240,240,240)');
      }
    }
  }
  
  $('.navbar li a').hover(function(e) {
    if($(window).width() > 767){
      var startY = $('.navbar').height() * 2; //The point where the navbar changes in px
      if($(window).scrollTop() > startY){
        $(this).css('color', e.type === 'mouseenter'?'rgb(87,87,87)':'#1D70B7');
      }
      else {
        $(this).css('color', e.type === 'mouseenter'?'#1D70B7':'rgb(240,240,240)');
      }
    }
  });
    
  $(".nav").find(".active").removeClass("active");
  if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
      checkScroll();
    });
  }
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
  
});