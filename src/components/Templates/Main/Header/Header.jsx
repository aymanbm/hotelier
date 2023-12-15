import { NavLink, Outlet,RouterProvider, createBrowserRouter } from "react-router-dom";
import React,{ useState } from "react";
import img from "../../../../assets/img/logo.jpg"
import Accueil from "../../../Pages/Accueil/Accueil";
import Hebergements from "../../../Pages/Hebergements/Hebergements";
import Photos from "../../../Pages/Photos/Photos";
import Contact from "../../../Pages/Contact/Contact";
import Dashboard from "../../../Pages/CompteAdmin/Dashboard";
import PageNotFound from "../../../Pages/PageNotFound/PageNotFound";
import Liens from "./Liens";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Helmet } from "react-helmet-async";

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
                element: <Hebergements/>
                
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
            <header>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid className="nav-header">
                        {/* <nav className="nav-login">
                            <span className="reservation" onClick={HandleClick}>
                                {logState?<Form/>:<span className="reservations"><IoMdMailUnread style={{fontSize:"2rem"}}/></span>}
                            </span>
                        </nav> */}
                        <span className="navbar-header">
                            <NavLink to={"/"}><img src={img} alt="img" /></NavLink>
                        </span>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="nav-liste">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#jo">Hoe</Nav.Link> */}
                                <Liens lien={""} name={"Accueil"} />    
                                <Liens lien={"Photos"} name={"Photos"} />    
                                <Liens lien={"Contact"} name={"Contact"} />    
                                <Liens lien={"Hébergements"} name={<button>RESERVER</button>} />  
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </header>
        <Outlet/>
    </div>
    }
    return ( 
        <div className="">
            <Helmet>
                <title>Hermes</title>
                <meta name='description' content='HomePage'/> 
                <link rel="stylesheet" href="/src/components/Templates/Main/Header/Header.css" />
            </Helmet>
            <RouterProvider router={route}/>
        </div>
    );
}

export default React.memo(Header);