
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

	//FILTER BASED ON DATASET
	const showSustainableSweatersMens = () => {
		sweaterArrayMens.forEach(img => img.style.display = 'none');

		const sustainableSweaters = sweaterArrayMens.filter(img => img.dataset.sustainmens === 'sustainablemens');

		sustainableSweaters.forEach(img => img.style.display = 'flex');




	}

	//RESET BACK TO ORIGINAL 

	const resetBacktoAllSweatersMens = () => {
		sweaterArrayMens.forEach(sweater => sweater.style.display = '')
	}

	//RUN FUNCTION WHEN BUTTON IS CLICKED 

	sustainableButton.addEventListener("click", showSustainableSweatersMens);

	resetButton.addEventListener("click", resetBacktoAllSweatersMens)




}

filterSweatersMens();

