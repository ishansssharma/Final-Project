//ADDING ITEMS TO CART AND ADDING PRICES
//VARIABLES FOR THE FUNCTION FORM HTML
const priceClothing = document.querySelectorAll(".price-tag-mens");
const addToCartButtons = document.querySelectorAll(".addtocart-button-mens");
const totalPriceDiv = document.querySelectorAll(".total-price-mens");
const containerDiv = document.querySelector(".pricecontainer-mens")
//CREATE BUTTON FOR REMOVING ITEM
const removeSingleItem = document.createElement("button");
const removeAllItems = document.createElement("button");

//APPENDING BUTTONS TO THE CONTAINER
containerDiv.append(removeSingleItem, removeAllItems);

//VARIABLES THAT UNDERGO A CHANGE 
let totalPrice = 0;
let cartArray = [];




//UPDATING THE TEXTCONTENT FOR THE PRICE DIV
const upDateTotalPriceMens = () => {
	totalPriceDiv.textContent = `Total Price ${totalPrice} NOK`;
}

//ADDING THE PRICE PER CLOTHING PIECE
priceClothing.forEach(priceTag => {
	priceTag.textContent = `${priceTag.dataset.pricemens} NOK`
});

//EVENT LISTENER FOR CLICKING ON THE BUTTON AND UPDATING THE THE TOTAL PRICE FOR EACH TIME
addToCartButtons.forEach((button, index) => {
	button.addEventListener("click", function () {

		//PARSE THE PRICE USING DATASET
		const price = parseFloat(priceClothing[index].dataset.pricemens);

		//UPDATING THE TOTALPRICE BY ADDING PRICE
		totalPrice += price;
		cartArray.push(price);

		localStorage.setItem("item", JSON.stringify(cartArray))

		console.log(cartArray);

		upDateTotalPriceMens();
		cartCounterMens();


	});

});









//FUNCTION FOR REMOVING ITEMS FROM THE CART 
const removeItemFromCartMens = () => {




	removeSingleItem.textContent = "REMOVE SINGLE CLOTHING"
	removeAllItems.textContent = "RESET CART"

	removeSingleItem.addEventListener("click", () => {
		if (cartArray.length > 0) {
			const removeItem = cartArray.pop()
			totalPrice -= removeItem;

		}

		upDateTotalPriceMens();
		cartCounterMens();


		console.log(cartArray);


	})

}
//FUNCTION FOR REMOVING ALL ITEMS FROM FUNCTION
const removeAllItemsFromCartMens = () => {

	removeAllItems.addEventListener("click", () => {
		totalPrice = 0;
		cartArray.length = 0;

		localStorage.removeItem("item", cartArray);


		upDateTotalPriceMens();
		cartCounterMens();

	})
}

const cartCounterMens = () => {
	const itemCounter = document.querySelector(".items-added-mens");
	itemCounter.textContent = `TOTAL ITEMS ADDED ${cartArray.length}`;

}

cartCounterMens();


removeAllItemsFromCartMens()


removeItemFromCartMens()






export { cartCounterMens, removeAllItemsFromCartMens, removeItemFromCartMens, upDateTotalPriceMens }

