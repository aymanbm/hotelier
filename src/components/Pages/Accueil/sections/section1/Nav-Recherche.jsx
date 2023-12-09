import { useState } from "react";
import "./Nav-Recherche.css"
import { Link } from "react-router-dom";

function NavRecherche() {
    const [dates,setDates] = useState({
        arrive : "2023-11-05",
        depart : "2023-12-05"
    })
    const [adultes,setAdultes] = useState(1)
    const [enfants,setEnfants] = useState(0)
    
    
    
    

    const handleChange = (e)=>{

        let dateStringArrive = dates.depart;
        let dateStringDepart = dates.arrive;
        let day = 60 * 60 * 24 * 1000;
        let startDateArrive = new Date(dateStringArrive);
        let startDateDepart = new Date(dateStringDepart);
        let DateArrive = new Date(startDateArrive.getTime() - day);
        let DateDepart = new Date(startDateDepart.getTime() + day);
        DateArrive = DateArrive.toISOString().slice(0,10)
        DateDepart = DateDepart.toISOString().slice(0,10)

        if(e.target.name == "arrive" && e.target.value>dates.depart){
            setDates((prevstate)=>{
                return {...prevstate,...{
                    [e.target.name] : DateArrive
                }}
            })
        }else if(e.target.name == "depart" && e.target.value<dates.arrive){
            setDates((prevstate)=>{
                return {...prevstate,...{
                    [e.target.name] : DateDepart
                }}
            })
        }else{
            setDates((prevstate)=>{
                return {...prevstate,...{
                    [e.target.name] : e.target.value
                }}
            })
        }
        
    }

    const handleClick = (e)=>{
        
            switch(e.target.name){
                case "adultes_moin":
                    if(adultes>0){
                        setAdultes(adultes - 1)
                    }
                    break
                case "adultes_plus":
                    setAdultes(adultes + 1)
                    break 
                case "enfants_moin":
                    if(enfants>0){
                        setEnfants(enfants - 1)
                    }
                    break  
                case "enfants_plus" :
                    setEnfants(enfants + 1)
                    break  
                default :
                    return false
            }
    }

    const handleSubmit = ()=>{
        const infobj = {...{},...{
            enfants : enfants,
            adultes : adultes,
            arrive : dates.arrive,
            depart : dates.depart,}
    }
    localStorage.setItem("Data",JSON.stringify(infobj))
    }

    
    
    return ( 
        <div className="nav">
            <div className="Recherche-form">
            <div className="background">
            </div>
            <div className="NavRecherche">
                <div className="Arrive">
                    <input type="date" onChange={handleChange} name="arrive" className="date" value={dates.arrive} />
                    <div>Arrivé</div>
                </div>
                <div className="Depart"> 
                    <input type="date" className="date" name="depart" onChange={handleChange} value={dates.depart} />
                    <div>Départ</div>
                </div>
                <div className="Adultes"> 
                    <button className="btn" name="adultes_moin" onClick={handleClick}>-</button>
                    <span>{adultes}</span>
                    <button className="btn" name="adultes_plus" onClick={handleClick}>+</button>
                    <div>Adulte(s)</div>
                </div>
                <div className="Enfants"> 
                    <button className="btn" name="enfants_moin" onClick={handleClick}>-</button>
                    <span>{enfants}</span>
                    <button className="btn" name="enfants_plus" onClick={handleClick}>+</button>
                    <div>Enfant(s)</div>
                </div>
                <div className="btn-recherche"> 
                    <Link to={"/Hébergements"}><button className="btn" onClick={handleSubmit}>Rechercher</button></Link>
                </div>
            </div>

            
        </div>
        </div>
    );
}

export default NavRecherche;