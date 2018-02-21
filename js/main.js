var heightMinusSeventy = $(window).height() - 70;

$(window).scroll(function() {
	if ($(document).scrollTop() > heightMinusSeventy) {
		$('.nav').addClass('shrink');
	} else {
		$('.nav').removeClass('shrink');
	}
});