function fillInRed() {
	let elements = document.querySelectorAll('ul > li > a');
	for (let i = 0; i < elements.length; i++) {
		if(elements[i].href.includes('http://') || elements[i].href.includes('ftp://')){
			if(!elements[i].href.includes('http://internal.com'))
					elements[i].classList.add('external-red');
		}
	}
}