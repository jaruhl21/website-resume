var windowHeight = $(window).height();

$(window).scroll(function() {
	if ($(document).scrollTop() > 0) {
		$('.nav').addClass('shrink');
	} else {
		$('.nav').removeClass('shrink');
	}
});

$(document).ready(function() {
	var progressBarPosition = $('.progressBars').position();
	var vertProgressBarPosition = progressBarPosition.top;
	// alert(vertProgressBarPosition);
	var showProgressBars = vertProgressBarPosition - windowHeight + 200;
	// alert(showProgressBars);
	var progressBarHeight = $('.progressBarRowOne').height();

	$(window).scroll(function() {
		if ($(document).scrollTop() > showProgressBars) {
			$('.progressBarRowOne').show();
		} else {
			$('.progressBarRowOne').hide();
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*1) {
			$('.progressBarRowTwo').show();
		} else {
			$('.progressBarRowTwo').hide();
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*2) {
			$('.progressBarRowThree').show();
		} else {
			$('.progressBarRowThree').hide();
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*3) {
			$('.progressBarRowFour').show();
		} else {
			$('.progressBarRowFour').hide();
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*4) {
			$('.progressBarRowFive').show();
		} else {
			$('.progressBarRowFive').hide();
		}
	});
});

$(window).scroll(function() {
	var scrollTopVal = $(this).scrollTop();
	var scrollTopValPercentage = scrollTopVal/windowHeight*20 + 50;
	var microtipsHeight = $('.indexSectionMicrotips').position();
	var microtipsheightVal = microtipsHeight.top;
	var x = scrollTopVal/microtipsheightVal*20 + 30;
	console.log("s: " + scrollTopVal + " m: " + microtipsheightVal + " x: " + x);
	console.log(scrollTopValPercentage);

	$('.indexSectionOne').css('background-position', '50% ' + scrollTopValPercentage + '%');
	$('.indexSectionMicrotips').css('background-position', '50% ' + x + '%');
});

// $('.indexSectionStudent').waypoint(function() {
// 	alert('The Student Section is on the screen')
// });