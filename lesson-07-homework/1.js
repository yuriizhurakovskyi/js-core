function fillWithNewData() {
	let elements = document.querySelectorAll('ul>li');
	for (var i = 0; i < elements.length; i++) {
		let currentElement = elements[i];
		console.log(currentElement.innerHTML);
		currentElement.innerHTML = '(Order of list items on this page: '
				+ (i + 1) + ') The ' + currentElement.className
				+ ' line of the '
				+ currentElement.parentElement.id.replace('-', ' ');
		console.log(currentElement.innerHTML);
	}

	let text = 'Count of all list items on this page is ' + elements.length;
	let count = document.getElementById('count-of-elements');
	count.innerHTML = text;
}