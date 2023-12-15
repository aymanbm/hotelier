import { useState , useEffect} from "react";
import HallwayImg from "./HallwayImg";
import NavHebergement from "./NavHebergements";
import Rooms from "./Rooms/Rooms";
import { Helmet } from "react-helmet-async";
function Hebergements() {
    const [firstcheckout,setFirstcheckout] = useState()
    !firstcheckout&&localStorage.setItem("checkout", JSON.stringify([]));

    const [data,setData] = useState()
    const [panier,setPanier] = useState({
        top:"",
        right:""
    })

    useEffect(()=>{
        window.onscroll = () => {
            if (window.scrollY >= 660){
                setPanier({
                    // transition: "0.8s ease-in",
                    position:"fixed",
                    top:"1.5em",
                    marginRight:"",
                    width:"24.5em"
            })}
            else{ setPanier({}) }
        }         
    },[])
    return ( 
        <div className="Hebergements">
            <Helmet>
                <title>Hebergements</title>
                <meta name='description' content='Hebergements-page'/>
                <link rel="stylesheet" href="/src/components/Pages/Accueil/sections/section1/Nav-Recherche.css" />
                <link rel="stylesheet" href="/src/components/Pages/Hebergements/Hebergements.css" />
                <link rel="stylesheet" href="/src/components/Pages/Hebergements/Rooms/Rooms.css" />

            </Helmet>
            <HallwayImg/>
            <NavHebergement setData = {(dat)=>setData(dat)}/>
            <Rooms panier={panier} setFirstcheckout ={setFirstcheckout}  />
        </div>
    );
}

export default Hebergements;