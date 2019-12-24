'use strict';

let login = prompt("Who's there?", 'Enter login');
if(login == 'Admin'){ 
	let password = prompt('Password?', 'Enter password');
	if(password == 'TheMaster') alert('Welcome');
	else if(password == null) alert('Canceled.');
	else alert('Wrong password');
} else if(login == null) alert('Canceled.');
else alert("I don't know you");