/*==============================
	STYLE SWITCHER SCRIPT INSTALLATION
 ===============================*/
 
(function($) {
	"use strict";

	$(".green" ).click(function(){
		
		$("#colors" ).attr("href", "css/style.css" );
		return false;
	});

	$(".blue" ).click(function(){
		$("#colors" ).attr("href", "css/blue.css" );
		return false;
	});

	$(".purple" ).click(function(){
		$("#colors" ).attr("href", "css/purple.css" );
		return false;
	});

	$(".orange" ).click(function(){
		$("#colors" ).attr("href", "css/orange.css" );
		return false;
	});

	$(".yellow" ).click(function(){
		$("#colors" ).attr("href", "css/yellow.css" );
		return false;
	});

	$(".nvblue" ).click(function(){
		$("#colors" ).attr("href", "css/nvblue.css" );
		return false;
	});

	$(".redcl" ).click(function(){
		$("#colors" ).attr("href", "css/red.css" );
		return false;
	});

	$(".pink" ).click(function(){
		$("#colors" ).attr("href", "css/pink.css" );
		return false;
	});

	// Style Switcher	
	$('#style-switcher').animate({
		left: '-220px'
	});

	$('#style-switcher h2 a').click(function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		/*console.log(div.css('left'));*/
		if (div.css('left') === '-220px') {
			$('#style-switcher').animate({
				left: '0px'
			}); 
		} else {
			$('#style-switcher').animate({
				left: '-220px'
			});
		}
	});

	$('.colors li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
    
})(jQuery);
