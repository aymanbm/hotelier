import Modal from 'react-bootstrap/Modal';
import { TfiClose } from "react-icons/tfi";
import { useRef, useState } from "react"
import bed1 from "../../../../assets/img/Bed.jpg"
function Room(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const buttonId = useRef(null)
    
    const handleClick = ()=>{
        props.setId(props.ids + 1)
        props.setCheckout({
            id: props.ids,
            name: buttonId.current.name,
            img : "../../../../assets/img/Bed.jpg",
            price : props.price,
        })
    }
    const liste = ["Peignoir","Baignoire","Réveil","Air conditionné","Bureau","Télévision en couleur",
"Bidet","Douche","Accès à l'internet","Sèche-cheveux","Téléphone de la salle de bains",
"Produits d'accueil de salle de bains","Lit jumeaux","Haut-parleur de téléphone","Messagerie vocale",
"Téléphone","Détecteurs de fumée","Télévision à télécommande","Coffre-fort","Chaussons",
"Miroir de maquillage éclairé","télévision"]
    const details = ()=>{
        return liste.map((item,key)=>{
            return <li key={key}>{item}</li>
        })}
    return ( 
        <div className="room container-fluid" >
            <div className="row">
                <div className="bed-image col-lg-4">
                    <img src={bed1} alt="bed1" />
                </div>
                <div className="details col-lg-8">
                    <h4>Chambre Classique Twin</h4>
                    <p>Logo 2 | 2Lits jumeaux</p>
                    <p>Chambre Classique Twin</p>
                    <p onClick={handleShow}><h5 className="detailRoom">Détails de la chambre</h5></p>
                    <hr/>
                    <div className="details2">
                        <div>
                        <p ><h5 className="TarifDispo">Meilleur tarif disponible</h5></p>
                            <p>Meilleur tarif disponible</p>
                        </div>
                        <div className="secondPart">
                            <h4>{props.price} MAD</h4>
                            <p>Par nuit</p>
                            <p>Hors taxes et frais</p>
                            <button onClick={handleClick} ref={buttonId} name={props.type} id="ggg"><strong>RÉSERVER MAINTENANT</strong></button>
                        </div>
                    </div>
                </div>

            </div>


            <Modal  show={show} onHide={handleClose}>
            
                <Modal.Body className='w-100' >
                    <div class="div-close">
                        <button type="button"  aria-label="Close" onClick={handleClose}><TfiClose /></button>
                    </div>
                    <div className='modal-textarea'>
                        <div className='modal-image'>
                            <img src={bed1} />
                        </div>
                        <div className='modal-details '>
                            <h3>Chambre Classique Twin</h3>
                            <p>Loge 2 | 2 Lits jumeaux</p>
                            <h4>Confort des chambres</h4>

                            <ul>
                                {details()}
                            </ul>
                        </div>
                        
                    
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100'>
                        <h4 >Chambre Classique Twin</h4>
                    </div>
                    <p>Les chambres classiques Hivernage proposent une décoration aux tons embrasés créant une ambiance chaleureuse avec une agréable vue sur le jardin intérieur. Elles disposent de lits jumeaux, d'une salle de bain avec douche séparée ,et des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.</p>
                </Modal.Footer>
                
            </Modal>
        </div>
    );
}

export default Room;