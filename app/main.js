import validator from "validator";
import isEmail from "validator/lib/isEmail";
import "./styles/style.css";

const myForm = document.querySelector(".form");
const emailInput = document.querySelector("#emailInput");
const emailError = document.querySelector(".emailError");
const emailSuccess = document.querySelector(".emailSuccess");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validator.isEmail(emailInput.value)) {
    emailError.style.display = "block";
    emailInput.classList.add("inputError");
    emailSuccess.style.display = "none";
  } else {
    // alert("Success!");
    emailError.style.display = "none";
    emailInput.classList.remove("inputError");
    emailSuccess.style.display = "block";
  }
});
