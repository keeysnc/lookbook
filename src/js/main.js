$(document).ready(function() {
	$('#fullpage').fullpage({
        //options here
        slidesNavPosition: 'bottom',
        autoScrolling:true,
        navigation: true,
        navigationPosition: 'right'
	});
	//methods
    $.fn.fullpage.setAllowScrolling(true);
    
    
// cover animation
    TweenLite.from('#cover', 2, {opacity:0, delay:0});
    TweenLite.from('#cover .year', .8, {opacity:0, delay:1.5});

    TweenLite.from('#cover .geo-cover-1', .8, {opacity:0, delay:1.5});

    TweenLite.from('#cover .title', 1, {left:-530, delay:1.7});
    TweenLite.from('#cover .title', .8, {opacity: 0, delay:2.3});

    TweenLite.from('.category-cover', 2, {opacity: 0, delay:.8});


    var coverArrow = $('#cover .arrow-prompt');
    console.log(coverArrow);
    

});







