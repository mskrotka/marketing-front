import React from "react";
import { Link } from "react-router-dom";

import logoImageDark from "../../assets/img/logo_michal_swiderski.png";
import logoImageLight from "../../assets/img/logo_michal_swiderski_light.png";


const Logo = ({cLogo, logoType}) => {

    const lType = logoType === "Dark" ? logoImageDark : logoImageLight

    return (
    <Link to="/" className={`sticky_logo navbar-brand ${cLogo}`} alt="Michał Świderski logo">
        <img alt="Michał Świderski logo" src={lType} />
        <img alt="Michał Świderski logo" src={logoImageDark} />
    </Link>
)};


export default Logo;