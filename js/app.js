var $window = $(window);
var $nav = $('.nav-header');

$window.on('scroll', function(ev) {
	var windowHeight = $window.height();
	var percent = $window.scrollTop() / (windowHeight - $nav.height());
	
	if (percent >=1) {
		$nav.addClass('nav-sticky');
	} else {
		$nav.removeClass('nav-sticky');
	}
}).trigger('scroll');

$('.dropdown').on('click', function(ev) {
	ev.preventDefault();
	var $nav = $('.nav-main');
	
	if ($nav.is(':visible')) {
		$(this).removeClass('active');
		$nav.css('display', 'none');
	} else {
		$(this).addClass('active');
		$nav.css('display', 'block');
	}
});

$(document).on('inview', '.infinite-scroll', function (ev, visible, topOrBottomOrBoth) {
	var $container = $(this);
	
	$container.addClass('loading');
	
	$.get($container.data('href'), function(data) {
		var doc = document.createElement('html');
			doc.innerHTML = data;
		
		$container.replaceWith($("#content", doc).html());
	}, 'html');
});