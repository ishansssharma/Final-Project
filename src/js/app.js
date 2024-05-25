import { fetchAPI, renderExchange } from "./ExchangeRateApi";
import startCart from "./Addtocart";
import CreateFireBaseUsers from "./logIn";


//VARIABLES FOR MAIN PAGE

const mainButtons = document.querySelectorAll(".main-button");
const pages = document.querySelectorAll(".content")


//FUNCTIONS

//SWITCHING THROUGH DIFFERENT PAGES
mainButtons.forEach(button => {
	button.addEventListener("click", showPage)
})


function showPage(event) {
	const button = event.currentTarget;
	const pageToDisplay = button.dataset.button;

	pages.forEach(page => {
		page.classList.remove("content--visible");

		if (page.dataset.name === pageToDisplay) {
			page.classList.add("content--visible");
		}
	})

	mainButtons.forEach(button => {
		button.classList.remove("main-button__active");

		if (button.dataset.button === pageToDisplay) {
			button.classList.add("main-button__active")
		}

	})



}