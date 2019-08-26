
$(document).ready(function() {
	FastClick.attach(document.body);
	$('.main-nav ul li a').click(function () {
		$('.target-burger,.main-nav,header .container').removeClass('toggled')
		// $('.navbar-toggle').removeClass('active-toggle')
	})
		//top
		var gotop = $('.top-btn');
		gotop.click(function () {
			$(".top-btn a").click(function(event){
				event.preventDefault();
			  });
			$('html,body').animate({
				scrollTop: 0
			}, 500);
		});
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				gotop.fadeIn();
			} else {
				gotop.stop().fadeOut();
			}
		});
	//faq_down
	$('.faq .qa-section').each(function (i) {

		var _number = i;
		$(this).click(function () {
			$(this).toggleClass('active-qa')
			
			$('.answer').eq(_number).slideToggle(200);
		});
		
		
	});
		//scroll-down
		$('.scrollWrap a').bind('click', function(event) {
			// alert("hi");
			 var $anchor = $(this);
			 $('html, body').stop().animate({
			   scrollTop: $($anchor.attr('href')).offset().top
			 }, 1500);
			 event.preventDefault();
		   });
	AOS.init();
    $('a.target-burger').click(function(e){
		$('.main-nav .container, nav.main-nav, a.target-burger').toggleClass('toggled');
		e.preventDefault();
	});
})