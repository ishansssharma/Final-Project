//IMPORT FIREBASE OBEJECT FOR THE CONFIG FILE
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from 'firebase/app'

//IMPORT FROM FIRESTORE
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const CreateFireBaseUsers = () => {

	// INITIALIZE FIREBASE
	initializeApp(firebaseConfig);

	//CONNECT TO THE USERS DATABASE ON FIREBASE
	const database = getFirestore();
	const usersCollection = collection(database, "users");

	//ADDING THE USERS TO THE COLLECTION
	//VARIABLES FROM FORM
	const fullname = document.querySelector(".fullnameinput");
	const phonenumber = document.querySelector(".phonenumberinput");
	const email = document.querySelector(".emailinput");
	const passwordinput = document.querySelector(".passwordinput");
	const addUsers = document.querySelector(".createaccount-form");

	//CREATING AN OBJECT FOR THE USER
	addUsers.addEventListener("submit", (e) => {
		e.preventDefault();
		const newUser = {
			fullname: fullname.value,
			phonenumber: phonenumber.value,
			email: email.value,
			password: passwordinput.value
		}

		//CALLING ADDDOC METHOD 
		addDoc(usersCollection, newUser)
			.then(() => {
				console.log('user has been created');
				addUsers.reset()
			})
			.catch(err => console.log(err.message))


	})


}

CreateFireBaseUsers()

export default CreateFireBaseUsers