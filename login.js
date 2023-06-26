const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const email = document.getElementById("email");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

function validateForm() {
    var form = document.forms[0];
    var email = form.email.value;

    var emailRegex = /^\S+@\S+\.\S+$/; // regular expression for a valid email address

    if (email == "") {
        alert("Please enter your email");
        return false;
    } else if (!email.match(emailRegex)) {
        alert("Please enter a valid email address");
        return false;

    } else {
        location.assign = "index.html";
    }

    // more validation checks here

    // if all checks pass
    return true;
}