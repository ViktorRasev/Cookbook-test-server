import React from "react";
import Recipe from "./Recipe";
import "../App.css";

function RecipeGridList(props) {
  // console.log(props.allIngredients)
  return (
    <div class="row">
      {props.recipeList.map((recipe) => {
        return (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Recipe
              isLarge={props.isLargeProp}
              key={recipe.name}
              recipe={recipe}
              allIngredients={props.allIngredients}
            />
          </div>
        );
      })}
      ;
    </div>
  );
}

export default RecipeGridList;
