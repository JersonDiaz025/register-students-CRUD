// import React, { Component } from "react";
// import { Route, Switch, Link, Redirect } from "react-router-dom";

// const ProctedRoute = ({ component: Comp, isloggedIn, path, ...rest }) => {
//     console.log(rest);
//     return (
//         <Route
//             path={path}
//             {...rest}
//             render={ (props) => {
//                 return isloggedIn ? <Comp {...props}/> : <Redirect to='/'/>
//             }}


//         />

//     )
// }

// export default ProctedRoute;
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProctedRoute(props) {
  const isloggedIn = props;
  return isloggedIn ? <Outlet /> : <Navigate to="/signIn"/>
}
export default ProctedRoute;
