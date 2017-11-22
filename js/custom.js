/*
	Author: BestPixels
	Template: Home | Single Property HTML Template
	Version: 1.0
*/
	
"use strict";

/*global jQuery, $*/
jQuery(document).ready(function(){
	
	// One Page navigation
	jQuery('#navigation').onePageNav({
		'scrollOffset': 90,
	});
	
	// navigation collapse
	jQuery('.navbar-collapse').on("click", 'li', function() {
        jQuery('.navbar-collapse').collapse('hide');
    });
	
	// parallax
	jQuery('.header-section').parallax("50%", 0.1);
	jQuery('.video-section').parallax("50%", 0.1);
	jQuery('.cta-section').parallax("50%", 0.1);
	
	//magnificPopup	Video
	jQuery('.embaded-popup').magnificPopup({
		type: 'iframe',
		removalDelay: 160,
		preloader: true,
		fixedContentPos: false,
		callbacks: {
		beforeOpen: function() {
			  // just a hack that adds mfp-anim class to markup 
			  this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			  this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});
	
	jQuery('.large-view').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside:true,
		image: {
			verticalFit: false
		},			
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function() {
		  // just a hack that adds mfp-anim class to markup 
			this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
			this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.		
	});	
	
	// Item Sliders
	jQuery('.testimonials-list').slick({
		dots: true,
		fade: true,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
	});
	
	jQuery('.floor-list').slick({
		dots: true,
		adaptiveHeight: true,
		autoplay: true,
		arrows: false,
	});
	
	var area = jQuery('.grid-exterior-area'),
		house = jQuery('.grid-exterior-house'),
		livArea = jQuery('.grid-interior-living-areas'),
		kitchen = jQuery('.grid-interior-kitchen'),
		bedroom = jQuery('.grid-interior-bedroom'),
		bathroom = jQuery('.grid-interior-bathroom'),
		livingBtn = jQuery("#living"),
		kitchenBtn = jQuery("#kitchen"),
		bedroomBtn = jQuery("#bedroom"),
		bathroomBtn = jQuery("#bathroom"),
		houseBtn = jQuery("#house"),
		areaBtn = jQuery("#area");
	

	livingBtn.on("click touch", function () {
		jQuery('.active').fadeOut();
		jQuery('.active').removeClass('active');
		livingBtn.addClass('active')
		livArea.addClass('active')
		livArea.fadeIn();
		jQuery('.grid-interior-living-areas').masonry({
		  // options...
		  itemSelector: '.grid-item',
		  columnWidth: 200
		});
	})	

	kitchenBtn.on("click touch", function () {
		jQuery('.active').fadeOut();
		jQuery('.active').removeClass('active');
		kitchenBtn.addClass('active')
		kitchen.addClass('active')
		kitchen.fadeIn();
		jQuery('.grid-interior-kitchen').masonry({
		  // options...
		  itemSelector: '.grid-item',
		  columnWidth: 200
		});
	})	

	bedroomBtn.on("click touch", function () {
		jQuery('.active').fadeOut();
		jQuery('.active').removeClass('active');
		bedroomBtn.addClass('active')
		bedroom.addClass('active')
		bedroom.fadeIn();
		jQuery('.grid-interior-bedroom').masonry({
		  // options...
		  itemSelector: '.grid-item',
		  columnWidth: 200
		});
	})	

	bathroomBtn.on("click touch", function () {
		jQuery('.active').fadeOut();
		jQuery('.active').removeClass('active');
		bathroomBtn.addClass('active')
		bathroom.addClass('active')
		bathroom.fadeIn();
		jQuery('.grid-interior-bathroom').masonry({
		  // options...
		  itemSelector: '.grid-item',
		  columnWidth: 200
		});
	})	
	
	houseBtn.on("click touch", function () {
		jQuery('.active').fadeOut();
		jQuery('.active').removeClass('active');
		houseBtn.addClass('active')
		house.addClass('active')
		house.fadeIn();
		jQuery('.grid-exterior-house').masonry({
		  // options...
		  itemSelector: '.grid-item',
		  columnWidth: 200
		});
	})	
	
	areaBtn.on("click touch", function () {
		jQuery('.active').fadeOut();
		jQuery('.active').removeClass('active');
		areaBtn.addClass('active')
		area.addClass('active')
		area.fadeIn();
		jQuery('.grid-exterior-area').masonry({
		  // options...
		  itemSelector: '.grid-item',
		  columnWidth: 200
		});
	})	

});

