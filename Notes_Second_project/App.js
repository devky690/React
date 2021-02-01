/* sample recipes is like a database */
/* recipes property is passed to recipeList is a prop and destructured
  so we can use infomation from that prop...ull see in recipelist the
  destructuring */
  import RecipeList from "./RecipeList";
  import React, { useState } from "react";
  import { v4 as uuidv4 } from "uuid";
  import "../css/app.css";
  
  function App() {
    //desctructuring recipes from sampleRecipes after useState returns
    //those values...and setRecipes is returned from useState as well
    //and setRecipes can modify the state...we just need to call it
    const [recipes, setRecipes] = useState(sampleRecipes);
    //handles for click events, good naming convention
    function handleRecipeAdd() {
      const newRecipe = {
        // to get unique indentifier, react always will need this
        //even with no mock data
        id: uuidv4(),
        name: "New",
        servings: 1,
        cookTime: "1:00",
        instruction: "Instr.",
        ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbps" }],
      };
      //we have to get the current state of the array w/ ...recipes then
      //we can add a new recipe to the array
      setRecipes([...recipes, newRecipe]);
    }
  
    function handleRecipeDelete(id) {
      setRecipes(recipes.filter((recipe) => recipe.id !== id));
    }
    return (
      <RecipeList
        // this gets changed from sampleRecipes to recipes because of use state
        //the prop we pass in to the recipes is changing i mean
        recipes={recipes}
        //prop leeds to recipeList
        handleRecipeAdd={handleRecipeAdd}
        //prop leads to recipe component...this is prop drilling(high up parent to child)....use context to fix this if state becomes messy
        handleRecipeDelete={handleRecipeDelete}
      ></RecipeList>
    );
  }
  //this is mock data like a db! array of objects always like db
  const sampleRecipes = [
    {
      id: 1,
      name: "Plain Chicken",
      servings: 3,
      cookTime: "1:45",
      instructions:
        "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
      ingredients: [
        {
          id: 1,
          name: "Chicken",
          amount: "2 Pounds",
        },
        {
          id: 2,
          name: "Salt",
          amount: "1 Tbs",
        },
      ],
    },
    {
      id: 2,
      name: "Plain Pork",
      servings: 5,
      cookTime: "0:45",
      instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
      ingredients: [
        {
          id: 1,
          name: "Pork",
          amount: "3 Pounds",
        },
        {
          id: 2,
          name: "Paprika",
          amount: "2 Tbs",
        },
      ],
    },
  ];
  
  export default App;
  