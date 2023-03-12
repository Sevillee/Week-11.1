const jacketPrice = document.getElementById('jacket_price');
const bagPrice = document.getElementById('bag_price');
const jeansPrice = document.getElementById('jeans_price');
const shoesPrice = document.getElementById('shoes_price');

let jacketPriceText = jacketPrice.textContent;
let bagPriceText = bagPrice.textContent;
let jeansPriceText = jeansPrice.textContent;
let shoesPriceText = shoesPrice.textContent;

const totalSum = document.getElementById('total_sum');

totalSum.textContent = +jacketPriceText + +bagPriceText + +jeansPriceText + +shoesPriceText;

const discountButton = document.querySelector("button");

discountButton.addEventListener('click', () => {
    jacketPrice.textContent = jacketPrice.textContent *0.8;
    bagPrice.textContent = bagPrice.textContent *0.8;
    jeansPrice.textContent = jeansPrice.textContent *0.8;
    shoesPrice.textContent = shoesPrice.textContent *0.8;
    
    totalSum.textContent = totalSum.textContent *0.8;
},
{once:true}
);