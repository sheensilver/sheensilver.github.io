let QUANTITY = document.getElementById('quantity');
const PRICE = document.getElementById('price');
const TOTALPRICE = document.getElementById('totalPrice');

var quantityValue = parseInt(QUANTITY.value);
var priceValue = parseInt(PRICE.value)


TOTALPRICE.innerHTML = quantityValue * priceValue;

function totalChange() {
    TOTALPRICE.innerHTML  = quantityValue * priceValue;
    console.log(quantityValue); 
}