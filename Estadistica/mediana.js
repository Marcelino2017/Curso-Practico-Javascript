function calcularMediaAritmetica(lista) {
 
     const sumaLista = lista.reduce(
         function (valorAcumulado = 0, nuevoElemento) {
             return valorAcumulado + nuevoElemento;
         }
     );
 
     const promedioLista = sumaLista / lista.length
     return promedioLista;
 }



function calcularMedianaAritmetica() {
    /* const lista1 = [
        100,
        200,
        500,
        400000000
    ]; */
    const list1 = document.getElementById("list1").value;
    const list2 = document.getElementById("list2").value;
    const list3 = document.getElementById("list3").value;
    const list4 = document.getElementById("list4").value;
    const list5 = document.getElementById("list5").value;

    const lista1 = [list1, list2, list3, list4, list5] 

    
    let listOrder = lista1.sort(function (a, b) {
        return a - b;
    });

    console.log(listOrder);
    const mitadLista1 = parseInt(lista1.length / 2);
    
    function esPar(numerito) {
        if((numerito % 2) === 0) {
            return true;
        } else {
            return false;
        }
    }
    let mediana;
    
    if(esPar(lista1.length)){
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElemento1y2 / 2;

        const resultP = document.getElementById("ResultP");
        resultP.innerText = `La media es: ${mediana}`;

    
    } else {
        mediana = lista1[mitadLista1];
        const resultP = document.getElementById("ResultP");
        resultP.innerText = `La mediana es: ${mediana}`;
    } 
}