//IMPORT FIREBASE OBEJECT FOR THE CONFIG FILE
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import "./validateForm"

//IMPORT FROM FIRESTORE
import { getFirestore, collection, addDoc } from 'firebase/firestore'

// INITIALIZE FIREBASE
initializeApp(firebaseConfig);
const authService = getAuth();

//CONNECT TO THE USERS DATABASE ON FIREBASE
const database = getFirestore();
const usersCollection = collection(database, "users");

//VARIABLES FOR DISCOUNT FORM
const emailInput = document.querySelector(".emaildiscount");
const passwordInput = document.querySelector(".passworddiscount");
const signInButton = document.querySelector(".discount-submit");

const signOutButton = document.querySelector(".signout-button")

const signInFunction = (e) => {
	e.preventDefault()
	signInWithEmailAndPassword(authService, emailInput.value, passwordInput.value)
		.then(() => {
			console.log("logged in");
			signOutButton.classList.add("signoutbutton-visible");
			signUpButton.classList.remove("signoutbutton-visible");
			signInButton.classList.remove("signinbutton-visible")
		})
		.catch(error => console.log(error.message));


}

const signupFullname = document.querySelector(".fullnameinput");
const signupEmail = document.querySelector(".emailinput");
const signupPhonenumber = document.querySelector(".phonenumberinput");
const signupPassword = document.querySelector(".passwordinput");

const signUpButton = document.querySelector(".submitbutton");
const alreadyinuseContainer = document.querySelector(".alreadyinuse-message")

const signUpFunction = (e) => {
	e.preventDefault()
	const loginUser = {
		fullname: signupFullname.value,
		email: signupEmail.value,
		phonenumber: signupPhonenumber.value,
		password: signupPassword.value
	}
	createUserWithEmailAndPassword(authService, loginUser.email, loginUser.password)
		.then(() => {
			console.log("signed up")
			signOutButton.classList.add("signoutbutton-visible")
			signUpButton.classList.add("signupbutton")
			signInButton.classList.add("signinbutton-visible")
		})
		.catch(error => console.log(error.message))

	const alreadyinuseDiv = document.createElement("div");
	alreadyinuseContainer.appendChild(alreadyinuseDiv);

	alreadyinuseDiv.textContent = "An account with this email already exists."
	if (error.code === 'auth/email-already-in-use') {
		alreadyinuseDiv.classList.add("aluse-visble")

	} else {
		alreadyinuseDiv.classList.add(".aluse")
	}


	signupFullname.value = "";
	signupEmail.value = "";
	signupPhonenumber = "";
	signupPassword = "";


}

const signOutFunction = (e) => {
	e.preventDefault()
	signOut(authService)
		.then(() => {
			console.log("successfully signed out")
			signOutButton.classList.remove("signoutbutton-visible");
			signInButton.classList.add("signinbutton-visible");
			signUpButton.classList.add("signupbutton-visible")
		})
		.catch(error => console.log(error.message))
}


signUpButton.addEventListener("click", (e) => {
	e.preventDefault()
	console.log("hri");
	if (formValidation()) {
		console.log("yes");
	}
})
console.log(signOutButton);


signInButton.addEventListener("click", signInFunction)
signOutButton.addEventListener("click", signOutFunction)
signUpButton.addEventListener("click", signUpFunction)


onAuthStateChanged(authService, user => {
	const loggedInContent = document.querySelector(".discount-sweaters");
	if (user) {

		console.log("User can access discounted sweaters");
		loggedInContent.classList.add(".discounted-sweaters-visible");

	} else {
		console.log("User has logged out and can there not access discount anymore");
		loggedInContent.classList.add("discounted-sweaters")
	}
})








