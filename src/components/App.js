import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";

//use context when you have alot of intermidiary props passed that
//arent being used by that component, with context you can remove that

//1 we create our context so we can
//provide state to other components directly

//2 we use usestate so we can manage state
//3 we pass old props to now be contextValues which are still
//props but just now can be applied directly instead of prop drilling
//4) provide context to components under the app level
//

//need to export so other components can use
export const RecipeContext = React.createContext();
//have a local storage key...you can see this in browser...
//you can set this to be anything
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";
//local storage makes users changes persistant across refreshes and
//when the user comes back at a later date

function App() {
  // by default we dont want give useState a default value because
  //the user wouldnt have selected anything
  const [selectedRecipeId, setSelectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  //if there is no selected recipe we would get undefined value so we
  //know there is no selected recipe
  const selectedRecipe = recipes.find(
    (recipe) => recipe.id === selectedRecipeId
  );

  //getting the local storage, because how could you add to something you
  //dont have
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  //inspect to view local storage...should be in application

  //setting the local storage

  //useEffect allows us to save item to ui utilizing local storage
  useEffect(() => {
    //local storage can only support strings, so convert to string
    //with stingify
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));

    //second parameter of useEffect, you can pass multiple things in here
    //empty brackets mean as soon as component loads, only run useEffect once
    //or we can add dependancies by adding to the second parameter and inside
    //that array
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
  };

  //creating a function with handle event even though we didnt need to
  //this is for keeping consistent code as we had handle for all our other
  //events
  function handleRecipeSelect(id) {
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [{ id: uuidv4(), name: "", amount: "" }],
    };

    //this is so that for the newRecipe being added we can see
    //the changes as we type...setSelectedRecipeId
    setSelectedRecipeId(newRecipe.id);
    setRecipes([...recipes, newRecipe]);
  }
  //first passed handlers as props to child component then
  //propogating handlers with handleChange for handleIngredientChange and
  //or handleRecipeChange (starting from the bottom and working up to)
  //the app where this function is called and the useState above managing
  //the state will be called...you need handle changes with forms since
  //thats our helper which can see if a form has been changed
  function handleRecipeChange(id, recipe) {
    //react doesnt allow you to change state, we need to create a duplicate of
    //our old state to eventually "modify" it indirectly
    const newRecipes = [...recipes];
    //we find id of recipe so we can index it
    const index = newRecipes.findIndex((r) => r.id === id);
    //we then index the being changed (not creating new recipe!)
    //just modifiying anew...we are finding index(id)...basically position
    //of recipe passed in
    newRecipes[index] = recipe;
    //creating copy of object to update state, and react is okay with that!
    setRecipes(newRecipes);
  }

  function handleRecipeDelete(id) {
    //we dont need to get rid of the id, but it just makes it error free
    //if eventually a recipe got the free id that doesnt belong to a
    //recipe anymore

    //if you are deleting recipe you currently selected 
    if(selectedRecipeId != null && selectedRecipeId === id){
      setSelectedRecipeId(undefined);
    }
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      {/* can remove all props except the prop containing data */}
      <RecipeList recipes={recipes} />
      {/* selectedRecipe undefined means that recipeEdit wouldnt be
      render...*/}
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  );
}

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
