const passField1 = document.querySelector(".pass1");
const passField2 = document.querySelector(".pass2");
const passField3 = document.querySelector(".pass3");
const passField4 = document.querySelector(".pass4");

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
let characters = alpha + numbers + symbols;

// function to create 14 characters long password from provided characters, next step to create an user input on password length
const pass = (characters) => {
  let password = "";
  for (let i = 0; i < 14; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

const generatePass = () => {
  passField1.innerText = pass(characters);
  passField2.innerText = pass(characters);
  passField3.innerText = pass(characters);
  passField4.innerText = pass(characters);
};
