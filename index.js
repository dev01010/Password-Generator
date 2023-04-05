let passwordEl = document.querySelector(".password");
let generateButton = document.querySelector(".generate-btn");
let six = document.querySelector(".six");
let eight = document.querySelector(".eight");
let ten = document.querySelector(".ten");
let pLength = document.querySelector(".password-length");
let passwords = document.querySelector(".prev-passwords");
let defaultBtn = document.querySelector(".default-btn");

let passwordLength = 12;
let prevPasswords = [];

defaultBtn.addEventListener("click", function () {
  passwordLength = 12;
  pLength.textContent = "Default Length: " + passwordLength;
});
six.addEventListener("click", function () {
  passwordLength = 6;
  pLength.textContent = "Length: " + passwordLength;
});
eight.addEventListener("click", function () {
  passwordLength = 8;
  pLength.textContent = "Length: " + passwordLength;
});
ten.addEventListener("click", function () {
  passwordLength = 10;
  pLength.textContent = "Length: " + passwordLength;
});

function generateRandomString(passwordLength) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$&*.,";

  for (let i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  passwordEl.textContent = result;

  prevPasswords.push(result);
  // console.log(prevPasswords);

  const prevPassword = document.createElement("p");
  for (let index = 0; index < prevPasswords.length; index++) {
    prevPassword.textContent = prevPasswords[index];
    passwords.appendChild(prevPassword);
  }
}
