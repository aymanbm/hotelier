import { useState , useEffect} from "react";
import HallwayImg from "./HallwayImg";
import NavHebergement from "./NavHebergements";
import Rooms from "./Rooms/Rooms";
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
            if (window.scrollY >= 600){
                setPanier({
                    transition: "0.8s ease-in",
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
            <HallwayImg/>
            <NavHebergement setData = {(dat)=>setData(dat)}/>
            <Rooms panier={panier} setFirstcheckout ={setFirstcheckout}  />
        </div>
    );
}

export default Hebergements;