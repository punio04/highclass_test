$(function() {
	var topBtn = $('.page_top');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
    });
});

$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});

jQuery(document).ready(function($){
 $('.menu-trigger').click(function() {
	  if($('.menu-trigger').hasClass('open')){
	  	$('.menu-trigger').addClass('close');
	  	$('.menu-trigger').removeClass('open');	  	
	  }else{
	  	$('.menu-trigger').addClass('open');
	  	$('.menu-trigger').removeClass('close');	  			  
	  }
	  
    $('#sp_menu').fadeToggle('fade');
  });
  $('#sp_menu ul li a').click(function() {
	  if($('.menu-trigger').hasClass('close')){
	  	$('.menu-trigger').addClass('open');
	  	$('.menu-trigger').removeClass('close');	  			  
	  }
     $('#sp_menu').fadeToggle();

  });
});

