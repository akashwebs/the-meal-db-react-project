import React from 'react';
import './Meal.css'
const Meal = ({meal,addToCart}) => {
    const {strMeal,strMealThumb,}=meal
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <button onClick={()=>addToCart(meal)}>info</button>
        </div>
    );
};

export default Meal;