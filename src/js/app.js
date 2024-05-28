import { fetchAPI, renderExchange } from "./ExchangeRateApi";
import { startCart } from "./AddtocartWomens";
import CreateFireBaseUsers from "./logIn";
import filterSweaters from "./filterSweater";
import { upDateTotalPriceMens, cartCounterMens, removeAllItemsFromCartMens, removeItemFromCartMens } from "./AddtoCartMens";
import { formValidation, validationMessage, checkEmail, checkFullName, checkPassword, checkPhoneNumber } from "./validateForm"
import { cartCounter, removeAllItemsFromCart, removeItemFromCart, upDateTotalPrice } from "./AddtocartWomens";
import { filterSweatersMens } from "./filterSweaterMens"

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