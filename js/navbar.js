$(window).scroll(function() {
    if ($(this).scrollTop() > 150 && $(this).scrollTop() < 500) {
        $( ".nav-wrapper #nav-background" ).fadeIn();
    } else {
        console.log('there');
        $( ".nav-wrapper #nav-background" ).fadeOut();
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $( ".nav-wrapper #nav-content" ).fadeOut();
    } else {
        console.log('there');
        $( ".nav-wrapper #nav-content" ).fadeIn();
    }
});
