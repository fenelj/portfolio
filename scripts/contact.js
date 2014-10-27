$('#contact').on('submit', function() {
	var message      = '';
	var valid        = true;
	var namePattern  = /^[a-zA-Z ]+$/;
	var emailPattern = /^.+@.+[.].{2,}$/i;

	$('.alert-error').remove();
	$(this).find('input, textarea').removeClass('error');

	
	if(!namePattern.test($('input[name="name"]').val())){
		valid = false;

		$('input[name="name"]').addClass('error');
		$('label[for="name"]').after('<div class="alert alert-error"><i class="icon-remove"></i> Not a valid name</div>');
	}
	if(!emailPattern.test($('input[name="email"]').val())){
		valid = false;

		$('input[name="email"]').addClass('error');
		$('label[for="email"]').after('<div class="alert alert-error"><i class="icon-remove"></i> Invalid or blank email</div>');
	}
	if($('input[name="subject"]').val().length < 1){
		valid = false;

		$('input[name="subject"]').addClass('error');
		$('label[for="subject"]').after('<div class="alert alert-error"><i class="icon-remove"></i> Subject was empty or too short</div>');
	}
	if($('textarea[name="message"]').val().length < 1){
		valid = false;

		$('textarea[name="message"]').addClass('error');
		$('label[for="message"]').after('<div class="alert alert-error"><i class="icon-remove"></i> Message was empty or too short</div>');
	}

	// Warns the user and prevents the form action
	if(!valid) {
		return false;
	}
	else {
		// Cool little loading state for the submit button
		$('#contact #submit').html('<span class="icon-spinner icon-spin"></span> Submitting...');
		return true;
	}
});