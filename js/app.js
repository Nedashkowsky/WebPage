$(document).ready(function(){
    
    /*  Fixed navigation   */
    var header = $("header"),
        introH = $("#intro").innerHeight(),
        currentScroll = $(window).scrollTop();
        //container = $(".container");
    
    checkScroll(currentScroll);
    
    $(window).on("scroll", function(){
        currentScroll = $(this).scrollTop();
        checkScroll(currentScroll);
    });
    
    function checkScroll(currentScroll) {
        if(currentScroll >= introH){
                header.addClass("fixed");
                //container.addClass("container--header");
        } else{
            header.removeClass("fixed");
            //container.removeClass("container--header");
        }
    }
    
    
    /*  Scroll  */
    let btn = 
    $("[data-scroll]").click(function(event){
        
        event.preventDefault();
        
        var $this = $(this),
            blockId = $(this).data('scroll');
        
        nav.removeClass("show");
        
        $('html, body').animate({
            scrollTop: $(blockId).offset().top
        }, 1000);
    });
});


    /*   NavToggle   */
    var navToggle = $("#navToggle"),
        nav = $("#nav");
    
    navToggle.click(function(event){
        
        event.preventDefault();
        
        nav.toggleClass("show");
    });





