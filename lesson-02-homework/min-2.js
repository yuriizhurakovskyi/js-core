var employeeSalaries = {
		employee1 : 1245,
		employee2 : 1353,
		employee3 : 1365,
		employee4 : 1633,
		employee5 : 1465,
		employee6 : 1465,
		employee7 : 1764,
		employee8 : 1000,
		employee9 : 1545,
		employee10 : 1124,
};
console.log(employeeSalaries);

function sumEmployeeSalaries(employeeSalaries){
	var sum = 0;
	for( var employee in employeeSalaries){
		sum += employeeSalaries[employee];
	}
	return sum;
}

console.log(sumEmployeeSalaries(employeeSalaries));

var employeeSalaries2 = {};
console.log(employeeSalaries2);
console.log(sumEmployeeSalaries(employeeSalaries2));