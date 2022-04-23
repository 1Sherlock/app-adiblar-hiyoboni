/**
 * Created by Sherlock on 23.04.2022.
 */

import React from 'react';
import styles from "./Photos.module.scss";

const Photos = () => {
    return (
        <div className={styles.photos} id="photos">
            <div className="container">
                <h3 className="font-mak-bold">Rasmlar</h3>

                <div className="row">
                    <div data-aos="fade-in" className="col-md-3">
                        <img src="/assets/images/photo1.png" alt="photo" className="w-100"/>
                    </div>

                    <div data-aos="fade-in" className="col-md-3">
                        <img src="/assets/images/photo2.png" alt="photo" className="w-100"/>
                    </div>

                    <div data-aos="fade-in" className="col-md-3">
                        <img src="/assets/images/photo3.png" alt="photo" className="w-100"/>
                    </div>

                    <div data-aos="fade-in" className="col-md-3">
                        <img src="/assets/images/photo4.png" alt="photo" className="w-100"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photos;