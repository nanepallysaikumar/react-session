import React from "react";
import {products} from './Products';
import {ProductCard} from './ProductCard';


const filteredProductBasedOnSearchTerm = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase();

    return products.filter(list => {
        let str = `${list.title} ${list.style} ${list.sku}`.toUpperCase();
        return str.indexOf(searchTerm) >= 0; // returns boolean if satisfied && trying to check if the string which is created for a product
        // and trying to match with the search term
    })
}


export const ProductList = ({searchTerm}) => {
    const filteredProducts = filteredProductBasedOnSearchTerm(searchTerm)
    return(
        <div>
            <h3>List of Products.....</h3>
            <div>
                {
                   filteredProducts.length > 0 ?  filteredProducts.map(product => {
                        return(<ProductCard  key={product.sku} {...product}/>)
                    }) : "Sorry.... we could not able to find the products for the given search criteria.."
                }
            </div>
        </div>
    )
}