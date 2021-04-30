import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';
import Logo from "../../components/Logo/Logo"

const Header = ({mClass, cClass, nClass, hbtnClass}) => (
    <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
    <header className="header_area">
    <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
        <div className={`container ${cClass}`}>

            <Logo cLogo="main_logo_ms"/>

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
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                    <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                        <Link to="/team" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Zespół
                        </Link>
                    </li>

                    <li className="dropdown submenu nav-item">
                        <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Oferta</Link>
                        <ul role="menu" className=" dropdown-menu">
                            <li className="nav-item"><NavLink exact title="Service" className="nav-link" to='/Service'>Service</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Service Details" className="nav-link" to='/ServiceDetails'>Service Details</NavLink></li>
                        </ul>
                    </li>
                    <li className="dropdown submenu nav-item">
                        <Link to="./" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Jak działamy</Link>
                        <ul role="menu" className=" dropdown-menu">
                            <li className="nav-item"><NavLink exact title="About" className="nav-link" to='/About'>About</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Process" className="nav-link" to='/Process'>Process</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Team" className="nav-link" to='/Team'>Team</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Price" className="nav-link" to='/Price'>Price</NavLink></li>
                            <li className="nav-item"><NavLink exact title="Faq" className="nav-link" to='/Faq'>Faq</NavLink></li>
                            <li className="nav-item"><NavLink exact title="SignIn" className="nav-link" to='/SignIn'>Sign In</NavLink></li>
                            <li className="nav-item"><NavLink exact title="SignUp" className="nav-link" to='/SignUp'>Sign Up</NavLink></li>
                        </ul>
                    </li>
                    <li className="dropdown submenu nav-item"><Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">Portfolio</Link>
                        <ul role="menu" className=" dropdown-menu">
                            <li className="nav-item"><NavLink title="Portfolio 2" className="nav-link" to='/Portfolio-2col'>Portfolio 2col</NavLink></li>
                            <li className="nav-item"><NavLink title="Portfolio 3" className="nav-link" to='/Portfolio-3col'>Portfolio 3col</NavLink></li>
                            <li className="nav-item"><NavLink title="Portfolio Fullwidth" className="nav-link" to='/Portfolio-fullwidth-4col'>Portfolio fullwidth</NavLink></li>
                            <li className="nav-item"><NavLink title="PortfolioSingle" className="nav-link" to='/PortfolioSingle'>Portfolio Single</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown submenu">
                        <a className="nav-link dropdown-toggle" href=".#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Czytelnia
                        </a>
                        <ul className="dropdown-menu">
                            <li className="nav-item"><NavLink to="/Bloglist" className="nav-link">Blog List</NavLink></li>
                            <li className="nav-item"><NavLink to="/BlogGridPage" className="nav-link">Blog Grid</NavLink></li>
                            <li className="nav-item"><NavLink to="/BlogSingle" className="nav-link">Blog Single</NavLink></li>
                        </ul>
                    </li>
                    <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="/Contact">Kontakt</NavLink></li>
                </ul>
                <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Audyt</a>
            </div>
        </div>
    </nav>
    </header>
</Sticky>

);


export default Header;