import ui from './ui.js'
import product from './products.js';
import cart from './cart.js'


//Qst b 
export default function init(){
    ui.buildProductsList(product.products)

    const src = document.getElementById('product-search')
    src.addEventListener('keyup',e=>product.search(e.target.value))
    
//    document.querySelector('#product-search').addEventListener('keyup', (e)=>product.search(e.target.value))

    const empty = document.getElementById("empty-cart")
    empty.addEventListener('click', ()=>{
        cart.emptyCart()
        ui.displayCart()
    })

}


