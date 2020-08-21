import React from "react";

import Aux from "../../../hoc/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
        {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your order</h3>
      <p>A deliciout buger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.cancled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continued}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
