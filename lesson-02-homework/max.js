function calc(number1, number2, operation){
	let result = 0;
	try{
		if(isNaN(number1) || isNaN(number2))
			throw new Error('Incorrect data');
		switch(operation){
			case '*':
				result = number1 * number2;
				break;
			case '/':
				result = number1 / number2;
				break;
			case '+':
				result = number1 + number2;
				break;
			case '-':
				result = number1 - number2;
				break;
			default:
				console.log('Incorrect operation!');	
		}
	}catch(err){
		console.log('Error happened ---->' + err);
	}
	return result;
}

console.log(calc('string', 4, '*') + '\n');
console.log(calc(34, 4, '*') + '\n');
console.log(calc(8, 12.5, '/') + '\n');
console.log(calc(8, 'string', '/') + '\n');
console.log(calc(8, 12.5, '+') + '\n');
console.log(calc(8, 12.5, '-') + '\n');