import cart from "./cart.js"
import products from "./products.js"
// Qst b

const addProduct=(e)=>{
    
        let i = 0;
        document.querySelectorAll(".product-add2cart").forEach(el =>{
        if (el == e.target ||  el.querySelector(".mdi-cart") == e.target){
            cart.addToCart(products.products[i])
        }
        i++
    })
    displayCart()
}





let displayProduct = (prod)=>{
    const list = document.querySelector('#product-list')

    const html = document.createElement('div')
    html.classList.add('product')
    html.innerHTML= `<div class="photo">
    <span class="mdi mdi-camera"></span>
    <a class="product-add2cart">
        <span class="mdi mdi-cart"></span>
    </a>
</div>
<div class="details">
    <div class="details-top">
        <strong class="bigger" data-type="ref">${prod.ref}</strong>
        <strong class="bigger" data-type="price">${prod.price}€</strong>
    </div>
    <div class="details-description">${prod.description}</div></div></div>`;

    list.append(html)



    const a2c = document.querySelectorAll(".product-add2cart")

    a2c.forEach(element=>{
        element.removeEventListener("click", addProduct)
    })

    a2c.forEach(element=>{
        element.addEventListener("click", addProduct)
    })



}

//Qst c
function buildProductsList(prod){
    prod.forEach(element => { displayProduct(element) });
    displayCart()
}


function displayCart(){
   let tab = document.querySelector('#cart-content')
   let html = ''
   cart.prods.forEach(element => {
        html+=`<tr>
                <td data-type="ref">${element.produit.ref}</td>
                <td data-type="qte">${element.qty}</td>
                <td data-type="amount">${element.produit.price*element.qty}€</td>
            </tr>`
   });

   tab.innerHTML=html
}


//Qst e
export default {buildProductsList, displayCart}