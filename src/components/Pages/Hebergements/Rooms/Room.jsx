import Modal from 'react-bootstrap/Modal';
import { TfiClose } from "react-icons/tfi";
import { useContext, useRef, useState } from "react"
import { PanierLoadingContext } from './Rooms';
function Room(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {isPanierLoading, setIsPanierLoading} = useContext(PanierLoadingContext)
    const buttonId = useRef(null)
    
    const handleClick = ()=>{
        setIsPanierLoading(true)
        setTimeout(async() => {
            setIsPanierLoading(false)
        }, 3000);
        props.setId(props.ids + 1)
        // props.setCheckout({
        //     id: props.ids,
        //     name: buttonId.current.name,
        //     img : "../../../../assets/img/Bed.jpg",
        //     price : props.price,
        // })
    }
    const liste = ["Peignoir","Baignoire","Réveil","Air conditionné","Bureau","Télévision en couleur",
"Bidet","Douche","Accès à l'internet","Sèche-cheveux","Téléphone de la salle de bains",
"Produits d'accueil de salle de bains","Haut-parleur de téléphone","Messagerie vocale",
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
                    <img src={props.img} alt="bed1" />
                </div>
                <div className="details col-lg-8">
                    <h4>Chambre Classique </h4>
                    <p>Logo 2 | 1 King</p>
                    <p>Chambre Classique Twin</p>
                    <h5 onClick={handleShow}className="detailRoom">Détails de la chambre</h5>
                    <hr/>
                    <div className="details2">
                        <div>
                        <h5 className="TarifDispo">Meilleur tarif disponible</h5>
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
                    <div className="div-close">
                        <button type="button"  aria-label="Close" onClick={handleClose}><TfiClose /></button>
                    </div>
                    <div className='modal-textarea'>
                        <div className='modal-image'>
                            <img src={props.img} />
                        </div>
                        <div className='modal-details '>
                            <h3>Chambre Classique</h3>
                            <p>Loge 2 | 1 King</p>
                            <h4>Confort des chambres</h4>

                            <ul>
                                {details()}
                            </ul>
                        </div>
                        
                    
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <div className='w-100'>
                        <h4 >Chambre Classique</h4>
                    </div>
                    <p>Les chambres classiques Hivernage proposent une décoration aux tons embrasés créant une ambiance chaleureuse avec une agréable vue sur le jardin intérieur. Elles disposent de lit King, d'une salle de bain avec douche séparée ,et des délices locaux ainsi que le wifi sont offerts pour magnifier l'expérience.</p>
                </Modal.Footer>
                
            </Modal>
        </div>
    );
}

export default Room;