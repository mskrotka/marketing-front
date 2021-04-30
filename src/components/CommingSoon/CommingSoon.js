import React from 'react';

import styles from "./CommingSoon.module.scss"
import { FaLinkedin, FaFacebookSquare, FaMailBulk, FaGoogleDrive } from 'react-icons/fa';

import Logo from "../../components/Logo/Logo"



const CommingSoon = () => (
    <div className={styles.wrapper}>
        <div className={styles.logo}>
        <Logo/>
        </div>
        <div className={styles.text}>
            <h2>Strona w budowie</h2>
            <p>Dobry czas na reorganizację.</p>
        </div>
        <div className={styles.social}>
            <a href="https://www.linkedin.com/in/michal-swiderski/" target="_blank" rel="noreferrer">
                <FaLinkedin className={styles.Icon}/>
            </a>
            <a href="https://www.facebook.com/michal.michal.happy/" target="_blank" rel="noreferrer">
                <FaFacebookSquare className={styles.Icon}/>
            </a>

            <span className={styles.border}></span>

            <a href="http://poczta.michal-swiderski.pl" target="_blank" rel="noreferrer">
                <FaMailBulk className={styles.Icon}/>
            </a>
            <a href="http://dysk.michal-swiderski.pl" target="_blank" rel="noreferrer">
                <FaGoogleDrive className={styles.Icon}/>
            </a>

        </div>
        <div className={styles.copyright}>
            Michał Świderski ©2021
        </div>
    </div>
);

export default CommingSoon;