import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipes';

const App = () => {
  const APP_ID = '420135a0';
  const APP_KEY = '157fbf5ab78daae9bdfcf9aaa4ef51bd';

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes();
  }, []);



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }


  return (
    <div className="App">
      <h1>Recipe Time</h1>
      <form className = "searchForm"> 
        <input type="text" className="searchBar"></input>
        <button type="submit" className="submitButton">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} ingredients={recipe.recipe.ingredientLines} method={recipe.recipe.method} image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
