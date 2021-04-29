import React from 'react';
import styles from './CommingSoon.module.scss';
import logoImage from '../../assets/images/logo_michal_swiderski.png';
import { FaLinkedin, FaFacebookSquare, FaMailBulk, FaGoogleDrive } from 'react-icons/fa'

const CommingSoon = () => (
    <div className={styles.wrapper}>
        <div className={styles.logo}>
            <a href="/">
                <img alt="Michał Swiderski logo" src={logoImage} />
            </a>
        </div>
        <div className={styles.text}>
            <h2>Strona w budowie</h2>
            <p>Dobry czas na reorganizację.</p>
        </div>
        <div className={styles.social}>
            <a href="https://www.linkedin.com/in/michal-swiderski/" target="_blank">
                <FaLinkedin className={styles.Icon}/>
            </a>
            <a href="https://www.facebook.com/michal.michal.happy/" target="_blank">
                <FaFacebookSquare className={styles.Icon}/>
            </a>

            <span className={styles.border}></span>

            <a href="http://poczta.michal-swiderski.pl" target="_blank">
                <FaMailBulk className={styles.Icon}/>
            </a>
            <a href="http://dysk.michal-swiderski.pl" target="_blank">
                <FaGoogleDrive className={styles.Icon}/>
            </a>

        </div>
        <div className={styles.copyright}>
            Michał Świderski ©2021
        </div>
    </div>
);

export default CommingSoon;