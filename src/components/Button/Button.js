import React from "react";
import { Link } from "react-router-dom";

const Button = ({Type, Url, Text}) => {

    const tButton = Type === "Revers" ? "revers" : "a"

    return (
    <Link className={`btn_get btn_hover new_btn ${tButton}`} href={Url}>{Text}</Link>

)};

export default Button;
