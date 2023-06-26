const btnLogout = document.getElementById("btnLogout");
const modalAlert3 = document.getElementById("modalAlert3")

btnLogout.addEventListener('click', function () {
    alert("You're About to Logout");
    location.assign("login.html");
})