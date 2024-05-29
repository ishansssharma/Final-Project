import API_KEY from "./apikey";

//VARIABLES FOR THE EXCHANGE RATE SITE
const nokInput = document.querySelector(".currencyinput");
const convertButton = document.querySelector(".convertbutton");
const ulList = document.querySelector(".exchangelist");


//ASYNC FUNCTION FOR API

const fetchAPI = async () => {
	try {
		const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
		const data = await response.json();
		console.log(data);

		convertButton.addEventListener("click", (event) => {
			event.preventDefault();
			renderExchange(data.conversion_rates.NOK, Number(nokInput.value))
		})
	} catch (error) {
		console.log("Something went wrong", error);
	}




}

//FUNCTION FOR RENDERING THE CURRENCY EXCHANGE 

const renderExchange = (currencynok, amount = 1) => {
	ulList.textContent = "";
	const NokLine = document.createElement("li");

	ulList.appendChild(NokLine);

	NokLine.textContent = `Norwegian NOK = ${currencynok * amount}`;
	console.log(NokLine);

}



fetchAPI();

export { fetchAPI, renderExchange }


