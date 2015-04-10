// http://simplyaccessible.com/examples/css-menu/option-2/
$(function() {
	$('.nav').setup_navigation();
});
$.fn.setup_navigation = function(settings) {
	settings = jQuery.extend({
		menuHoverClass: 'show-menu',
	}, settings);
	// Set tabIndex to -1 so that links can't receive focus until menu is open
	$(this).find('> li > a').next('ul').find('a').attr('tabIndex', -1);
	$(this).find('> li > a').hover(function() {
		$(this).closest('ul').find('.' + settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex', -1);
	});
	$(this).find('> li > a').focus(function() {
		$(this).closest('ul').find('.' + settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex', -1);
		$(this).next('ul')
			.addClass(settings.menuHoverClass)
			.find('a').attr('tabIndex', 0);
	});
	// Hide menu if click or focus occurs outside of navigation
	$(this).find('a').last().keydown(function(e) {
		if (e.keyCode == 9) {
			// If the user tabs out of the navigation hide all menus
			$('.' + settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex', -1);
		}
	});
	$(document).click(function() {
		$('.' + settings.menuHoverClass).removeClass(settings.menuHoverClass).find('a').attr('tabIndex', -1);
	});
	$(this).click(function(e) {
		e.stopPropagation();
	});
}
