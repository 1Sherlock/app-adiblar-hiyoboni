/**
 * Created by Sherlock on 23.04.2022.
 */
import React from 'react';
import styles from "./Books.module.scss"
const Books = () => {
    return (
        <div className={styles.books} id="books">
            <div className="container">
                <h3 className="font-mak-bold">Kitoblar</h3>

                <div className="row">
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.booksItem}>
                            <img src="/assets/images/book1.png" alt="book" className="w-100"/>
                            <h4 className="font-inter-medium">Beparvolikning nozik san'ati</h4>
                            <p className="font-inter-medium">Mark Menson</p>
                            <h5 className="font-inter-medium">37 000 UZS</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn">Sotib olish</button>
                                <span className="icon icon-heart"/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.booksItem}>
                            <img src="/assets/images/book2.png" alt="book" className="w-100"/>
                            <h4 className="font-inter-medium">Essentsializm</h4>
                            <p className="font-inter-medium">Greg Makkeon</p>
                            <h5 className="font-inter-medium">40 000 UZS</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn">Sotib olish</button>
                                <span className="icon icon-heart"/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.booksItem}>
                            <img src="/assets/images/book3.png" alt="book" className="w-100"/>
                            <h4 className="font-inter-medium">Morrining seshanba darslari</h4>
                            <p className="font-inter-medium">Mich Elbom</p>
                            <h5 className="font-inter-medium">38 000 UZS</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn">Sotib olish</button>
                                <span className="icon icon-heart"/>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-in" className="col-md-3">
                        <div className={styles.booksItem}>
                            <img src="/assets/images/book4.png" alt="book" className="w-100"/>
                            <h4 className="font-inter-medium">Asl otalar kitobi</h4>
                            <p className="font-inter-medium">Jalolxon Umarov</p>
                            <h5 className="font-inter-medium">30 000 UZS</h5>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn">Sotib olish</button>
                                <span className="icon icon-heart"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
