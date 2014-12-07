var $window = $(window);
var $nav = $('.nav-header');

$window.on('scroll', function(ev) {
	var windowHeight = $window.height();
	var percent = $window.scrollTop() / (windowHeight - $nav.height());
	console.log(percent);
	if (percent >=1) {
		$nav.addClass('nav-sticky');
		
	} else {
		$nav.removeClass('nav-sticky');
	}
}).trigger('scroll');