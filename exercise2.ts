function arrayNumbers (array:[]):number|string{
	let res:number = 0
	array.forEach(A=>{
		res += A
	})
	return `El resultado de la suma de todo tu array es: ${res}`
}
console.log(arrayNumbers([1,1,4]))
