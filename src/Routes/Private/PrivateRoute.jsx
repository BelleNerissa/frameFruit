import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import StoreContext from "../../redux/Login/Context";

const RoutesPriavte = ({ component: Component, ...rest }) => {
  const { token } = useContext(StoreContext);
  return (
    <Route
      {...rest}
      render={() =>
        token ? <Component {...rest} /> : <Redirect to="/login" />
      }
    />
  );
};

export default RoutesPriavte;