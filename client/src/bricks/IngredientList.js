import React from "react";

function IngredientList(props) {
  function getIngredients() {
    return props.allIngredients.map((ingredient) => {
      return (
        <ul>
          <li>{ingredient.name}</li>
        </ul>
      );
    });
  }

  return <div>{getIngredients()}</div>;
}

export default IngredientList;

