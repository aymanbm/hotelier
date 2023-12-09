import { useEffect, useState } from "react";
import Panier from "./Panier";
import Room from "./Room";
import "./Rooms.css";

function Rooms(props) {
    const [checkout,setCheckout] = useState([])
    const [ids,setId] = useState(0)
    // const [delet, setDelet] = useState(0)
    // const stored = localStorage.getItem("checkout")

    // if(checkout !== stored){
    // setCheckout(stored)
    // console.log(checkout)
    // }
    
    checkout.length !==0  && localStorage.setItem("checkout", JSON.stringify(checkout)) && props.setFirstcheckout(checkout);
    
    
    return ( 
        <div className="Rooms container">
            <div className="row">
                <div className="rooms col-lg-8">
                    <h3>Sélectionner une chambre</h3>
                        <Room type={"Chambre Classique Twin"} ids={ids} setId = {(id)=>setId(id)} price={"8000"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                        <Room type={"Chambre Classique Twin"} ids={ids} setId = {(id)=>setId(id)} price={"7000"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                        <Room type={"Chambre Classique Twin"} ids={ids} setId = {(id)=>setId(id)} price={"8000"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                        <Room type={"Chambre Classique Twin"} ids={ids} setId = {(id)=>setId(id)} price={"8000"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                        <Room type={"Chambre Classique Twin"} ids={ids} setId = {(id)=>setId(id)} price={"8000"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                        <Room type={"Chambre Classique Twin"} ids={ids} setId = {(id)=>setId(id)} price={"8000"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                
                </div>
                <div className="panier-first col-lg-4" >
                    <Panier /*checkout={checkout} */ data = {props.data} 
                    panierStyle={props.panier} />
                </div>
            </div>
        </div>
    );
}

export default Rooms;