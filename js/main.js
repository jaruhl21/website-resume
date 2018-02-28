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
	var showProgressBars = vertProgressBarPosition - windowHeight + 100;
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
	var scrollTopValPercentage = scrollTopVal/windowHeight*10 + 50;
	var microtipsHeight = $('.indexSectionMicrotips').position();
	var microtipsheightValPercentage = scrollTopVal/(microtipsHeight.top)*23 + 27;
	var DigitechHeight = $('.indexSectionDigitech').position();
	var DigitechheightValPercentage = scrollTopVal/(DigitechHeight.top)*35 + 15;
	var StudentHeight = $('.indexSectionStudent').position();
	var StudentheightValPercentage = scrollTopVal/(StudentHeight.top)*50;
	console.log("scrollTop: " + scrollTopVal + " 1: " + scrollTopValPercentage + " 2: " + microtipsheightValPercentage + " 3: " + DigitechheightValPercentage + " 4: " + StudentheightValPercentage);
	// console.log("s: " + scrollTopVal + " m: " + microtipsHeight.top + " microtipsheightValPercentage: " + microtipsheightValPercentage);

	$('.indexSectionOne').css('background-position', '50% ' + scrollTopValPercentage + '%');
	$('.indexSectionMicrotips').css('background-position', '50% ' + microtipsheightValPercentage + '%');
	$('.indexSectionDigitech').css('background-position', '50% ' + DigitechheightValPercentage + '%');
	$('.indexSectionStudent').css('background-position', '50% ' + StudentheightValPercentage + '%');
});

// $('.indexSectionStudent').waypoint(function() {
// 	alert('The Student Section is on the screen')
// });