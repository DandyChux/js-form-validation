document.getElementById('contact-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const message = document.getElmentById('message').value.trim();
	
	if (!validateName(name)) {
		alert('Please enter a valid name.');
		return;
	}
	
	if (!validateEmail(email)) {
		alert('Please enter a valid email address.');
		return;
	}
	
	if (!validateMessage(message)) {
		alert('Please enter a valid message.');
		return;
	}
	
	alert('Form submitted successfully!');
	// Submit the form data to the server here.
});

function validateName(name) {
	return name.length > 0;
}

function validateEmail(email) {
	const regEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/;
	return regEx.test(email);
}

function validateMessage(message) {
	return message.length > 0;
}