import React from "react";
import Button from "../../UI/Button/Button";
import Burger from "../../Burger/Burger";
import classes from "./CheckoutSummary.css";
import { connect } from "react-redux";
import Aux from "../../../hoc/Auxillary/Auxillary";

const CheckoutSummary = (props) => {
  let buttons = "";
  if (props.buttonDisp) {
    buttons = (
      <Aux>
        <Button btnType="Danger" clicked={props.cancelled}>
          FOOK OFF THEN
        </Button>
        <Button btnType="Success" clicked={props.continued}>
          GO ON THE
        </Button>
      </Aux>
    );
  }

  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope your taste buds rejoice</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      {buttons}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    buttonDisp: state.burgerBuilder.buttonDisplay,
  };
};

export default connect(mapStateToProps)(CheckoutSummary);
