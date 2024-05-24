//ADDING ITEMS TO CART AND ADDING PRICES

const startCart = () => {

	//VARIABLES FOR THE FUNCTION FORM HTML
	const priceClothing = document.querySelectorAll(".price-tag");
	const addToCartButtons = document.querySelectorAll(".addtocart-button");
	const totalPriceDiv = document.querySelector(".total-price");
	let totalPrice = 0;

	//UPDATING THE TEXTCONTENT FOR THE PRICE DIV
	const upDateTotalPrice = () => {
		totalPriceDiv.textContent = `Total Price ${totalPrice} NOK`;
	}

	//ADDING THE PRICE PER CLOTHING PIECE
	priceClothing.forEach(priceTag => {
		priceTag.textContent = `${priceTag.dataset.price} NOK`
	})

	//EVENT LISTENER FOR CLICKING ON THE BUTTON AND UPDATING THE THE TOTAL PRICE FOR EACH TIME
	addToCartButtons.forEach((button, index) => {
		button.addEventListener("click", function () {

			//PARSE THE PRICE USING DATASET
			const price = parseFloat(priceClothing[index].dataset.price);



			//UPDATING THE TOTALPRICE BY ADDING PRICE
			totalPrice += price;

			upDateTotalPrice();


		});

	});
	const removeItemFromCart = () => {

		const containerDiv = document.querySelector(".pricecontainer")
		//CREATE BUTTON FOR REMOVING ITEM
		const removeSingleItem = document.createElement("button");
		const removeAllItems = document.createElement("button");

		containerDiv.append(removeSingleItem, removeAllItems);
		removeSingleItem.textContent = "REMOVE SINGLE CLOTHING"
		removeAllItems.textContent = "RESET CART"

		removeSingleItem.addEventListener("click", () => {
			totalPrice -= price;


		})









	}



	removeItemFromCart()

	const removeAllItemsFromCart = () => {

		removeAllItems.addEventListener("click", () => {

		})
	}

}
startCart()

//FUNCTION FOR REMOVING ITEMS FROM THE CART 



export default startCart

