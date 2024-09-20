// Trying closure

function outer() {
	let counter = 0;
	function incrementCounter() {
		counter++;
		console.log(counter);
		return counter;
	}
	return incrementCounter;
}


// console.log(outer);

const myNewFunction = outer();
// myNewFunction();
console.log(myNewFunction());

console.log(myNewFunction());
