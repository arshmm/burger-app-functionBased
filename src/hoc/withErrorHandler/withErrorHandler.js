import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxillary/Auxillary";

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);

    const reqInter = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    const resInter = axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        setError(error);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInter);
        axios.interceptors.response.eject(resInter);
      };
    }, [reqInter, resInter]);

    const errorConfirmedHandler = () => {
      setError(null);
    };
    return (
      <Aux>
        <Modal modalClosed={errorConfirmedHandler} show={error}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErrorHandler;
