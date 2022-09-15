import React from "react";
import Card from "react-bootstrap/Card";
// import IngredientList from "./IngredientList";
// import "../App.css";

function matchIngredients(ingredientsInRecepies, ingredientsAll) {
  return ingredientsInRecepies.map((oneIngredient) => {
    return ingredientsAll.find(
      (singleRecipe) => singleRecipe.id === oneIngredient.id
    ).name;
  });
}

function Recipe(props) {
  const ingredientsMatched = matchIngredients(
    props.recipe.ingredients,
    props.allIngredients
  );

  return (
    <Card>
      <Card.Body>
        <div className="single-meal">
          <img
            className="food-image"
            src={props.recipe.imgUri}
            alt="recipe result"
          ></img>
          <h1 className={props.isLarge ? "title" : "title-small"}>
            {props.recipe.name}{" "}
          </h1>
          <Card.Text>
            {props.isLarge ? (
              <p className="text-truncate">{props.recipe.description}</p>
            ) : (
              <p>{props.recipe.description}</p>
            )}
          </Card.Text>
          <ul>
            {ingredientsMatched.map((singleIngredient) => {
              return <li>{singleIngredient}</li>;
            })}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
