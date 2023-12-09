import { useState } from "react";
import { useRef } from "react";
import Liens from "./Liens";

function Form() {
    const [isLogged , setLogged] = useState(false)
    const [style , setStyle] = useState({color1 : "black",color2 : "black"})
    const username = useRef()
    const password = useRef() 
    const compteAdmin = {
        username : "hermes",
        password : "ayman123"
    } 

    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }
    return ( 
        <>
            <input type="text" id="login" ref={username} placeholder="Nom d'utilisateur"/>
            <input type="password" id="password" ref={password} placeholder="Mot de passe"/>
            <button id="log-btn" onClick={handleSubmit}>{isLogged&&<Liens lien={"dashboard/sdsdfgjfdfjgsdfdgfdfd"} name={"Connexion"} />||"Connexion"}</button>  
            {/* <input type="submit" id="log-btn" onClick={handleSubmit} value="Connexion"/> */}
        
        </>
    );
}

export default Form;