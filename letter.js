//this js file will print letters line by line in a synchronous way

//This is a promise function for waiting
function wait(ms = 0) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
// this function will get a random number between minimum to maximum valye
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
	return Math.floor(randomNumber * (max - min) + min);
}

// this is my draw callback function for draw every letter of the word
async function draw(el, content) {
	const text = content;
	let soFar = '';
	// for loop every letter of the word
	for (const letter of text) {
		soFar += letter;
		el.textContent = soFar;
		// wait for some amount of time
		const { typeMin, typeMax } = el.dataset;
		const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
		await wait(amountOfTimeToWait);
	}
}

async function drawAll(elNodeList) {
	// Make sure the element list is an actual array.
	const elList = Array.from(elNodeList);
	// Save the content of all elements because we need to clear them all.
	const elContentList = elList.map(el => el.textContent);
	console.log(elList);
	console.log(elList.length);
	for (let i = 0; i < elList.length; i++) {
		elList[i].innerHTML = '';
	}
	for (let i = 0; i < elList.length; i++) {
		// Await for draw to be done before moving the next loop iteration.
		await draw(elList[i], elContentList[i]);
	}
}

//here I select every element and run draw function for each element
drawAll(document.querySelectorAll('[data-type]'));
