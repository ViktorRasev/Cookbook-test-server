import React from "react";
import Recipe from "./Recipe";
import "../App.css";

function RecipeGridList(props) {
  return props.recipeList.map((recipe) => {
    return <Recipe isLarge={props.isLargeProp} key={recipe.name} recipe={recipe} />;
  });
}

export default RecipeGridList;