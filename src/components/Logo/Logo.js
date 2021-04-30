import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../assets/img/logo_michal_swiderski.png";


const Logo = ({cLogo}) => (
    <Link to="/" className={`${cLogo}`} alt="Michał Świderski logo">
        <img alt="Michał Świderski logo" src={logoImage} />
    </Link>
);


export default Logo;