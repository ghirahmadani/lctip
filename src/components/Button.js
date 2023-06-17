import React from "react";
import "./Button.css";

import { Link } from "react-router-dom";

const Button = (props) => {
    return( 
        <Link to={props.link} className="theme-btn btn-style-one cursor-pointer">
            <span className="btn-title">
            {props.name}</span>
        </Link>
    )
}

export default Button;