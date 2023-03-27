let passwordEl = document.querySelector(".password");
let generateButton = document.querySelector(".generate-btn");
let six = document.querySelector(".six");
let eight = document.querySelector(".eight");
let ten = document.querySelector(".ten");
let pLength = document.querySelector(".password-length");

let passwordLength;

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
}
