import React from 'react';
import Reveal from 'react-reveal/Reveal/';


const Breadcrumb = ({Ptitle, Pdescription, breadcrumbClass, imgName}) => (
    <section className={`${breadcrumbClass}`}>

        <div className="container">
            <div className="breadcrumb_content text-center">
                <Reveal effect="fadeInUp"><h1 className="f_p f_700 f_size_50 w_color l_height50 mb_20">{Ptitle}</h1></Reveal>
                <p className="f_400 w_color f_size_16 l_height26">{Pdescription}</p>
            </div>
        </div>
    </section>
);

export default Breadcrumb;