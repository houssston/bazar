$(document).ready(function(){

	let userMenuToggle = $('.user-menu__toggle');
	let userMenu = $('.user-menu__body');
	let headerSelect = $('.header-select-item');
	let searchSelect = $('.search-select-list');
	let dealsSlider = $('.deals-slider-wrapper');
	let gallerySlider = $('.gallery-slider');
	let gallerySliderNav = $('.gallery-slider-nav');
	let brandSlider = $('.brand-slider');


	activateUserMenu();
	deactivateUserMenu();
	selectMenu();
	slickSliders();
	tabs();	

	function activateUserMenu(){
		userMenuToggle.click(function(){
			userMenuToggle.toggleClass('toggle__active');
			userMenu.toggleClass('user-menu__active');
		})
	}
	function deactivateUserMenu(){
		$(document).click(function (e){
			if (!userMenu.is(e.target) && userMenu.has(e.target).length === 0 && !userMenuToggle.is(e.target) && userMenuToggle.has(e.target).length === 0) {
				userMenuToggle.removeClass('toggle__active');
				userMenu.removeClass('user-menu__active');
			}
		});		
	}
	function selectMenu(){
		headerSelect.selectmenu({
		appendTo:".header-select-list",		
		position:{
			my:'left-5 top'
		}		
		});
		searchSelect.selectmenu({
			appendTo:".header-search",			
		})
	}
	function slickSliders(){
		dealsSlider.slick({
		arrows: true,
		prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
		nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
		responsive: [
	    {
			breakpoint: 768,
			settings: {
	        arrows: false,	        
	      },
	    }]
		});	
		gallerySlider.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: gallerySliderNav,
			autoplay: false,		
		});
		gallerySliderNav.slick({
			slidesToShow: 6,      
			slidesToScroll: 1,
			asNavFor: gallerySlider,
			dots: false,
			arrows: true,
			centerMode: true,
			focusOnSelect: true,
			prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
			nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
			responsive: [
		    {
				breakpoint: 1200,
				settings: {
		        slidesToShow: 4,      
		      }	      		 	       
		    },{
				breakpoint: 480,
				settings: {
		        slidesToShow: 2,    
		      }	      		 	       
		    }]
		});	
		brandSlider.slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 6,
			prevArrow: '<div class="slick-prev"><i class="fas fa-angle-left"></i></div>',
			nextArrow: '<div class="slick-next"><i class="fas fa-angle-right"></i></div>',
			responsive: [
		    {
				breakpoint: 1200,
				settings: {
					slidesToScroll: 5,
			        slidesToShow: 5,
			        arrows:false    
		      }	      		 	       
		    },{
				breakpoint: 992,
				settings: {
			        slidesToShow: 4,
			        slidesToScroll: 4,
			        arrows:false    
		      }	      		 	       
		    },{
				breakpoint: 768,
				settings: {
					slidesToScroll: 3,
			        slidesToShow: 3,
			        arrows:false    
		      }	      		 	       
		    },{
				breakpoint: 480,
				settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows:false    
		      }	      		 	       
		    }]
		});	
	}
	function tabs(){
		$(".catalog-menu__link").click(function(event){
			event.preventDefault();
			$('.catalog-menu__link').removeClass('catalog-link-active');
		    $(this).addClass('catalog-link-active');
		    let href = $(this).attr('href');	   
		    $('.catalog-tab').removeClass('catalog-tab-active').removeClass('in');
		    $(href).addClass('catalog-tab-active');
		    setTimeout(function(){
		      $(href).addClass('in');
		    }, 200);	    
		})
		$(".gallery-menu__link").click(function(event){
			event.preventDefault();
			$('.gallery-menu__link').removeClass('gallery-menu__link-active');
		    $(this).addClass('gallery-menu__link-active');
		    let href = $(this).attr('href');	   
		    $('.gallery-tab').removeClass('gallery-tab-active').removeClass('in');
		    $(href).addClass('gallery-tab-active');
		    setTimeout(function(){
		      $(href).addClass('in');
		    }, 200);	    
		})	
	}	
})

