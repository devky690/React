import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";
import { v4 as uuidv4 } from "uuid";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  //all of our inputs need to do this!
  function handleChange(changes) {
    //   never overwrite props and states directly! unless you have a very
    //good reason to do so! keep program consistent
    // recipe.name = 'New Name' (BAD)
    //better to do object destructuring which will create a new
    //object and that new object will affect the state of our recipe
    //and itll get automatically updated...just the way of react
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }
  //created a helper function so when we click edit...in form you will
  //see new name in browser...always need helper functions with forms
  //   handleChange({ name: e.target.value }) look below directly in the
  //form...not talking about code directly below

  function handleIngredientChange(id, ingredient) {
    //   its not actually new, just updating anew
    //need to create copy of object, done automatically with
    //destructuring, just that we need to store that
    const newIngredients = [...recipe.ingredients];
    //need to find the id of ingredient to be changed in the array
    const index = newIngredients.findIndex((i) => i.id === id);
    //getting id to modify the ingredient anew
    newIngredients[index] = ingredient;
    // changing ingredients array with new ingredients
    //because we shouldnt change state directly
    //and we have to propogate that up to handleRecipeChange function with
    //the handle change function
    //because once we change the ingredient the recipe state should be changed
    //as well...without the handlechange just changes the ingredients state

    //changes to ingredient are also changes to recipe! handlechange
    //helper is good to use for forms because you plan to change
    //the form ...handleChange would have been called from
    //the recipeingredientsedit
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuidv4(),
      name: "",
      amount: "",
    };
    handleChange({ ingredients: [...recipe.ingredients] });
  }

  function handleIngredientDelete(id) {
    handleChange({
        // want to filter out elements that dont have the id
        //since we are deleting ingredient with that id 
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }
  return (
    <div className="recipe-edit">
      <div>
        {/* removes the add recipe by setting undefined  */}
        <button onClick={() => handleRecipeSelect(undefined)}>
          {/* &times is just the x button */}
          &times;
        </button>
      </div>

      {/* htmlFor for jsx */}
      <label htmlFor="name">Name</label>
      {/* to change value for forms we need onChange event            e.target.value for forms */}
      <input
        type="text"
        name="name"
        id="name"
        value={recipe.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <label htmlFor="cookTime">{recipe.cookTime}</label>
      <input
        type="text"
        name="cookTime"
        id="cookTime"
        onInput={(e) => handleChange({ cookTime: e.target.value })}
      />
      <label htmlFor="servings">Servings</label>
      <input
        type="number"
        min="1"
        name="servings"
        id="servings"
        value={recipe.servings}
        //   servings is actually a number, so we just parseInt so
        // we dont get a string...
        //use empty string, so we dont get NaN when there is no serving in
        //form
        onInput={(e) =>
          handleChange({ servings: parseInt(e.target.value) }) || ""
        }
      />
      <label htmlFor="instructions">Instructions</label>
      {/* with textarea, when we pass a value, or change state
      of textarea, in react in particular we should make textarea 
      self close or else we will get additional text in unwanted area */}
      <textarea
        name="instructions"
        id="instructions"
        value={recipe.instructions}
        // remember e.target.value is based on the id in the form
        onInput={(e) => handleChange({ instructions: e.target.value })}
      />

      <br />
      <label>Ingredients</label>
      <div>
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            // passing as a prop because there is no intermediary
            //props are from the parent...props cant be passed up
            //in react, just down

            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete ={handleIngredientDelete}
            ingredient={ingredient}
          />
        ))}
      </div>
      <div>
        <button onClick={() => handleIngredientAdd()}>Add Ingredient</button>
      </div>
    </div>
  );
}
