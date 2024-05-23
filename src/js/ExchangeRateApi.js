//VARIABLES FOR THE EXCHANGE RATE SITE
const nokInput = document.querySelector(".currencyinput");
const convertButton = document.querySelector(".convertbutton");
const ulList = document.querySelector(".exchangelist")


//ASYNC FUNCTION FOR API
const fetchAPI = async () => {
	try {
		const response = await fetch("https://v6.exchangerate-api.com//latest/USD");
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log("something is wrong"(error));
	}


}

function renderRate = () => {

}

fetchAPI()

export default fetchAPI
