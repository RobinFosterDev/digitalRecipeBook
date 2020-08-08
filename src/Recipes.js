import React from 'react';


const Recipe = ({title, ingredients, image}) => {
    return(
        <div className='recipe'>
            <h1>{title}</h1>
            <img src={image} alt="" className='recipeImage'></img>
            <h2>Ingredients</h2>
            <p>{ingredients}</p>
        </div>
    )
};

export default Recipe;