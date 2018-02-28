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
	var showProgressBars = vertProgressBarPosition - windowHeight + 300;
	// alert(showProgressBars);
	var progressBarHeight = $('.progressBarRowOne').height();

	$(window).scroll(function() {
		if ($(document).scrollTop() > showProgressBars) {
			$('.progressBarRowOne').css("opacity", "1");
			// if ($('.HTMLProg').css("width") == 0) {
			// 	for (var i = 0; i <=100; i++) {
			// 		(function(i) {
			// 			setTimeout(function() {
			// 				$('.HTMLProg').css("width", i + "%");
			// 			}, 10*i);
			// 		})(i);
			// 	};
			// }
			// $('.HTMLProg').animate({width: "100%"}, {duration: 500});
		} else {
			$('.progressBarRowOne').css("opacity", "0");
			// if ($('.HTMLProg').css("width") != 0) {
			// 	for (var i = 100; i >= 0; i--) {
			// 		(function(i) {
			// 			setTimeout(function() {
			// 				$('.HTMLProg').css("width", i + "%");
			// 			}, 10*i);
			// 		})(i);
			// 	};
			// }
			// $('.HTMLProg').animate({width: "0%"}, {duration: 500});
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*1) {
			$('.progressBarRowTwo').css("opacity", "1");
		} else {
			$('.progressBarRowTwo').css("opacity", "0");
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*2) {
			$('.progressBarRowThree').css("opacity", "1");
		} else {
			$('.progressBarRowThree').css("opacity", "0");
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*3) {
			$('.progressBarRowFour').css("opacity", "1");
		} else {
			$('.progressBarRowFour').css("opacity", "0");
		}
		if ($(document).scrollTop() > showProgressBars + progressBarHeight*4) {
			$('.progressBarRowFive').css("opacity", "1");
		} else {
			$('.progressBarRowFive').css("opacity", "0");
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
	// console.log("scrollTop: " + scrollTopVal + " 1: " + scrollTopValPercentage + " 2: " + microtipsheightValPercentage + " 3: " + DigitechheightValPercentage + " 4: " + StudentheightValPercentage);
	// console.log("s: " + scrollTopVal + " m: " + microtipsHeight.top + " microtipsheightValPercentage: " + microtipsheightValPercentage);

	$('.indexSectionOne').css('background-position', '50% ' + scrollTopValPercentage + '%');
	$('.indexSectionMicrotips').css('background-position', '50% ' + microtipsheightValPercentage + '%');
	$('.indexSectionDigitech').css('background-position', '50% ' + DigitechheightValPercentage + '%');
	$('.indexSectionStudent').css('background-position', '50% ' + StudentheightValPercentage + '%');
});

// $('.indexSectionStudent').waypoint(function() {
// 	alert('The Student Section is on the screen')
// });