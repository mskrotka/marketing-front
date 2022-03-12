import React from 'react';
import styles from './CommingSoon.module.scss';
import logoImage from '../../assets/images/logo_michal_swiderski.png';
import { FaLinkedin, FaFacebookSquare, FaMailBulk, FaGoogleDrive } from 'react-icons/fa'


const current = new Date();
const date = `${current.getFullYear()}`;


const CommingSoon = () => (
    <div className={styles.wrapper}>
        <div className={styles.logo}>
            <a href="/">
                <img alt="Michał Swiderski logo" src={logoImage} />
            </a>
        </div>
        <div className={styles.text}>
           
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
            Michał Świderski ©2013 - {date}
        </div>
    </div>
);

export default CommingSoon;