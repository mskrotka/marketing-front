import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ContactForm from "../../components/ContactForm/ContactForm"


const ContactView = () => (
    <div className="body_wrapper">
    <Header typeMenu="Light" typeButton="Revers"/>
    <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="banner_bg.png" Ptitle="Kontakt" Pdescription="Jakiś tekst"/>
    <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
    Do czego tego użyć?</p>

    <ContactForm/>

    <Footer/>
    </div>
);


export default ContactView;