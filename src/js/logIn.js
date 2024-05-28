//IMPORT FIREBASE OBEJECT FOR THE CONFIG FILE
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"

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


const signInFunction = (e) => {
	e.preventDefault()
	signInWithEmailAndPassword(authService, emailInput.value, passwordInput.value)
		.then(() => {
			console.log("logged in");
		})
		.catch(error => console.log(error.message));
}

const signUpFunction = (e) => {

}

signInButton.addEventListener("click", signInFunction)


export default signInFunction






// export default signInFunction