import React from 'react';
import Reveal from 'react-reveal/Reveal/';

import Header from '../../components/Header/Header';


const FrontView = () => (
    <div className="body_wrapper">
    <Header cClass="custom_container p0" hbtnClass="new_btn"/>


    <section className="seo_home_area">
            <div className="home_bubble">
                <div className="bubble b_one"></div>
                <div className="bubble b_two"></div>
                <div className="bubble b_three"></div>
                <div className="bubble b_four"></div>
                <div className="bubble b_five"></div>
                <div className="bubble b_six"></div>
                <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={require('../../assets/images/seo/triangle_one.png')} alt=""/></div>
                <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={require('../../assets/images/seo/triangle_two.png')} alt=""/></div>
                <div className="triangle b_nine"><img src={require('../../img/seo/triangle_three.png')} alt=""/></div>
            </div>
            <div className="banner_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center seo_banner_content">
                            <Reveal effect="fadeInUp" duration={500}><h2>Drive More Customers<br/> Through Digital</h2></Reveal>
                            <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">Chap fantastic skive off chancer knees up starkers easy peasy up the<br/> kyver David, bleeding the BBC tomfoolery chimney.!</p></Reveal>
                            <Reveal effect="fadeInLeft" duration={1200}><a href="./" className="seo_btn seo_btn_one btn_hover wow fadeInLeft">Get Started</a></Reveal>
                            <Reveal effect="fadeInLeft" duration={1200}><a href="./" className="seo_btn seo_btn_two btn_hover wow fadeInRight">Learn More</a></Reveal>
                        </div>
                    </div>
                    <div className="saas_home_img">
                        <Reveal effect="fadeInUp" duration={1400}><img src={require('../../assets/images/seo/image.png')} alt=""/></Reveal>
                    </div>
                </div>
            </div>
        </section>



    <h1>Strona główna</h1>
    <h1>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
    Do czego tego użyć?

    Ogólnie znana teza głosi, iż użytkownika może rozpraszać zrozumiała zawartość strony, kiedy ten chce zobaczyć sam jej wygląd. Jedną z mocnych stron używania Lorem Ipsum jest to, że ma wiele różnych „kombinacji” zdań, słów i akapitów, w przeciwieństwie do zwykłego: „tekst, tekst, tekst”, sprawiającego, że wygląda to „zbyt czytelnie” po polsku. Wielu webmasterów i designerów używa Lorem Ipsum jako domyślnego modelu tekstu i wpisanie w internetowej wyszukiwarce ‘lorem ipsum’ spowoduje znalezienie bardzo wielu stron, które wciąż są w budowie. Wiele wersji tekstu ewoluowało i zmieniało się przez lata, czasem przez przypadek, czasem specjalnie (humorystyczne wstawki itd).

    Skąd się to wzięło?

    W przeciwieństwie do rozpowszechnionych opinii, Lorem Ipsum nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed Chrystusem, czyli ponad 2000 lat temu! Richard McClintock, wykładowca łaciny na uniwersytecie Hampden-Sydney w Virginii, przyjrzał się uważniej jednemu z najbardziej niejasnych słów w Lorem Ipsum – consectetur – i po wielu poszukiwaniach odnalazł niezaprzeczalne źródło: Lorem Ipsum pochodzi z fragmentów (1.10.32 i 1.10.33) „de Finibus Bonorum et Malorum”, czyli „O granicy dobra i zła”, napisanej właśnie w 45 p.n.e. przez Cycerona. Jest to bardzo popularna w czasach renesansu rozprawa na temat etyki. Pierwszy wiersz Lorem Ipsum, „Lorem ipsum dolor sit amet...” pochodzi właśnie z sekcji 1.10.32.

    Standardowy blok Lorem Ipsum, używany od XV wieku, jest odtworzony niżej dla zainteresowanych. Fragmenty 1.10.32 i 1.10.33 z „de Finibus Bonorum et Malorum” Cycerona, są odtworzone w dokładnej, oryginalnej formie, wraz z angielskimi tłumaczeniami H. Rackhama z 1914 roku.
    Skąd to wziąć?

    Jest dostępnych wiele różnych wersji Lorem Ipsum, ale większość zmieniła się pod wpływem dodanego humoru czy przypadkowych słów, które nawet w najmniejszym stopniu nie przypominają istniejących. Jeśli masz zamiar użyć fragmentu Lorem Ipsum, lepiej mieć pewność, że nie ma niczego „dziwnego” w środku tekstu. Wszystkie Internetowe generatory Lorem Ipsum mają tendencje do kopiowania już istniejących bloków, co czyni nasz pierwszym prawdziwym generatorem w Internecie. Używamy zawierającego ponad 200 łacińskich słów słownika, w kontekście wielu znanych sentencji, by wygenerować tekst wyglądający odpowiednio. To wszystko czyni „nasz” Lorem Ipsum wolnym od powtórzeń, humorystycznych wstawek czy niecharakterystycznych słów.</h1>
    </div>
);

export default FrontView;