/**
 * Created by Sherlock on 23.04.2022.
 */

import React from 'react';
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className="d-flex justify-content-between align-items-center">
                <a href="#">
                    <img src="/assets/icons/logo.svg" alt="logo"/>
                </a>
                <ul className="nav">
                    <li className="nav-item"><a href="#" className="nav-link">Asosiy</a></li>
                    <li className="nav-item"><a href="#news" className="nav-link">Yangiliklar</a></li>
                    <li className="nav-item"><a href="#books" className="nav-link">Kitoblar</a></li>
                    <li className="nav-item"><a href="#photos" className="nav-link">Rasmlar</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;