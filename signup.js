$(document).ready(function(){
    $('#signup-form').submit(function(e){
      e.preventDefault();
  
      let name = $('#name').val();
      let email = $('#email').val();
      let password = $('#password').val();
  
      // Clear previous error messages
      $('.error').remove();
  
      // Name validation
      if (name.length < 3) {
        $('#name').after('<span class="error">Name must be at least 3 characters long.</span>');
      }
  
      // Email validation (using a regular expression)
      let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!emailPattern.test(email)) {
        $('#email').after('<span class="error">Please enter a valid email address.</span>');
      }
  
      // Password validation (at least 6 characters)
      if (password.length < 6) {
        $('#password').after('<span class="error">Password must be at least 6 characters long.</span>');
      }
  
      // If all validations pass, show success message
      if (name.length >= 3 && emailPattern.test(email) && password.length >= 6) {
        alert("Account created successfully!");
      }
    });
  });
  