import React from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import Intro from '../../components/Intro/FrontView';

const FrontView = () => (
    <div className="body_wrapper">
    <Header cClass="custom_container p0" hbtnClass="new_btn" slogo="main_logo_ms"/>
    <Intro/>

    <h1>Strona główna</h1>
    <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
    Do czego tego użyć?</p>

    <Footer/>
    </div>

);

export default FrontView;