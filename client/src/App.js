import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeList from "./bricks/RecipeList";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Outlet, useNavigate } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import styles from "./css/classroom.module.css";

function App() {
  const [cookbookLoadCall, setCookbookLoadCall] = useState({
    state: "pending",
  });
  const [ingredientsLoadCall, setIngredientsLoadCall] = useState({
    state: "pending",
  });

  useEffect(() => {
    fetch(`http://localhost:3000/recipe/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setCookbookLoadCall({ state: "error", error: responseJson });
      } else {
        setCookbookLoadCall({ state: "success", data: responseJson });
      }
    });
  }, []);



  useEffect(() => {
    fetch(`http://localhost:3000/ingredient/list`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setIngredientsLoadCall({ state: "error", error: responseJson });
      } else {
        setIngredientsLoadCall({ state: "success", data: responseJson });
      }
    });
  }, []);

  function getChild() {
    const isPending =
      cookbookLoadCall.state === "pending" ||
      ingredientsLoadCall.state === "pending";
    const isLoaded =
      cookbookLoadCall.state === "success" ||
      ingredientsLoadCall.state === "success";
    const isError =
      cookbookLoadCall.state === "error" ||
      ingredientsLoadCall.state === "error";

    if (isPending) {
      return (
        <div className={styles.loading}>
          <Icon size={2} path={mdiLoading} spin={true} />
        </div>
      );
    } else if (isLoaded) {
      return (
        <>
          <RecipeList
            recipeList={cookbookLoadCall.data}
            allIngredients={ingredientsLoadCall.data}
          />
        </>
      );
    } else if (isError) {
      return (
        <div cookbook={styles.error}>
          <div>Nepodařilo se načíst data o třídě.</div>
          <br />
          <pre>{JSON.stringify(cookbookLoadCall.error, null, 2)}</pre>
        </div>
      );
    } else {
      return null;
    }
  }

  return <div className="App">{getChild()}</div>;
}

export default App;
