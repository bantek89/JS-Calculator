const equals = document.getElementById('equals')
const decimal = document.getElementById('decimal')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const times = document.getElementById('times')
const divide = document.getElementById('divide')
const clear = document.getElementById('clear')
const displayBox = document.getElementById('displayBox')

let calculation = {
	firstNumber: '0',
	secondNumber: '0',
	operation: ''
}

let result = 0;

function buttonClickOn(number, numeral){
	number.style.borderStyle = 'inset';
	if (displayBox.innerText == 0 || displayBox.innerText == '+' || displayBox.innerText == '-' || displayBox.innerText == 'x' || displayBox.innerText == '/'){
		displayBox.innerText = numeral;
		if (calculation.operation === ''){
			calculation.firstNumber = numeral;
		}
		else {
			calculation.secondNumber = numeral;
		}
	} 

	else {
		displayBox.innerText = displayBox.innerText + numeral;
		if (calculation.operation === ''){
			calculation.firstNumber = calculation.firstNumber + numeral;
		}
		else {
			calculation.secondNumber = calculation.secondNumber + numeral;
		}
	}
	console.log('first number ' + calculation.firstNumber);
	console.log('second number ' + calculation.secondNumber);
}


function buttonClickOff(number){
	number.style.borderStyle = 'outset';
}

function plusNumbers(firstNumber, secondNumber){
	if (result === 0 || result === firstNumber){
		console.log('result is 0');
		result = firstNumber + secondNumber;
		console.log(result)
		return result
	}

	else if (result !== 0){
		console.log(result)
		return result + secondNumber;
	}
}

function minusNumbers(firstNumber, secondNumber){
	if (result === 0 || result === firstNumber){
		console.log('result is 0');
		result = firstNumber - secondNumber;
		console.log(result)
		return result
	}

	else if (result !== 0){
		console.log(result)
		return result - secondNumber;
	}
}

function multiplyNumbers(firstNumber, secondNumber){
	if (result === 0 || result === firstNumber){
		console.log('result is 0');
		result = firstNumber * secondNumber;
		console.log(result)
		return result
	}

	else if (result !== 0){
		console.log(result)
		return result * secondNumber;
	}
}

function divideNumbers(firstNumber, secondNumber){
	// if (result === 0 || result === firstNumber){
	// 	console.log('result is 0');
	// 	result = firstNumber / secondNumber;
	// 	console.log(result)
	// 	return result
	// }

	// else if (result !== 0){
	// 	console.log(result)
		return firstNumber / secondNumber;
	// }
}

equals.addEventListener('mousedown', function(){
	equals.style.borderStyle = 'inset';	
	displayBox.innerText = calculation.operation(Number(calculation.firstNumber), Number(calculation.secondNumber));
	calculation.firstNumber = displayBox.innerText;
	calculation.secondNumber = '0';
	result = 0;
})

equals.addEventListener('mouseup', function(){
	equals.style.borderStyle = 'outset';	
})

clear.addEventListener('mousedown', function(){
	clear.style.borderStyle = 'inset';
	displayBox.innerText = 0;
	calculation.firstNumber = '0';
	calculation.secondNumber = '0';
	calculation.operation = '';
})

clear.addEventListener('mouseup', function(){
	buttonClickOff(clear);
})

plus.addEventListener('mousedown', function(){
	plus.style.borderStyle = 'inset';
	displayBox.innerText = '+';
	plusNumbers(Number(calculation.firstNumber), Number(calculation.secondNumber));
	calculation.operation = plusNumbers;
})

plus.addEventListener('mouseup', function(){
	buttonClickOff(plus);
})

minus.addEventListener('mousedown', function(){
	minus.style.borderStyle = 'inset';
	displayBox.innerText = '-';
	minusNumbers(Number(calculation.firstNumber), Number(calculation.secondNumber))
	calculation.operation = minusNumbers;
})

minus.addEventListener('mouseup', function(){
	buttonClickOff(minus);
})

times.addEventListener('mousedown', function(){
	times.style.borderStyle = 'inset';
	displayBox.innerText = 'x';
	multiplyNumbers(Number(calculation.firstNumber), Number(calculation.secondNumber))
	calculation.operation = multiplyNumbers;
})

times.addEventListener('mouseup', function(){
	buttonClickOff(times);
})

divide.addEventListener('mousedown', function(){
	divide.style.borderStyle = 'inset';
	displayBox.innerText = '/';
	divideNumbers(Number(calculation.firstNumber), Number(calculation.secondNumber))
	calculation.operation = divideNumbers;
})

divide.addEventListener('mouseup', function(){
	buttonClickOff(divide);
})


decimal.addEventListener('mousedown', function(){
	if (calculation.firstNumber.includes('.') || calculation.secondNumber.includes('.')){
		return
	}

	else {
		buttonClickOn(decimal, '.');
	}
})

decimal.addEventListener('mouseup', function(){
	buttonClickOff(decimal);
})

document.getElementById('zero').addEventListener('mousedown', function(){
	buttonClickOn(zero, '0');
})

document.getElementById('zero').addEventListener('mouseup', function(){
	buttonClickOff(zero);
})

document.getElementById('one').addEventListener('mousedown', function(){
	buttonClickOn(one, '1');
})

document.getElementById('one').addEventListener('mouseup', function(){
	buttonClickOff(one);
})

document.getElementById('two').addEventListener('mousedown', function(){
	buttonClickOn(two, '2')
})

document.getElementById('two').addEventListener('mouseup', function(){
	buttonClickOff(two)
})

document.getElementById('three').addEventListener('mousedown', function(){
	buttonClickOn(three, '3')
})

document.getElementById('three').addEventListener('mouseup', function(){
	buttonClickOff(three)
})

document.getElementById('four').addEventListener('mousedown', function(){
	buttonClickOn(four, '4')
})

document.getElementById('four').addEventListener('mouseup', function(){
	buttonClickOff(four)
})

document.getElementById('five').addEventListener('mousedown', function(){
	buttonClickOn(five, '5')
})

document.getElementById('five').addEventListener('mouseup', function(){
	buttonClickOff(five)
})

document.getElementById('six').addEventListener('mousedown', function(){
	buttonClickOn(six, '6')
})

document.getElementById('six').addEventListener('mouseup', function(){
	buttonClickOff(six)
})

document.getElementById('seven').addEventListener('mousedown', function(){
	buttonClickOn(seven, '7')
})

document.getElementById('seven').addEventListener('mouseup', function(){
	buttonClickOff(seven)
})

document.getElementById('eight').addEventListener('mousedown', function(){
	buttonClickOn(eight, '8')
})

document.getElementById('eight').addEventListener('mouseup', function(){
	buttonClickOff(eight)
})

document.getElementById('nine').addEventListener('mousedown', function(){
	buttonClickOn(nine, '9')
})

document.getElementById('nine').addEventListener('mouseup', function(){
	buttonClickOff(nine)
})
