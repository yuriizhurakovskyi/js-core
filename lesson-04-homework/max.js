function alert(o){
	console.log('=============================================');
	console.log(o);
	console.log('=============================================');
}

let arrayOfStudents = [];
let student1 = { yearOfStuding: 1, facultyName: 'ІАРХ'};
let student2 = { yearOfStuding: 2, facultyName: 'ІБІД'};
let student3 = { yearOfStuding: 3, facultyName: 'ІГДГ'};
let student4 = { yearOfStuding: 5, facultyName: 'ІКТА'};
let student5 = { yearOfStuding: 3, facultyName: 'ІППТ'};
let student6 = { yearOfStuding: 1, facultyName: 'ІАПО'};
let student7 = { yearOfStuding: 5, facultyName: 'ІМФН'};
let student8 = { yearOfStuding: 2, facultyName: 'ІТРЕ'};
let student9 = { yearOfStuding: 4, facultyName: 'ІБІД'};
let student10 = { yearOfStuding: 4, facultyName: 'ІАРХ'};

arrayOfStudents.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);
alert(arrayOfStudents);

let faculties = Array.from(new Set(arrayOfStudents.map(student => student.facultyName)));
alert(faculties);

function sumYears(sum, student){
	return sum + student.yearOfStuding;
}

let yearSum = arrayOfStudents.reduce(sumYears, 0);
alert(yearSum);