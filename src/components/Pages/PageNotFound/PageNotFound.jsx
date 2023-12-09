import img from "../../../assets/img/error404.jpg"
import './Error.css'
import { Link } from "react-router-dom"

function PageNotFound() {
    return ( 
        <div className="page404">
            <div className="img404">
                <img src={img} alt="error404"/>
            </div>
            <div className="text404">
            <h1><span style={{fontWeight:"900"}}>Oops!</span> Page non trouvée.</h1>
                <p>La page que vous recherchez n'existe pas.</p>
                <Link to={"/"}><button className="btn ">rentrer à l'Accueil</button></Link>
            </div>
        </div>
    );
}

export default PageNotFound;