import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { lable: "Salad", type: "salad" },
  { lable: "Bacon", type: "bacon" },
  { lable: "Cheese", type: "cheese" },
  { lable: "Meat", type: "meat" },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            added={() => props.added(ctrl.type)}
            removed={() => props.removed(ctrl.type)}
            key={ctrl.lable}
            lable={ctrl.lable}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        disabled={!props.purchasable}
        className={classes.OrderButton}
        onClick={props.ordered}
      >
        {props.isAuth ? "ORDER NOW" : "SIGNUP TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
