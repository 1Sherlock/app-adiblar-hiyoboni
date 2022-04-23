/**
 * Created by Sherlock on 23.04.2022.
 */

import React from 'react';
import styles from "./Footer.module.scss";
const Footer = () => {
    return (
        <div className={styles.footer}>
           <div className="container">
               <div className="row">
                   <div className="col-md-4">
                       <img src="/assets/images/logo-footer.svg" alt="logo"/>
                       <div>
                           <a href="https://facebook.com" target="_blank"><span className="icon icon-facebook"/></a>
                           <a href="https://twitter.com" target="_blank"><span className="icon icon-twitter mx-3"/></a>
                           <a href="https://instagram.com" target="_blank"><span className="icon icon-instagram me-3"/></a>
                           <a href="https://telegram.org" target="_blank"><span className="icon icon-telegram"/></a>
                       </div>
                   </div>
                   <div className="col-md-4">
                       <div className={styles.info + " d-flex"}>
                           <div>
                               <span className="icon icon-location" />
                           </div>
                           <div>
                               Toshkent shahar, Yunusobod
                               tumani, Minor mavzesi,
                               Osiyo ko'chasi (Xurshid), 86A
                           </div>
                       </div>
                       <div className={styles.info + " d-flex"}>
                           <div>
                               <span className="icon icon-mail" />
                           </div>
                           <div>
                               info.vitc.uz
                           </div>
                       </div>
                       <div className={styles.info + " d-flex"}>
                           <div>
                               <span className="icon icon-quloq" />
                           </div>
                           <div>
                               (78) 207 92 93
                           </div>
                       </div>
                   </div>
                   <div className="col-md-2 ms-auto">
                       <ul className="nav flex-column">
                           <li className="nav-item"><a href="#" className="nav-link">Asosiy</a></li>
                           <li className="nav-item"><a href="#news" className="nav-link">Yangiliklar</a></li>
                           <li className="nav-item"><a href="#books" className="nav-link">Kitoblar</a></li>
                           <li className="nav-item"><a href="#photos" className="nav-link">Rasmlar</a></li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default Footer;