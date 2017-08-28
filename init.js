(function($){
  $(function(){

    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
    //$('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy({scrollOffset: 150});

    $(document).ready(function(){
      $('.slider').slider({full_width: false, indicators: false, interval: 3000, height: 450});
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space