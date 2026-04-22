//1.	Declara una variable que pueda almacenar número o 
//string y crea una función que valide si el valor es número; 
//si lo es, multiplícalo por 2, si es texto, muéstralo en mayúsculas. 

let datoFlexible: number | string;

function procesarValor(valor: number | string) {
    if (typeof valor === 'number') {
        console.log(valor * 2);
    } else if (typeof valor === 'string') {
        console.log(valor.toUpperCase());
    }
}

datoFlexible = 10;
procesarValor(datoFlexible);

datoFlexible = "hola froshi";
procesarValor(datoFlexible);

