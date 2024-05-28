
//VARIABLES FOR INPUTS 
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
	phoneNumberError: "",
	emailError: "",
	passwordError: "",

}

const ErrorsDisplayed = () => {
	fullnameErrorSpan.textContent = errorObject.fullNameError;
	phoneNumberErrorSpan.textContent = errorObject.phoneNumberError;
	emailErrorSpan.textContent = errorObject.emailError;
	passwordErrorSpan.textContent = errorObject.passwordError;

}

ErrorsDisplayed();

const checkFullName = () => {
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
		return true
	}
}

const checkPhoneNumber = () => {
	const phoneNumberTrimmed = phoneNumberInput.value.trim();
	const phoneNumberNumbers = /^[0-9]{9}$/;

	if (!phoneNumberTrimmed) {
		errorObject.phoneNumberError = "Phone number must be filled"
	} else if (!phoneNumberNumbers.test(phoneNumberTrimmed)) {
		errorObject.phoneNumberError = "Phone number must be 9 digits";
	} else if (/[a-zA-Z]/.test(phoneNumberTrimmed)) {
		errorObject.phoneNumberError = "Phone number cannot contain letters";
	} else {
		errorObject.phoneNumberError = "";
		return true
	}

}

const checkPassword = () => {
	const passwordTrimmed = passwordInput.value.trim();
	if (!passwordTrimmed) {
		errorObject.passwordError = "Please make your password"
	} else if (passwordTrimmed.length < 8) {
		errorObject.passwordError = "Password must be at least 8 characters"
	} else {
		errorObject.passwordError = "";
		return true
	}
}

const checkEmail = () => {
	const emailTrimmed = emailInput.value.trim();
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

	if (!emailTrimmed) {
		errorObject.emailError = "Please fill in email"
	} else if (!emailRegex.test(emailTrimmed)) {
		errorObject.emailError = "Please use the right email format"
	} else {
		errorObject.emailError = "";
		return true
	}
}




const formValidation = () => {
	return (checkFullName() && checkEmail() && checkPhoneNumber() && checkPassword())

}

const validationMessage = () => {
	const validationMessage = document.querySelector(".form-message");
	const messageDiv = document.createElement("div");

	validationMessage.appendChild(messageDiv);
	if (formValidation()) {
		messageDiv.textContent = "Account has been created"
	} else if (!formValidation) {
		messageDiv.textContent = "Account could not be created. Please correct the mistakes"
	} else {
		messageDiv.textContent = "";
	}
}

submitButton.addEventListener("click", (event) => {
	event.preventDefault();
	if (formValidation()) {
		validationMessage();
	}
	else {
		ErrorsDisplayed();
	}

})



