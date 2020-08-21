import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import Contact from "./Contact/Contact";
import * as actions from "../../store/actions/index";

const Checkout = (props) => {
  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };
  const checkoutContinuedHandler = () => {
    props.history.push("checkout/contact-data");
    props.buttonShow();
  };

  let summary = <Redirect to="/" />;
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <div>
        {purchasedRedirect}
        <CheckoutSummary
          continued={checkoutContinuedHandler}
          cancelled={checkoutCancelledHandler}
          ingredients={props.ings}
        />
        <Route path={props.match.path + "/contact-data"} component={Contact} />
      </div>
    );
  }
  return summary;
};
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buttonShow: () => dispatch(actions.buttonRemover()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
