import { createContext, useEffect, useState } from "react";
import Panier from "./Panier";
import Room from "./Room";
import Images from "../../../../assets/img/index"
// import "./Rooms.css";

export const PanierLoadingContext = createContext(null)
function Rooms(props) {
    const [checkout,setCheckout] = useState([])
    const [ids,setId] = useState(0)
    const [isPanierLoading, setIsPanierLoading] = useState(false);

    
    checkout.length !==0  && localStorage.setItem("checkout", JSON.stringify(checkout)) && props.setFirstcheckout(checkout);
    
    
    return ( 
        <div className="Rooms container">
            <PanierLoadingContext.Provider value={{isPanierLoading, setIsPanierLoading}}>
                <div className="row">
                    <div className="rooms col-lg-8">
                        <h3>Sélectionner une chambre</h3>
                            <Room img={Images.bed1} type={"Chambre Classique"} ids={ids} setId = {(id)=>setId(id)} price={"1230"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                            <Room img={Images.bed2} type={"Chambre Classique"} ids={ids} setId = {(id)=>setId(id)} price={"2200"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                            <Room img={Images.bed1} type={"Chambre Classique"} ids={ids} setId = {(id)=>setId(id)} price={"1230"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                            <Room img={Images.bed2} type={"Chambre Classique"} ids={ids} setId = {(id)=>setId(id)} price={"2200"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                            <Room img={Images.bed1} type={"Chambre Classique"} ids={ids} setId = {(id)=>setId(id)} price={"1230"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                            <Room img={Images.bed2} type={"Chambre Classique"} ids={ids} setId = {(id)=>setId(id)} price={"2200"} setCheckout={(check)=>setCheckout((prev)=>[...prev,{...check}])}/>
                    
                    </div>
                    <div className="panier-first col-lg-4" >
                        <Panier     data = {props.data} 
                        panierStyle={props.panier} />
                    </div>
                </div>
            </PanierLoadingContext.Provider>
        </div>
    );
}

export default Rooms;