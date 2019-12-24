 function camelize (str){
	 let strArr = str.split('-');
	 for(let i=1; i<strArr.length; i++ ){
		 strArr[i] = strArr[i].toUpperCase().charAt(0) + strArr[i].slice(1, strArr[i].lenght);
	 }
	 return strArr.join('');
 }
 
 console.log(camelize('my-short-string'));