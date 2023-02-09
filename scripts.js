function wait(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNumber(min = 20, max = 150, randomNumber = Math.random()) {
	return Math.floor(randomNumber * (max - min) + min);
}

async function draw(el) {
	const text = el.textContent;
	let soFar = '';
	for (const letter of text) {
		const { typeMin, typeMax } = el.dataset;
		const amountOfTime = getRandomNumber(typeMin, typeMax);
		soFar += letter;
		el.textContent = soFar;
		await wait(amountOfTime);
	}
}

document.querySelectorAll('[data-type]').forEach(draw);
