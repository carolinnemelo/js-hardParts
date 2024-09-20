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

function sendMessage() {
    myNewFunction()
    
    if(counter === 2) {
        return "Counter is 2"
    }
}

// console.log(outer);

const myNewFunction = outer();
myNewFunction();

sendMessage()
console.log(myNewFunction());