import ui from "./ui.js";
let prods = []

function addToCart(prod){
    let contain = false;
    prods.forEach(produit =>{
        if (produit.produit.ref === prod.ref){
            produit.qty++
            contain = true
        }
    })
    if(!contain)
        prods.push({produit : prod, 
                        qty: 1})
    
    console.log(prods)
}

function emptyCart(){
    prods.length=0
        
    // console.log(prods);
}

// const map = prods.map()


export default {addToCart, prods, emptyCart}