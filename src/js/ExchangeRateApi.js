//VARIABLES FOR THE EXCHANGE RATE SITE
const nokInput = document.querySelector(".currencyinput");
const convertButton = document.querySelector(".convertbutton");
const ulList = document.querySelector(".exchangelist")


//ASYNC FUNCTION FOR API
import API_key from "./apikey";
const fetchAPI = async () => {
	try {
		const response = await fetch(`https://v6.exchangerate-api.com/${API_key}/latest/USD`);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("something is wrong"(error));
	}


}



fetchAPI()

export default fetchAPI
