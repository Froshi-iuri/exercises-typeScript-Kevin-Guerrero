interface Producto{
	names: string,
	pricess: number
}

let producto:Producto[]=[{names: "zapato froshi", pricess: 100000000},{names: "camiseta froshi", pricess: 38},{names: "sudadera froshiru", pricess: 37727228811}]

producto.forEach((p, i)=>{if(p.pricess>50){console.log(p)}})
