import React from "react";
import Card from "react-bootstrap/Card";
// import "../App.css";

function Recipe(props) {

 

  return (
    <Card className={props.isLarge ? 'card' : 'card-small'}>
      <Card.Body>
        <div className={props.isLarge ? 'single-meal' : 'single-meal-small'}>
          <img className={props.isLarge ? 'food-image' : 'food-image-small'} src={props.recipe.imgUri} alt="recipe result"></img>
          <h1 className={props.isLarge ? 'title' : 'title-small'}>{props.recipe.name} </h1>
          <p className={props.isLarge ? 'description' : 'description-small'}>{props.recipe.description} </p>
          
        </div> 
      </Card.Body>
    </Card>
  );
}

export default Recipe;

