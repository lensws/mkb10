$(document).ready(function() {

	function scrollToElement(elem) {                                  
		$('html, body').animate({scrollTop: $(elem).offset().top}, 500);
	}                                                                 
  $("#scrollTop").click(function() {
		window.scrollPosition = $(window).scrollTop();
		scrollToElement("header");
	});
  $("#scrollBottom").click(function() {
		window.scrollPosition = $(window).scrollTop();
		scrollToElement("footer");
	});
  $("#scrollPos").click(function() {
		$('html, body').animate({scrollTop: window.scrollPosition}, 500);
	});
  $("#scrollSearch").click(function() {
		window.scrollPosition = $(window).scrollTop();
		$('html, body').animate({scrollTop: $('#right_col').offset().top}, 500);
	});

	$(window).scroll(function() {
		(window.scrollPosition) ? $("#scrollPos").css("visibility", "visible") : $("#scrollPos").css("visibility", "hidden");
		if((window.scrollPosition)&&$("#scrollPos").css("display")=='none') { $("#scrollPos").css("display", "block"); }
	});

});