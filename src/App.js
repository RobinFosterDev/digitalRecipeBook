import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipes';

const App = () => {
  const APP_ID = '420135a0';
  const APP_KEY = '157fbf5ab78daae9bdfcf9aaa4ef51bd';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = event => {
    setSearch(event.target.value);
    console.log(search);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search)
  }
  
  return (
    <div className="App">
      <h1>Recipe Time</h1>
      <form className = "searchForm" onSubmit={getSearch}> 
        <input type="text" className="searchBar" onChange={updateSearch}></input>
        <button type="submit" className="submitButton" value={search} >Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} ingredients={recipe.recipe.ingredientLines} method={recipe.recipe.method} image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
