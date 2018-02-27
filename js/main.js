var windowHeight = $(window).height();

$(window).scroll(function() {
	if ($(document).scrollTop() > 0) {
		$('.nav').addClass('shrink');
	} else {
		$('.nav').removeClass('shrink');
	}
});

$(document).ready(function() {
	progressBarPosition = $('.progressBars').position();
	var vertProgressBarPosition = progressBarPosition.top;
	alert(vertProgressBarPosition);
	var showProgressBars = vertProgressBarPosition - windowHeight + 300;
	alert(showProgressBars);

	$(window).scroll(function() {
		if ($(document).scrollTop() > showProgressBars) {
			$('.progressBars').show();
		} else {
			$('.progressBars').hide();
		}
	});
});

// $('.indexSectionStudent').waypoint(function() {
// 	alert('The Student Section is on the screen')
// });