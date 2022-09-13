import React from "react";
import Card from "react-bootstrap/Card";

function Recipe(props) {
  return (
    <Card>
      <Card.Body style={{ padding: 0 }}>
        <div className="single-meal">
          <img className="meal-img" src={props.recipe.imgUri} alt="recipe result"></img>
          <h1 className="title">{props.recipe.name} </h1>
          <p className="description">{props.recipe.description} </p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Recipe;
