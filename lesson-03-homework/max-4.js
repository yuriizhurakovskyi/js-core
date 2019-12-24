function filterRange (array, a, b){
	return array.slice(a, b + 1);
}


function division(){
	console.log ("\n--------------------------\n");
}

let arr = [];
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
division();
console.log('SLICE(2, 5):\n' + arr.slice(2, 5));
division();
console.log('My filterRange(array, 2, 5) using slice: \n' + filterRange (arr, 2, 5));