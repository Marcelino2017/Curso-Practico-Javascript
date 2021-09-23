

function calularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDisconect() {
    const inputPrice =  document.getElementById('InputPrice').value;
    const inputValue =  document.getElementById('InputDiscount').value;
    const precioConDescuento = calularPrecioConDescuento(inputPrice, inputValue);

    const resutado = document.getElementById("ResultP")
    resutado.innerText = `El precio con descunto son de: $ ${precioConDescuento}`;
    //ResultP

}