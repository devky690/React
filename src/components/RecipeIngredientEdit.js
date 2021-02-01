import React from "react";

//if destructuring later use const and pass props
//just makes easier to read
export default function RecipeIngredientEdit(props) {
  //not saying equals! we are just abstracting! from our prop passed
  //in from parent
  const { ingredient, handleIngredientChange, handleIngredientDelete } = props;

  function handleChange(changes) {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes });
  }
  //   we have a form here so lets you handleChange helper again
  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        onInput={(e) => handleChange({ name: e.target.value })}
      />
      <input
        type="text"
        value={ingredient.amount}
        onInput={(e) => handleChange({ amount: e.target.value })}
      />
      <button onClick={()=>handleIngredientDelete(ingredient.id)}>&times;</button>
    </>
  );
}
