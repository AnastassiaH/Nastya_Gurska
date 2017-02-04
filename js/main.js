$(document).ready(function(){ 
    
    
    // animation on page
    $(".part").animated("fadeInDown", "pulse"); 
    $(".left_side").animated("fadeInLeft", "fadeOutLeft");
    $(".right_side").animated("fadeInRight", "fadeOutRight");
    $(".photo").animated("pulse");
    $(".main_text h1").animated("fadeInDown");
    $(".main_text p").animated("fadeInUp");
    $(".resume_desc").animated("fadeIn");
    
    $("#btn-toogle").click(function(){
        $("#btn-toogle span i").toggleClass("fa-bars");
        $("#btn-toogle span i").toggleClass("fa-times");
    });
    
    //scroll
    $(".header a").mPageScroll2id();
    
    // up button
    $('.up').click(function(){
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
        });  
    
    //slider
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
        autoPlay :false,
        slideSpeed : 300,
        loop: true,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [660,1],// betweem 900px and 601px    
        itemsTablet: [650,1], //2 items between 600 and 0
        itemsMobile : [400,1], // itemsMobile disabled - inherit from itemsTablet option
	});
	owl.on(".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});
    
    });