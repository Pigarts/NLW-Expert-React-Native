import { ProductProps } from "@/utils/data/products";
import { ProductCartProps } from "../cart";

export function add(products:ProductCartProps[], newProduct:ProductProps) {
    const existentProduct = products.find((item) => item.id === newProduct.id)
    
    if(existentProduct){

       return products.map((item) => 
       item.id === existentProduct.id    
       ? {...item, quantity: item.quantity + 1} : item
    )
}

return [...products, {... newProduct, quantity: 1}]
}

export function removve(products:ProductCartProps[], productToRemove:string) {
    const updatedProducts = products.map((product) => product.id === productToRemove
     ? 
        {
            ...product, quantity: product.quantity > 1 ? product.quantity - 1 : 0 
        }
     : product)
    
    

return updatedProducts.filter((product) => product.quantity > 0)
}

export function clear(products:ProductCartProps[]) {
    
return products = []
}