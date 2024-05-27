//ADDING ITEMS TO CART AND ADDING PRICES

const startCartMale = () => {

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
	const upDateTotalPrice = () => {
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

			upDateTotalPrice();
			cartCounter();


		});

	});

	//FUNCTION FOR REMOVING ITEMS FROM THE CART 
	const removeItemFromCart = () => {




		removeSingleItem.textContent = "REMOVE SINGLE CLOTHING"
		removeAllItems.textContent = "RESET CART"

		removeSingleItem.addEventListener("click", () => {
			if (cartArray.length > 0) {
				const removeItem = cartArray.pop()
				totalPrice -= removeItem;

			}

			upDateTotalPrice();
			cartCounter();


			console.log(cartArray);


		})

	}

	removeItemFromCart()

	//FUNCTION FOR REMOVING ALL ITEMS FROM FUNCTION
	const removeAllItemsFromCart = () => {

		removeAllItems.addEventListener("click", () => {
			totalPrice = 0;
			cartArray.length = 0;

			localStorage.removeItem("item", cartArray);


			upDateTotalPrice();
			cartCounter();

		})
	}

	removeAllItemsFromCart()



	const cartCounter = () => {
		const itemCounter = document.querySelector(".items-added");
		itemCounter.textContent = `TOTAL ITEMS ADDED ${cartArray.length}`;

	}

	cartCounter();

}
startCartMale()





export default startCartMale

