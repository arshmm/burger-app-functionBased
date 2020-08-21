import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.css";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <NavLink
        onClick={props.clicked}
        activeClassName={classes.active}
        to={props.link}
        exact={props.exact}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
