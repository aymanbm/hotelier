import { useContext, useState } from "react";
import img from "../../../../assets/img/Bed.jpg"
import { AiOutlineClose } from 'react-icons/ai';
import { PanierLoadingContext } from "./Rooms";
import Loading from "../../../../loading";

function Panier(props) {
    const {isPanierLoading, setIsPanierLoading} = useContext(PanierLoadingContext)

    const storedData = JSON.parse(localStorage.getItem("Data"));
    const storedCheckout = JSON.parse(localStorage.getItem("checkout"));

    const dateStringArrive = new Date(storedData.arrive)
    const dateStringDepart = new Date(storedData.depart)
    const dayNames = ["dim", "lun", "mar","mer","jeu",'vend',"sam"]; 
    const MonthNames = ["jan", "fev", "mar","avr","may",'jui',"juil","août","sep","oct",
                        "nov","dec"]; 

    const dayStringArrive = dayNames[dateStringArrive.getDay()]
    const dayStringDepart = dayNames[dateStringDepart.getDay()]

    const MonthStringArrive = MonthNames[dateStringArrive.getMonth()]
    const MonthStringDepart = MonthNames[dateStringDepart.getMonth()]
    let total = 0;

    const [del, setDel] = useState(0)

    const deletCheckout = (key)=>{
        
        for(let x of storedCheckout){
            if(x.id === key){
                storedCheckout.splice(x.id,1)
                localStorage.setItem("checkout", JSON.stringify(storedCheckout))
                // props.setDelet(props.del + 1)
                setDel(del + 1)
                break
            }
        }        
    }
    const handleCheckout = ()=>{
        return storedCheckout.map((check,key)=>{
            total += parseInt(check.price)
            return <div key={key} className="checkoutBlock">
                        <img src={img} alt="bed"/>
                        <span>{check.name}</span>
                        <span>{check.price} MAD</span>
                        <span onClick={()=>deletCheckout(key)}><AiOutlineClose /></span>
                    </div>
        })
    }
if(isPanierLoading){
    return <div className="panier p-0 " style={props.panierStyle}>
    <Loading style={{height:"30rem",borderRadius : "5px"}}
        styleSVG={{position:"position-static",marginTop: "15rem",
    marginLeft: "13rem",}} />
    </div>

}else{
    return ( 
        <div className="panier" style={props.panierStyle}>
                <h4>Votre séjour</h4>
                <div className="time">
                    <span>
                        <h5>Arrivée</h5>
                        <p>Aprés 15:00</p>
                    </span>
                    <span>
                        <h5>Départ</h5>
                        <p>Avant 12:00</p>
                    </span>
                </div>
                <p>{dayStringArrive}. {dateStringArrive.getDate()} {MonthStringArrive}. {dateStringArrive.getFullYear()} - {dayStringDepart}. {dateStringDepart.getDate()} {MonthStringDepart}. {dateStringDepart.getFullYear()}</p>
                <p>{storedData.adultes} {storedData.adultes==1?"adulte":"adultes"}  {storedData.enfants} {storedData.enfants==1?"enfant":"enfants"}</p>
                <div className="checkoutContainer">{handleCheckout()}</div>
                <hr/>
                <div className="total">
                    <h4>Total:</h4>
                    <h4>{total} MAD</h4>

                </div>
            </div>
    );
}
}
export default Panier;