
//VARIABLES FOR FILTERINGSWEATERS


const filterSweatersMens = () => {
	//VARIABLES FOR THE FUNCTION
	const sustainableButton = document.querySelector(".filter-button-mens");
	const resetButton = document.querySelector(".reset-button-mens");
	const sweaters = document.querySelectorAll(".clothing-imgmens");
	let sweaterArrayMens = [];

	sweaters.forEach(sweater => {
		sweaterArrayMens.push(sweater);
	})

	const showSustainableSweatersMens = () => {
		sweaterArrayMens.forEach(img => img.style.display = 'none');

		const sustainableSweaters = sweaterArrayMens.filter(img => img.dataset.sustainmens === 'sustainable');

		sustainableSweaters.forEach(img => img.style.display = 'block');




	}

	const resetBacktoAllSweatersMens = () => {
		sweaterArrayMens.forEach(sweater => sweater.style.display = '')
	}

	sustainableButton.addEventListener("click", showSustainableSweatersMens);

	resetButton.addEventListener("click", resetBacktoAllSweatersMens)




}

filterSweatersMens();

export default filterSweatersMens