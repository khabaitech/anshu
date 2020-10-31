(function ($) {

  	"use strict";

    /*==== Loader ====*/   
    $('.preloader').fadeOut(1000); // set duration in brackets  


    /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
    	$(".navbar-collapse").collapse('hide');
    });	
    
	/*==== Sticky ====*/
	$("#header").sticky({topSpacing:0});
	$("#header2").sticky({topSpacing:0});
	
	//Text Typer
	var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
	
	/*==== Portfolio ====*/    
    $(window).load(function() {
        if ($(".loaderWrap").length > 0)
        {
            $(".loaderWrap").delay(500).fadeOut("slow");
        }

        if ($("#wordGrid").length > 0)
        {

            var $grid = $('#wordGrid');
            $grid.shuffle({
                itemSelector: '.folioItem' // the selector for the items in the grid
            });



            /* reshuffle when user clicks a filter item */
            $('#filter li').on('click', function() {

                // set active class
                $('#filter li').removeClass('active');
                $(this).addClass('active');

                // get group name from clicked item
                var groupName = $(this).attr('data-group');

                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }       

    });
	
	
	
	/*==== Testimonials, Love Story ====*/
	$(document).ready(function() { 
	$(".testimonialsList, .singlefolio, .lovestory").owlCarousel({ 		  
	   loop:true,
		margin:0,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				loop:true
			},
			700:{
				items:1,
				nav:false,
				loop:true
			},
			1170:{
				items:1,
				nav:true,
				loop:true
			}
		}	  
	}); 
	});
	
	
	
	
	/*==== Blog ====*/
	$(document).ready(function() { 
	$(".blogGrid").owlCarousel({ 		  
	   loop:true,
		margin:30,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false,
				loop:true
			},
			700:{
				items:2,
				nav:false,
				loop:true
			},
			1170:{
				items:3,
				nav:true,
				loop:true
			}
		}
	  
	}); 
	});
	
	

    /*==== Smoothscroll ====*/    
	$('#home a, #home3 a, .custom-navbar a').on('click', function(event) {
		var $anchor = $(this);
		  $('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 49
		}, 1000);
		  event.preventDefault();
	});
	
	/* ==== Revolution Slider ==== */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
			startheight:800,
			startwidth: 1170,
			hideThumbs: 1000,
			navigationType: 'none',
			touchenabled: 'on',
			onHoverStop: 'on',
			navOffsetHorizontal: 0,
			navOffsetVertical: 0,
			dottedOverlay: 'none',
			fullWidth: 'on'
		});
	}
	
})(jQuery);