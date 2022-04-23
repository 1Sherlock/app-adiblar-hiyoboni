/**
 * Created by Sherlock on 23.04.2022.
 */

import React from 'react';
import styles from "./Header.module.scss";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <h2 className="font-inter-medium">Adabiyot xalqning yuragi, <br/>
                    elning maʼnaviyatini ko‘rsatadi. </h2>
                <p className="font-inter-medium">Shavkat Mirziyoyev</p>
                <p className="font-inter-medium">O’zbekiston Respublikasi Prezidenti</p>
                <div className={styles.layer}/>
            </div>
        </div>
    );
};

export default Header;