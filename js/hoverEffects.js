window.onload = init;

function init(){
	//form input focus effects
	var inputs = $('.form-control');

	$('.form-control').each(function(){
		var placeholder = $(this).attr('placeholder');
		if(placeholder != undefined){
			$(this).after('<div class="contact-label"><label for="' + $(this).attr('id') + '">' + placeholder + '</label></div>');
			$(this).after('<div class="contact-placeholder"><p>' + placeholder + '</p></div>');
			$(this).removeAttr('placeholder');
		}
	});

	inputs.focus(function(){
		selectedGroup = $(this).offsetParent();
		//border
		selectedGroup.prepend('<div class="form-effect"></div>');
		$(this).prev().animate({
		    width: "100%"
		}, 15, 'linear');
	});

	inputs.blur(function(){
		//placeholder
		var placeholder = $(this).next();
		if($(this).val().length > 0)
			placeholder.addClass('notEmpty');
		else{
			console.dir(placeholder);
			placeholder.removeClass('notEmpty');
		}
		//border
		var effect = $(this).prev();
		effect.css({'right': '0', 'width': '0'});

		window.setTimeout(function(){
			effect.remove();
		}, 500);
	});
}