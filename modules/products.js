
let products = [ 
{ref: "#R1200" ,price: 29, description: " Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie"},
{ref: "#R1201" ,price: 30, description: " Lorem texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie"},
{ref: "#R1202" ,price: 35, description: " Le Lorem Ipsum iefhkhz ijzehdsk standard de l'imprimerie"},
{ref: "#R1203" ,price: 33, description: " Le Lorem Ipsum est le faux texte standard de l'imprimerie"} ];


//Exercice 5
const search = (keywords)=>{
    let tab = [];
    if(keywords)
        tab = products.filter(el => el.ref.includes(keywords) || el.description.includes(keywords))
    return tab;
} 





export default {products, search}