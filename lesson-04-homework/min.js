function alert(array){
	console.log('=================================');
	console.log(array);
	console.log('=================================');
}

function compareNumbers1(number1, number2){
	return number1 - number2;
}

function compareNumbers2(number1, number2){
	return number2 - number1;
}

function filterPositive(number){
	return number >= 0;
}

function filterNegative(number){
	return number < 0;
}

let array = [ 5, 343, 85, -1, 0, 90, -342, -43, 1, 22, 4, 3, -54, 5, 3, 45, 35, 25, 22, -12, 11, -11, 10, -10, -13, -13, 2];

array.sort(compareNumbers1);
alert(array);

array.sort(compareNumbers2);
alert(array);

let positive = array.filter(filterPositive);
alert(positive);

let negative = array.filter(filterNegative);
alert(negative);