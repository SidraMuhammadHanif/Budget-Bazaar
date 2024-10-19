// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (validateEmail(email) && validatePassword(password)) {
//         alert('Login successful!');
//     }
// });

// function validateEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     const phonePattern = /^[0-9]{10,15}$/;
    
//     if (emailPattern.test(email) || phonePattern.test(email)) {
//         return true;
//     } else {
//         alert('Please enter a valid email or phone number.');
//         return false;
//     }
// }

// function validatePassword(password) {
//     if (password.length >= 6) {
//         return true;
//     } else {
    //         alert('Password must be at least 6 characters long.');
    //         return false;
    //     }
    // }

$( document ).ready(function() {

    $("#loginForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                strongPassword: true
            }
        },
        messages: {
            email: {
                required: "Please enter your email or phone number",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your password"
            }
        }
    });

       
    });