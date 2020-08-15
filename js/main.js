jQuery(document).ready (function() {
    
    new WOW().init();
    
    
   jQuery('.js-wp-2').waypoint( function(direction) {
       
       jQuery('.js-wp-2').addClass('animated slideInUp'); } , {
       offset: '70%'
   });
    
     jQuery('.js-wp-3').waypoint( function(direction) {
       
       jQuery('.js-wp-3').addClass('animated fadeIn'); } , {
       offset: '70%'
   });
    
    jQuery(".iphone-btn").delay(2300).animate({ bottom: "+=-3"},300);
     jQuery(".iphone-btn").delay(300).animate({ top: "+=-3"},300);
    
    jQuery(".burger-nav").on("click",function () {
        jQuery(".container nav ul").toggleClass("open");
    }); 
    
});