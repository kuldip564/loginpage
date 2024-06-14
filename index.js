const sing = document.getElementById("signup");
const login = document.getElementById("login");
const sin = document.getElementById("sign");
const loginbut = document.getElementById("loginbut");


function logi() {
    login.style.display = "none"
    sin.style.display = "flex";
}

function loginb() {
    login.style.display = "flex"
    sin.style.display = "none";
}
sing.addEventListener("click", logi)
loginbut.addEventListener("click", loginb)
function check() {
    const pass = document.getElementById("password1");
    const pass1 = document.getElementById("password2");
    const tow = pass.value + pass1.value;
    if (tow == "") {
        pass.style.border = "none";
        pass1.style.border = "none";
    }
    else if (pass.value !== pass1.value) {
        pass.style.border = "2px solid red";
        pass1.style.border = "2px solid red";
        console.log("Passwords do not match");
    } else {
        pass.style.border = "3px solid green";
        pass1.style.border = "3px solid green";
        console.log("Passwords match");
    }
}
document.getElementById("password1").addEventListener("input", check);
document.getElementById("password2").addEventListener("input", check);