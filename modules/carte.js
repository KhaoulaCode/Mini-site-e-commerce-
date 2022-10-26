import ui from "./ui.js";

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
    
}