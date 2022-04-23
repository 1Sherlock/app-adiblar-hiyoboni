import React, {useEffect} from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import News from "./components/News";
import Poets from "./components/Poets";
import Books from "./components/Books";
import Photos from "./components/Photos";
import Footer from "./components/Footer";
import AOS from "aos";


const App = () => {
    useEffect(() => {
        AOS.init({
            delay: 300,
            once: true
        });
    }, [])
    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="container">
                <iframe data-aos="fade-in" src="https://youtube.com/embed/O5Wdy0vUyLs" frameborder="0" className="w-100 video"/>

                <h3 className="font-mak-bold adiblar-info">Adiblar Xiyoboni haqida</h3>
                <p className="adiblar-desc">Mumtoz adabiyot vakillarini o’z ichiga jamlagan Adiblar xiyoboni
                    2017-yil 18-aprelda Alisher Navoiy nomidagi Oʻzbekiston Milliy bogʻida barpo etildi.</p>
            </div>
            <News/>
            <Poets/>
            <Books/>

            <Photos/>

            <div className="container">
                <h3 className="font-mak-bold mb-5">3d Sayohat</h3>
                {/*<iframe*/}
                {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.283386938885!2d69.23773331571131!3d41.30269830920334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd2a2c44825%3A0x66770d5da30bcc89!2sAdiblar%20xiyoboni!5e0!3m2!1sru!2s!4v1650699103225!5m2!1sru!2s"*/}
                {/*    style={{border: "none"}} className="w-100 map" allowFullScreen="" loading="lazy"*/}
                {/*    referrerPolicy="no-referrer-when-downgrade"/>*/}

                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1650702491340!6m8!1m7!1sCAoSLEFGMVFpcE0zM1lyaWpLRkNfTkdNUVpoQVZFdkN6SkhlbWZ6S1ViUTNMM2hW!2m2!1d41.30386299999999!2d69.23971499999993!3f10.520562135177846!4f-4.065184604189767!5f0.7820865974627469"
                    style={{border: "none"}} className="w-100 map" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
            </div>


            <Footer/>


        </div>
    );
};

export default App;