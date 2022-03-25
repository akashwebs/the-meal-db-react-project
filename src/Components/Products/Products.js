import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Products.css'

const Products = () => {

const [prodcuts, setProducts]=useState([]);
const [cartBox, setCartBox]=useState([]);

useEffect(()=>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res=>res.json())
    .then(data=>setProducts(data.meals));
},[])

const addToCart=selectdProduct=>{
    
    const checkNewProductInCart=cartBox.find(product=>product.idMeal===selectdProduct.idMeal);
   
    if(!checkNewProductInCart){
        selectdProduct['count']=1;
        const newCart=[...cartBox, selectdProduct]
        setCartBox(newCart)
    }else{
        selectdProduct['count']+=1;
        
    }
}
// console.log(cartBox)
    return (
        <div className='products-coantienr'>
            <div className='products'>
            {
                prodcuts.map((product,index)=> <Meal 
                meal={product} 
                key={index}
                addToCart={addToCart}
                ></Meal>)
            }
            </div>
            <div className='info'>
            <h3>Cart box</h3>
            {
                cartBox.map((product,index)=>
                
                    <p key={index}>
                        {product.strMeal} 
                        <sup key={product.idMeal}>
                            {product["count"]}
                        </sup>
                    </p>
               )
            }
            </div>
        </div>
        
    );
};

export default Products;