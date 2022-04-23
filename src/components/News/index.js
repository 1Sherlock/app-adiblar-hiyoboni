/**
 * Created by Sherlock on 23.04.2022.
 */

import React from 'react';
import styles from "./News.module.scss";

const News = () => {
    return (
        <div className={styles.news} id="news">
            <div className="container">
                <h3 className="font-mak-bold">Yangliklar va Tadbirlar</h3>
                <div className="row">
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.newsCard}>
                            <img src="/assets/images/event1.png" alt="event" className="w-100"/>
                            <div className={styles.newsCardBody}>
                                <h4 className="font-inter-medium">Prezident Adiblar Xiyobonida.</h4>
                                <p>Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo
                                    yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi
                                    O'zbekiston milliy...</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.newsCard}>
                            <img src="/assets/images/event2.png" alt="event" className="w-100"/>
                            <div className={styles.newsCardBody}>
                                <h4 className="font-inter-medium">Prezident Adiblar Xiyobonida.</h4>
                                <p>Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo
                                    yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi
                                    O'zbekiston milliy...</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.newsCard}>
                            <img src="/assets/images/event3.png" alt="event" className="w-100"/>
                            <div className={styles.newsCardBody}>
                                <h4 className="font-inter-medium">Prezident Adiblar Xiyobonida.</h4>
                                <p>Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo
                                    yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi
                                    O'zbekiston milliy...</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.newsCard}>
                            <img src="/assets/images/event4.png" alt="event" className="w-100"/>
                            <div className={styles.newsCardBody}>
                                <h4 className="font-inter-medium">Prezident Adiblar Xiyobonida.</h4>
                                <p>Barchamiz uchun taniqli va sevimli bo‘lgan Adiblar xiyoboni Toshkent shahridagi mutlaqo
                                    yangi va noyob maskanlardan biri hisoblanadi. Ushbu xiyobon Alisher Navoiy nomidagi
                                    O'zbekiston milliy...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;