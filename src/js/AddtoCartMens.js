//ADDING ITEMS TO CART AND ADDING PRICES
//VARIABLES FOR THE FUNCTION FORM HTML
const priceClothing = document.querySelectorAll(".price-tag-mens");
const addToCartButtons = document.querySelectorAll(".addtocart-button-mens");
const totalPriceDiv = document.querySelector(".total-price-mens");
const containerDiv = document.querySelector(".pricecontainer-mens")
//CREATE BUTTON FOR REMOVING ITEM
const removeSingleItemMens = document.createElement("button");
const removeAllItemsMens = document.createElement("button");
removeSingleItemMens.textContent = "REMOVE SINGLE CLOTHING"
removeAllItemsMens.textContent = "RESET CART"

removeSingleItemMens.classList.add("removesinglemens-button");
removeAllItemsMens.classList.add("removeallmens-button");

//APPENDING BUTTONS TO THE CONTAINER
containerDiv.append(removeSingleItemMens, removeAllItemsMens);

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



		upDateTotalPriceMens();
		cartCounterMens();


	});

});









//FUNCTION FOR REMOVING ITEMS FROM THE CART 
const removeItemFromCartMens = () => {
	if (cartArray.length > 0) {
		const removeItem = cartArray.pop()
		totalPrice -= removeItem;

	}

	//RUNNING BOTH FUNCTIONS 

	upDateTotalPriceMens();
	cartCounterMens();





}


//FUNCTION FOR REMOVING ALL ITEMS FROM FUNCTION
const removeAllItemsFromCartMens = () => {


	totalPrice = 0;
	cartArray.length = 0;

	localStorage.removeItem("item", cartArray);


	upDateTotalPriceMens();
	cartCounterMens();

}


const cartCounterMens = () => {
	const itemCounter = document.querySelector(".items-added-mens");
	itemCounter.textContent = `TOTAL ITEMS ADDED ${cartArray.length}`;

}



removeSingleItemMens.addEventListener("click", removeItemFromCartMens);
removeAllItemsMens.addEventListener("click", removeAllItemsFromCartMens);

cartCounterMens();








