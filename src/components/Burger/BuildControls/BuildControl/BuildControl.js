import React from "react";

import classes from "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.lable}</div>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
    </div>
  );
};

export default BuildControl;
