import { NavLink, Outlet,RouterProvider, createBrowserRouter } from "react-router-dom";
import "./Header.css"

import img from "../../../../assets/img/logo.jpg"
import Accueil from "../../../Pages/Accueil/Accueil";
import Hebergements from "../../../Pages/Hebergements/Hebergements";
import Photos from "../../../Pages/Photos/Photos";
import Contact from "../../../Pages/Contact/Contact";
import Reserver from "../../../Pages/Reserver/Reserver";
import Dashboard from "../../../Pages/CompteAdmin/Dashboard";
import PageNotFound from "../../../Pages/PageNotFound/PageNotFound";
import Form from "./Form";
import Liens from "./Liens";
import { IoMdMailUnread } from "react-icons/io";
import { useState } from "react";



function Header() {
    const route = createBrowserRouter([
        {
        path : "/",
        element : <Pages/>,
        children : [
            {
                path:"/",
                element:<Accueil/>
            },
            {
                path:"/Hébergements",
                element:<Hebergements/>
            },
            {
                path:"/Photos",
                element:<Photos/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Reserver",
                element:<Reserver/>
            },
            {
                path:"/dashboard/sdsdfgjfdfjgsdfdgfdfd",
                element:<Dashboard/>
            },
            {
                path:"*",
                element:<PageNotFound/>
            }
        ]
    }])

    const [logState,setLogState] = useState(false)
    const HandleClick = ()=>{
        setLogState(true)
    }

    function Pages(){
        return <div>
        <div className="nav">
            <nav className="nav-login">
                <span className="reservation" onClick={HandleClick}>
                    {logState?<Form/>:<span className="reservations"><IoMdMailUnread style={{fontSize:"2rem"}}/></span>}
                </span>
            </nav>
            <div className="container-fluid nav-header">
                    <span className="navbar-header">
                        <NavLink to={"/"}><img src={img} alt="img" /></NavLink> 
                    </span>
                    
                    <ul className="nav nav-liste">
                        <Liens lien={""} name={"Accueil"} />    
                        <Liens lien={"Photos"} name={"Photos"} />    
                        <Liens lien={"Contact"} name={"Contact"} />    
                        <Liens lien={"Hébergements"} name={<button>RESERVER</button>} />    
                    </ul>
            </div>

        </div>
        <Outlet/>
    </div>
    }
    return ( 
        <div className="">
            <RouterProvider router={route}/>
        </div>
    );
}

export default Header;