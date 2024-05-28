//IMPORT FIREBASE OBEJECT FOR THE CONFIG FILE
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth"
import { formValidation, validationMessage } from "./validateForm"

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
			signOutButton.classList.add("signout-visible")
			signUpButton.classList.add("signoutbutton")
		})
		.catch(error => console.log(error.message));


}

const signupFullname = document.querySelector(".fullnameinput");
const signupEmail = document.querySelector(".emailinput");
const signupPhonenumber = document.querySelector(".phonenumberinput");
const signupPassword = document.querySelector(".passwordinput");

const signUpButton = document.querySelector(".submitbutton")

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
			signOutButton.classList.add("signout-visible")
			signUpButton.classList.add("signupbutton")
			signInButton.classList.add("signinbutton-visible")
		})
		.catch(error => console.log(error.message))


}

const signOutFunction = () => {
	signOut(authService)
		.then(() => {
			console.log("successfully signed out")
			signOutButton.classList.add("signoutbutton")
			signInButton.classList.add("signinbutton-visible")
		})
		.catch(error => console.log(error.message))
}

signInButton.addEventListener("click", signInFunction,)
signUpButton.addEventListener("click", (e) => {
	e.preventDefault()
	console.log("hri");
	if (formValidation()) {
		console.log("yes");
	}
})
console.log(signOutButton);
signOutButton.addEventListener("click", signOutFunction)









// export default signInFunction