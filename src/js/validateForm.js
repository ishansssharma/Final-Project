
//VARIABLES FOR INPUTS 
const form = document.querySelector(".createaccount-form");
const fullNameInput = document.querySelector(".fullnameinput");
const phoneNumberInput = document.querySelector(".phonenumberinput");
const emailInput = document.querySelector(".emailinput");
const passwordInput = document.querySelector(".passwordinput");

//VARIABLE FOR BUTTON
const submitButton = document.querySelector(".submitbutton");


//VARIABLES FOR ERRORS
const fullnameErrorSpan = document.querySelector(".fullname-error");
const phoneNumberErrorSpan = document.querySelector(".phonenumber-error");
const emailErrorSpan = document.querySelector(".email-error");
const passwordErrorSpan = document.querySelector(".password-error")

const errorObject = {
	fullNameError: "",
	phoneNumbeError: "",
	emailError: "",
	passwordError: "",


}

const ErrorsDisplayed = () => {
	fullnameErrorSpan.textContent = errorObject.fullNameError;
	phoneNumberErrorSpan.textContent = errorObject.phoneNumbeError;
	emailErrorSpan.textContent = errorObject.emailError;
	passwordErrorSpan.textContent = errorObject.passwordError;

}


const CheckFullName = () => {
	const fullnameTrimmed = fullNameInput.value.trim();
	if (!fullnameTrimmed) {
		errorObject.fullNameError = "Please fill in your full name"
	} else if (fullnameTrimmed.length > 60) {
		errorObject.fullNameError = "Full name must be under 50 characters"
	} else if (fullnameTrimmed.length < 2) {
		errorObject.fullNameError = "Full name must be over 2 characters"
	} else if (/[0-9]/.test(fullnameTrimmed)) {
		errorObject.fullNameError = "Full name cannot contain numbers"
	} else {
		errorObject.fullNameError = "";
	}
}
const formValidation = () => {

}