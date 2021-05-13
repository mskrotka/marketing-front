import React, { useEffect, useState }  from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";


const BlogView = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`http://54.195.42.14/api_v1/articles/`)
            .then((res) => res.json())
            .then((res) => setPosts(res))
    }, [])

    const currentPosts = posts;

    return (
    <div className="body_wrapper">
    <Header typeMenu="Light" typeButton="Revers"/>
    <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="banner_bg.png" Ptitle="Czytelnia" Pdescription="Jakiś tekst"/>


    <ul className="helpToWrapperList">
        {currentPosts.map(el => <li><p className="helpToWrapperListName">{el.title}</p> {el.description}<br /><hr /></li>)}
    </ul>

    <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker
    Do czego tego użyć?</p>
    <Footer/>
    </div>
)};


export default BlogView;