

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

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const permitro = perimetroCuadrado(value);
    alert ('El permitro del cuadrado es: ' + permitro + " cm")

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert ('El área del cuadrado es: ' + area + " cm")
}

function alturaTrianguloIsosceles() {
    const ladoA = document.getElementById("lado1T").value;
    const ladoB = document.getElementById("lado2T").value;
    const baseT = document.getElementById("baseT").value;

    if(ladoA == ladoB && ladoA != baseT){
       alturaT = Math.sqrt((ladoA**2 - (baseT**2 / 4)));
       alert("La artura del triangulo isoceles es: " + alturaT + " cm");
    } else {
        alert("No es un triangulo isoceles");
    }
}