window.addEventListener('DOMContentLoaded', function () {
  // Form validation
  var contactForm = document.getElementById('contact-form');
  var nameInput = document.getElementById('name');
  var surnameInput = document.getElementById('surname');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var isValid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      isValid = false;
      document.getElementById('name-error').textContent = 'Name is required';
    } else {
      document.getElementById('name-error').textContent = '';
    }

    // Validate surname
    if (!surnameInput.value.trim()) {
      isValid = false;
      document.getElementById('surname-error').textContent = 'Surname is required';
    } else {
      document.getElementById('surname-error').textContent = '';
    }

    // Validate email
    if (!emailInput.value.trim()) {
      isValid = false;
      document.getElementById('email-error').textContent = 'Email is required';
    } else if (!isValidEmail(emailInput.value)) {
      isValid = false;
      document.getElementById('email-error').textContent = 'Invalid email format';
    } else {
      document.getElementById('email-error').textContent = '';
    }

    // Validate message
    if (!messageInput.value.trim()) {
      isValid = false;
      document.getElementById('message-error').textContent = 'Message is required';
    } else {
      document.getElementById('message-error').textContent = '';
    }

    if (isValid) {
      // Submit the form
      contactForm.submit();
    }
  });

  function isValidEmail(email) {
    // Simple email validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
});