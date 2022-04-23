/**
 * Created by Sherlock on 23.04.2022.
 */

import React from 'react';
import styles from "./Poets.module.scss";

const Poets = () => {
    return (
        <div className={styles.poets}>
            <div className="container">
                <h3 className="font-mak-bold">Yozuvchilar</h3>

                <div className={styles.poetsItem + " d-flex align-items-center"} data-aos="fade-in">
                    <img src="/assets/images/adib1.png" alt="adib"/>
                    <div>
                        <h4 className="font-mak-bold">Cho’lpon</h4>
                        <p>Choʻlpon Abdulhamid Sulaymon oʻgʻli,
                            asl ismi Abdulhamid Sulaymon oʻgʻli
                            Yunusov — oʻzbek sovet shoiri, yozuvchi,
                            dramaturg va publitsist, yangi oʻzbek
                            sheʼriyati asoschilaridan biri. U o‘z asarlarini tahallus
                            Cho‘lpon bilan imzolagan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poets;