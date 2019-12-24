function makeBuffer() {
	let stringBuffer = [];
	function buffer() {
		return stringBuffer;
	}

	buffer.add = function(value) {
		if (!isNaN(value)) {
			stringBuffer.push(value);
		} else
			stringBuffer.push(value + ' ');
	}

	buffer.print = function() {
		return stringBuffer.join('');
	}
	buffer.clear = function() {
		stringBuffer = [];
	}
	return buffer;
}

function alert(o) {
	console.log('\n' + o + '\n');
}
var buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');

console.log(buffer.print());

var buffer = makeBuffer();
buffer.add(0);
buffer.add(1);
buffer.add(0);

console.log(buffer.print());
buffer.clear();

buffer.add("Тест");
buffer.add("тебе не з'їсть");
alert(buffer.print());
buffer.clear();
alert(buffer.print());