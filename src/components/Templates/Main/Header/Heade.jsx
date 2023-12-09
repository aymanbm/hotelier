import "./Header.css"
import "../Accueil/sections/section1/Section1.css"
import "../Accueil/sections/section1/Nav-Recherche.css"
import img from "../../../assets/img/logo.jpg"
import { IoMdMailUnread } from 'react-icons/io'
import Liens from "./Liens"
import React,{ useState } from "react"
import Form from "./Form"
import { Link, Outlet } from "react-router-dom"


function Head() {
    const [logState,setLogState] = useState(false)
    const HandleClick = ()=>{
        setLogState(true)
    }

    return ( 
    <div>
        <div className="nav">
            <nav className="nav-login">
                <span className="reservation" onClick={HandleClick}>
                    {logState?<Form/>:<span className="reservations"><IoMdMailUnread style={{fontSize:"2rem"}}/></span>}
                </span>
            </nav>
            <div className="container-fluid nav-header">
                    <span className="navbar-header">
                        <Link to={"/"}><img src={img} alt="img" /></Link> 
                    </span>
                    
                    <ul className="nav nav-liste">
                        <Liens lien={""} name={"Accueil"} />    
                        <Liens lien={"Photos"} name={"Photos"} />    
                        <Liens lien={"Contact"} name={"Contact"} />    
                        <Liens lien={"Hébergements"} name={<button>RESERVER</button>} />    
                    </ul>
            </div>

        </div>
        <div >
                <Outlet/>
        </div>
    </div>
    );
}export default React.memo(Head);