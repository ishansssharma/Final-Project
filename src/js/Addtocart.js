//ADDING ITEMS TO CART AND ADDING PRICES

const startCart = () => {
	const priceClothing = document.querySelectorAll(".price-tag");
	const addToCartButtons = document.querySelectorAll(".addtocart-button");
	const totalPriceDiv = document.querySelector(".total-price");
	let totalPrice = 0;

	const upDateTotalPrice = () => {
		totalPriceDiv.textContent = `Total Price ${totalPrice} NOK`;
	}

	priceClothing.forEach(priceTag => {
		priceTag.textContent = `${priceTag.dataset.price} NOK`
	})

	addToCartButtons.forEach((button, index) => {
		button.addEventListener("click", function () {
			const price = parseFloat(priceClothing[index].dataset.price);




			totalPrice += price;

			upDateTotalPrice();


		});

	});



}
startCart()

export default startCart

