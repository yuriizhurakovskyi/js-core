
function lastProduct(products){
	if(Array.isArray(products))
		return products[products.length - 1];
	else return null;
}

let products = ['potatoes', 'salad', 'burgers', 'coconut'];

console.log(lastProduct(products));