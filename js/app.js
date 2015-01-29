var $window = $(window);
var $nav = $('.nav-header');
var $body = $('body');
var navPosition = $nav.position().top;

$window.on('scroll', function(ev) {
	if ($window.scrollTop() >= navPosition) {
		$body.addClass('nav-sticky');
	} else {
		$body.removeClass('nav-sticky');
	}
}).trigger('scroll');

$window.on('resize', function() {
	if ($body.hasClass('nav-sticky')) {
		$body.removeClass('nav-sticky');
		navPosition = $nav.position().top;
		$body.addClass('nav-sticky');
	} else {
		navPosition = $nav.position().top;
	}
}).trigger('resize');

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

$(document).pjax('a:not([target])', '#content', {
	timeout:1000,
	fragment:'#content'
});