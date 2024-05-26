
//VARIABLES FOR FILTERINGSWEATERS


const filterSweaters = () => {
	//VARIABLES FOR THE FUNCTION
	const sustainableButton = document.querySelector(".filter-button");
	const resetButton = document.querySelector(".reset-button");
	const sweaters = document.querySelectorAll(".clothing-img");
	let sweaterArray = [];

	sweaters.forEach(sweater => {
		sweaterArray.push(sweater);
	})

	const showSustainableSweaters = () => {
		sweaterArray.forEach(img => img.style.display = 'none');

		const sustainableSweaters = sweaterArray.filter(img => img.dataset.sustain === 'sustainable');

		sustainableSweaters.forEach(img => img.style.display = '');




	}

	const resetBacktoAllSweaters = () => {
		sweaterArray.forEach(sweater => sweater.style.display = '')
	}

	sustainableButton.addEventListener("click", showSustainableSweaters);

	resetButton.addEventListener("click", resetBacktoAllSweaters)




}

filterSweaters();

export default filterSweaters