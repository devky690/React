import React, { useContext } from "react";
import Recipe from "./Recipe";
//remember if no export default, u need to destructure!
import { RecipeContext } from "./App";

//if we arent waiting to destructure, destructure
export default function RecipeList({ recipes }) {
  //with useContext we can actually destructure instead
  //of using the whole object...like before with background color
  //we had to utilize the entire style object in the consumer
  const { handleRecipeAdd } = useContext(RecipeContext);

  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  );
}
