import React from "react";
import "./BodyContainer.css";

const BodyContainer = props => 
<div className="bodycontainer">
    {props.children}
</div>;

export default BodyContainer;