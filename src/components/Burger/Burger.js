import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
  //-------------------------------------------
  //logic for dynamically adding ingredients
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igkey) => {
      return [...Array(props.ingredients[igkey])].map((_, i) => {
        return <BurgerIngredient key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  //the above logic returns a array of all the ingredients(and the quantity)
  //and then the transformedIngredients array is returned at the end

  //----------------------------------------------
  //to check if there are zero ingredients
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>please start adding ingredients </p>;
  }

  //-------------------------------------------------------
  //returning the ingredients
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
