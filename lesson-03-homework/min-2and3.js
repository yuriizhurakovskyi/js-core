let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
console.log(styles);


function division(){
	console.log ("\n--------------------------\n");
}

function replacePenultimate(styles, newItem){
	styles.splice(-2, 1, newItem);
}

function find1(arr, value){
	let res = -1;
	for(let i=0; i<arr.length; i++){
		if(arr[i]==value)
			res = i;
	}
	return res;
}

function find2(arr, value){
	return arr.findIndex((item) => item == value);
}

division();
replacePenultimate(styles, 'Класика');
console.log(styles);

division();
/*styles = [];
replacePenultimate(styles, 'Класика');
console.log(styles);*/

console.log(styles.shift());
division();
console.log(styles);
division();
styles.unshift('Реп', 'Реггі');
console.log(styles);
division();

console.log(find2(styles, 'Реггі'));
console.log(find1(styles, 'Реггі'));