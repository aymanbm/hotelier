import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./Hebergements.css";
function NavHebergement(props) {
    const storedData = JSON.parse(localStorage.getItem("Data"));
    const [dates, setDates] = useState({
        arrive: storedData.arrive,
        depart: storedData.depart,
    });
    const [adultes, setAdultes] = useState(storedData.adultes);
    const [enfants, setEnfants] = useState(storedData.enfants);

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

const handleClick = (e) => {
    switch (e.target.name) {
    case "a_moin":
        if (adultes > 0) {
        setAdultes(adultes - 1);
        }
        break;
    case "a_plus":
        setAdultes(adultes + 1);
        console.log(adultes);
        break;
    case "e_moin":
        if (enfants > 0) {
        setEnfants(enfants - 1);
        }
        break;
    case "e_plus":
        setEnfants(enfants + 1);
        break;
    default:
        return false;
    }
};

const handleSubmit = () => {
    const infobjs = {
    ...{},
    ...{
        enfants: enfants,
        adultes: adultes,
        arrive: dates.arrive,
        depart: dates.depart,
    },
    };
    localStorage.setItem("Data", JSON.stringify(infobjs));
    props.setData(infobjs)

};


return (
        <div className="container-fluid ">
        <div className="hébergements-recherche col-lg-12">
            <div className="Recherche-form">
            <div className="background"></div>
            <div className="NavRecherche">
                <div className="Arrive">
                <input
                    type="date"
                    onChange={handleChange}
                    name="arrive"
                    className="date"
                    value={dates.arrive}
                />
                <p>Arrivé</p>
                </div>
                <div className="Depart">
                <input
                    type="date"
                    className="date"
                    name="depart"
                    onChange={handleChange}
                    value={dates.depart}
                />
                <p>Départ</p>
                </div>
                <div className="Adultes">
                <button className="btn" name="a_moin" onClick={handleClick}>
                    -
                </button>
                <span>{adultes}</span>
                <button className="btn" name="a_plus" onClick={handleClick}>
                    +
                </button>
                <p>Adulte(s)</p>
                </div>
                <div className="Enfants">
                <button className="btn" name="e_moin" onClick={handleClick}>
                    -
                </button>
                <span>{enfants}</span>
                <button className="btn" name="e_plus" onClick={handleClick}>
                    +
                </button>
                <p>Enfant(s)</p>
                </div>
                <div className="btn-recherche">
                <Link to={"/Hébergements"}>
                    <button className="btn" onClick={handleSubmit}>
                    Rechercher
                    </button>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
);
}

export default NavHebergement;


{/* <div className="Recherche-form">
                        <div className="background">
                        </div>
                        <div className="NavRecherche">
                            <div className="Arrive">
                                <input type="date"  name="arrive" className="date" value={storedData.arrive} />
                                <div>Arrivé</div>
                            </div>
                            <div className="Depart"> 
                                <input type="date" className="date" name="depart"  value={storedData.depart} />
                                <div>Départ</div>
                            </div>
                            <div className="Adultes"> 
                                <span>{storedData.adultes}</span>
                                <div>Adulte(s)</div>
                            </div>
                            <div className="Enfants"> 
                                <span>{storedData.enfants}</span>
                                <div>Enfant(s)</div>
                            </div>
                            
                        </div>

                        
                    </div> */}
