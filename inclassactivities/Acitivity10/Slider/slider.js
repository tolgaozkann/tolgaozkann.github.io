$(document).ready(function () {
	$("#slider").bxSlider({
		auto: true,
		//To modify the code for the bxSlider plugin so that only one image is displayed at a time, you need to set both minSlides and maxSlides options to 1.
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 250,
		slideMargin: 10,
		//To modify the jQuery code so that the first image displayed in the bxSlider plugin is selected randomly, you can add the randomStart: true option.
		randomStart: true,
		//To make the carousel move one slide at a time, you can add the moveSlides: 1 option to the bxSlider plugin.
		moveSlides: 1,
		//To set the time between automatic transitions to 3 seconds, you can add the pause: 3000 option to the bxSlider plugin
		pause: 3000,
		customPager: '#pager',
		captions:true,
		pagerType: 'short'
	});
});