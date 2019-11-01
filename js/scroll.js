$(document).ready(function(){
            
    $('.down').on('click', function(e){
       e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#studio').offset().top
        }, 1000);
    }); 
    $('.contact-link').on('click', function(e){
       e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 1000);
    }); 
    $('.work-link').on('click', function(e){
       e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#work').offset().top
        }, 1000);
    }); 
});