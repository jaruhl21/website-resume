var windowHeight = $(window).height();														// Calculate height of Viewport

$(window).scroll(function() {																// Scrolling function, this will collapse navbar when scrolled past the top of the page
	if ($(document).scrollTop() > 0) {														// If scrolled past very top
		$('.nav').addClass('shrink');														// Add shrink class to nav class
	} else {																				// If not scrolled at all
		$('.nav').removeClass('shrink');													// Remove shrink class from nav class
	}
});

$(document).ready(function() {																// Funtion on document ready, this will animate progress bars when scrolled
	var progressBarPosition = $('.progressBars').position();								// Calculate position of the progress bars and the document
	var vertProgressBarPosition = progressBarPosition.top;									// Calculate the number of pixels between the progress bars and the top of the document
	// alert(vertProgressBarPosition);
	var showProgressBars = vertProgressBarPosition - windowHeight + 200;					// Calculate amount of scrolling before animation hits. Number can change based on where you want animation to happen on screen.
	// alert(showProgressBars);
	var progressBarHeight = $('.progressBarRowOne').height();								// Calculate the height of 1 progress bar

	$(window).scroll(function() {															// Scrolling function, this will animate each progress bar individually
		if ($(this).width() >= 576) {														// If device is wider than 575 pixels
			if ($(document).scrollTop() > showProgressBars) {								// If document is scrolled past defined value
				$('.HTMLProg').css("width", "100%");										// Make HTMLProg 100% wide
				$('.PythonProg').css("width", "80%");										// Make PythonProg 100% wide
			} else {																		// If document not scrolled past defined value
				$('.HTMLProg').css("width", "0%");											// Make HTMLProg 0% wide
				$('.PythonProg').css("width", "0%");											// Make PythonProg 0% wide
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*1) {			// Does the same thing as above but adds the height of one progress bar
				$('.CSSProg').css("width", "80%");											// so that it animates slightly after the first one.
				$('.JavaProg').css("width", "60%");
			} else {
				$('.CSSProg').css("width", "0%");
				$('.JavaProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*2) {			// Adds the height of two progress bars
				$('.JavaScriptProg').css("width", "80%");
				$('.FrontEndProg').css("width", "40%");
			} else {
				$('.JavaScriptProg').css("width", "0%");
				$('.FrontEndProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*3) {			// So on...
				$('.PHPMySQLProg').css("width", "60%");
				$('.LeadershipProg').css("width", "100%");
			} else {
				$('.PHPMySQLProg').css("width", "0%");
				$('.LeadershipProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*4) {			// and so forth
				$('.RubyonRailsProg').css("width", "20%");
				$('.CommunicationProg').css("width", "80%");
			} else {
				$('.RubyonRailsProg').css("width", "0%");
				$('.CommunicationProg').css("width", "0%");
			}
		} else {																			// If device is smaller than 576 pixels wide
			if ($(document).scrollTop() > showProgressBars) {								// Does the same as functions above but works on each progress bar individually
				$('.HTMLProg').css("width", "100%");										// since on a mobile device the progress bars will be in a single column.
			} else {
				$('.HTMLProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*1) {
				$('.CSSProg').css("width", "80%");
			} else {
				$('.CSSProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*2) {
				$('.JavaScriptProg').css("width", "80%");
			} else {
				$('.JavaScriptProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*3) {
				$('.PHPMySQLProg').css("width", "60%");
			} else {
				$('.PHPMySQLProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*4) {
				$('.RubyonRailsProg').css("width", "20%");
			} else {
				$('.RubyonRailsProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*5) {
				$('.PythonProg').css("width", "80%");
			} else {
				$('.PythonProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*6) {
				$('.JavaProg').css("width", "60%");
			} else {
				$('.JavaProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*7) {
				$('.FrontEndProg').css("width", "40%");
			} else {
				$('.FrontEndProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*8) {
				$('.LeadershipProg').css("width", "100%");
			} else {
				$('.LeadershipProg').css("width", "0%");
			}
			if ($(document).scrollTop() > showProgressBars + progressBarHeight*9) {
				$('.CommunicationProg').css("width", "80%");
			} else {
				$('.CommunicationProg').css("width", "0%");
			}
		}
	});
});

$(window).scroll(function() {																// Scrolling function, parallax effect
	var scrollTopVal = $(this).scrollTop();													// Calculates the current value of scrollTop or the number of pixels traversed
	var scrollTopValPercentage = scrollTopVal/windowHeight*20 + 50;							// Calculates a percentage for this picture to move
	var microtipsHeight = $('.indexSectionMicrotips').position();							// Calculates the position of the microtips picture
	var microtipsheightValPercentage = scrollTopVal/(microtipsHeight.top)*23 + 27;			// Calculates a percentage for microtips picture to move
	var DigitechHeight = $('.indexSectionDigitech').position();								// The rest of these do the same thing but notice how the integers are different.
	var DigitechheightValPercentage = scrollTopVal/(DigitechHeight.top)*35 + 15;			// This is to make them scroll roughly the same amount as the others.
	var StudentHeight = $('.indexSectionStudent').position();								// If they were all the same values each picture would scroll faster than the previous
	var StudentheightValPercentage = scrollTopVal/(StudentHeight.top)*50;
	// console.log("scrollTop: " + scrollTopVal + " 1: " + scrollTopValPercentage + " 2: " + microtipsheightValPercentage + " 3: " + DigitechheightValPercentage + " 4: " + StudentheightValPercentage);
	// console.log("s: " + scrollTopVal + " m: " + microtipsHeight.top + " microtipsheightValPercentage: " + microtipsheightValPercentage);

	$('.indexSectionOne').css('background-position', '50% ' + scrollTopValPercentage + '%');				// These commands actually change the position of
	$('.indexSectionMicrotips').css('background-position', '50% ' + microtipsheightValPercentage + '%');	// the background images based on the calculated
	$('.indexSectionDigitech').css('background-position', '50% ' + DigitechheightValPercentage + '%');		// number found above.
	$('.indexSectionStudent').css('background-position', '50% ' + StudentheightValPercentage + '%');
});
