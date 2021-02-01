import React from "react";

//destructuring property (prop) that came from recipelist
//so its like objects are properties to the component level they are on
//but when we go to the component the pop is passed to, they can be destructured
//and go into function parameter
export default function Recipe(props) {
  //we waited to destructure so we can make things easier to read
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    handleRecipeDelete,
  } = props;
  return (
    <>
      <div>
        <h3>Plain Chicken</h3>
        <div>
          <button>Edit</button>
          <button onClick={() => handleRecipeDelete(id)}>Delete</button>
        </div>
      </div>
      <div>
        <span>Name:</span>
        <span>{name}</span>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>ingredients:</span>
        <div>{ingredients}</div>
      </div>
    </>
  );
}
