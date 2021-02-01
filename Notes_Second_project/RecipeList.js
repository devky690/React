//rfc
import React from "react";
import Recipe from "./Recipe";
//import component we want to pass props to (look at recipe)
//   we use spread operator to get all properties from the recipe
//object which was a property retrived from app component and destructured
//here

//we wait to destructure and use const to desctructure our props passed
//from the app level
export default function RecipeList(props) {
  const { recipes, handleRecipeAdd, handleRecipeDelete } = props;
  return (
    <>
      {/* react needs to know the keys, so react can be more efficient
        when rendering props...instead of rerendering things that dont
        have their state change */}
      <div>
        {/*so now we can use spread operator to get all of recipes properties}
            react doesnt have unique ids, but node will make that for us!
              for react we can use something like uuid if we are dealing with
              actual data, or we can use id of mock data  */}
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              handleRecipeDelete={handleRecipeDelete}
            />
          );
        })}
      </div>
      {/* adding is done to change the state of the entire list, react
        needs to know where things are to add properly 
        however with deletion, we only need to know where that specific element
        is so we dont need the state of the entire list, we just remove that
        specifc recipe

        this is why handleRecipeDelete is passed in to the recipe component
        but not handleRecipeAdd
        */}
      {/* passing prop to an event, we arent prop drilling */}
      <button onClick={handleRecipeAdd}>Add Recipe</button>
    </>
  );
}
