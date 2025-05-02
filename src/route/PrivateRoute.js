import React from 'react';
import ProductView from "../page/ProductView";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({auth}) => {
    return auth ? <ProductView/> : <Navigate to="/login"/>;
};

export default PrivateRoute;