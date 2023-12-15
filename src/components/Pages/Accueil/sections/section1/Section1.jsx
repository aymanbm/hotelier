// import "./Section1.css"
import Carousel from 'react-bootstrap/Carousel';
import Images from "../../../../../assets/img/index"
import NavRecherche from "./Nav-Recherche";
import { useState } from "react";
function Section1() {
    const [interval, setInterval] = useState(4000);

    return ( 
        <div className="section-img">
            <div className="image-scroller">
                <Carousel interval={interval}>
                    <Carousel.Item >
                        <img src={Images.Home1} style={{height:"80vh"}} alt='zzz'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Images.Home2} style={{height:"80vh"}} alt='zzz'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Images.Home3} style={{height:"80vh"}} alt='zzz'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Images.Home4} style={{height:"80vh"}}  alt='zzz'/>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="Recherche">
                <NavRecherche/>
            </div>
        </div>
    );
}

export default Section1;