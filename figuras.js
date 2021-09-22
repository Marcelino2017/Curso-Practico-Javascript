

//Codigo del Cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado* 4
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();


//Codigo del 
console.group("Traingulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1  + lado2 + base;
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();


//Código del cirgulo
console.group("Cirulos");

//Radio
const radioCirulo = 4;

//Diáametro
function diametroCirulo(radio) {
    return radio * 2;
}

//PI
const PI = Math.PI;
//console.log("PI es: " + PI);

//Ciruferencia
function permitroCirulo(radio) {
    const diametro = diametroCirulo(radio);
    return diametro * PI; 
}

//área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}



console.groupEnd();
