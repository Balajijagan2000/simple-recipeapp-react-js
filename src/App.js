import React,{useEffect,useState} from 'react';
import RecipeTemplate from './Recipe';
import './App.css';
function App() {
  //assigning APP ID and KEY from the EDAMAM 
  const appID = 'f83f98ed';
  const appKEY = '2e18a57d653ca72d4c6e5689d77cc5e7';
  //const request= `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKEY}`;
  

  //state to store the data fetched from the api
  const [recipes,setRecipe] = useState([]);
  const [search,setSearch] = useState("");
  const [RecipeName,setReciepeName] = useState("");
  //called when any changes in the page without refreshing
  //used to fecth the data from the api on page load 
  useEffect(()=> {
      getRecipes();
  },[RecipeName]); 

  //send request to api and getting response
  const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${RecipeName}&app_id=${appID}&app_key=${appKEY}`);
      const recipeData = await response.json();
     
      setRecipe(recipeData.hits);
  };

 const getSearchresult = (e) => {
   e.preventDefault();
   setReciepeName(search);
   setSearch("");
   
 }
 const updateSearch =  (e) => {
    setSearch(e.target.value);
 }
  
  
  return(
      <div className="App">
          <h1>Recipe APP</h1>
          <form name="search" className="search-form" onSubmit={getSearchresult}>
              <input type="text" className="search-bar" value={search} onChange={updateSearch} />
              <button type="submit" className="search-button">Search</button>
          </form>
      <div className="recipe-container">
          {recipes.map( recipe => (
            <RecipeTemplate key= {recipe.recipe.label}
            title={recipe.recipe.label} 
            cal={Math.round(recipe.recipe.calories)+" k/cal"} 
            imgsrc={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}  />
          )
          
          )}
      </div>
      </div> 
  );
}

export default App;
