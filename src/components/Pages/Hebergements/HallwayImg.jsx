import HallwayImage from "../../../assets/img/Hall (1).jpg"
import "./Hebergements.css"
import React from "react"
function HallwayImg() {
    return ( 
        <div className="hallwayimg">
            <img src={HallwayImage} alt="hallwayimage"/>
        </div>
     );
}

export default HallwayImg ;