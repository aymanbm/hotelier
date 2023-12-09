import "./Section1.css"
import Carousel from 'react-bootstrap/Carousel';
import Images from "../../../../../assets/img/index"
import NavRecherche from "./Nav-Recherche";
function Section1() {

    return ( 
        <div className="section-img">
            <div className="image-scroller">
                <Carousel data-interval="3000">
                    <Carousel.Item >
                        <img src={Images.Home1} alt='zzz'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Images.Home2} alt='zzz'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Images.Home3} alt='zzz'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Images.Home4} alt='zzz'/>
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