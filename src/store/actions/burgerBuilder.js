import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
    error: false,
  };
};

const setIngredient = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};
const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://burgerapp-aaee4.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredient(response.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};

export const buttonRemover = () => {
  return {
    type: actionTypes.BUTTON_REMOVER,
  };
};

export const buttenViewer = () => {
  return {
    type: actionTypes.BUTTON_VEIWER,
  };
};
