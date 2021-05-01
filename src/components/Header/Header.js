import React from 'react';
import { NavLink } from 'react-router-dom';
import Sticky from 'react-stickynode';


import Logo from "../../components/Logo/Logo"
import Button1 from "../../components/Button/Button"



const Header = ({typeMenu, typeButton}) => {

    const tMenu = typeMenu === "Dark" ? "Dark" : "w_menu"
    const tHamburger = typeMenu === "Dark" ? "dark" : "menu_four"

return (

    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
    <header className="header_area">


    <nav className={`navbar navbar-expand-lg menu_one ${tHamburger}`}>
        <div className="container custom_container p0">

            <Logo cLogo="main_logo_ms" logoType={tMenu}/>

            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="menu_toggle">
                    <span className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <span className="hamburger-cross">
                        <span></span>
                        <span></span>
                    </span>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">



                <ul className={`navbar-nav menu ml-auto ${tMenu}`}>
                    <li className="nav-item"><NavLink title="" className="nav-link" to="/front">Front</NavLink></li>
                    <li className="nav-item"><NavLink title="Ludzie z doświadczeniem" className="nav-link" to="/team">Zespół</NavLink></li>

                    <li className="dropdown submenu nav-item">
                        <NavLink to="/offer" title="Co możemy dla Ciebie zrobić?" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Oferta</NavLink>
                        <ul role="menu" className=" dropdown-menu">
                            <li className="nav-item"><NavLink exact title="Service" className="nav-link" to='/Service'>Fundamenty marki</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Service Details" className="nav-link" to='/ServiceDetails'>Narzędzia</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Service Details" className="nav-link" to='/ServiceDetails'>Komunikacja</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Service Details" className="nav-link" to='/ServiceDetails'>Analiza</NavLink></li>
                        </ul>
                    </li>

                    <li className="nav-item"><NavLink title="Opis procesu twórczego" className="nav-link" to="/how-work">Jak działamy</NavLink></li>
                    <li className="nav-item"><NavLink title="Zobacz czego dokonaliśmy" className="nav-link" to="/portfolio">Portfolio</NavLink></li>
                    <li className="nav-item"><NavLink title="Zasięgnij wiedzy" className="nav-link" to="/blog">Czytelnia</NavLink></li>
                    <li className="nav-item"><NavLink title="Najczęściej zadawane pytania" className="nav-link" to="/faq">FAQ</NavLink></li>
                    <li className="nav-item"><NavLink title="Skontaktuj się z nami" className="nav-link" to="/contact">Kontakt</NavLink></li>
                </ul>

                <Button1 Type={typeButton} Url="#" Text="Audyt"/>

            </div>
        </div>
    </nav>

    </header>
</Sticky>

)};


export default Header;