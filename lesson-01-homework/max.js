'use strict';

let login = prompt("Who's there?", 'Enter login');

switch(login){
	case 'Admin':
		let password = prompt('Password?', 'Enter password');
		switch(password){
			case 'TheMaster':
				alert('Welcome');
				break;
			case null:
				alert('Canceled.');
				break;
			default:
				alert('Wrong password');
		}
		break;
	case null:
		alert('Canceled.');
		break;
	default:
		alert("I don't know you");
}