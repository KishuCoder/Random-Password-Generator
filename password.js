let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let small = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "@#$&%^*~}{][()?/<>-_=+";
let passwordbox = document.getElementById("Password");
let lenght = 12;
let all = capital + small + number + symbol;

function Generate() {

    let password = "";
    password += capital[Math.floor(Math.random() * capital.length)];
    password += small[Math.floor(Math.random() * small.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += all[Math.floor(Math.random() * all.length)];
    }

    passwordbox.value = password;
}

function copy() {
    passwordbox.select();
    document.execCommand("copy");
}