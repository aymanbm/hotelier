import { Helmet } from "react-helmet-async";
import img from "../../../assets/img/error404.jpg"
import { Link } from "react-router-dom"

function PageNotFound() {
    return ( 
        <div className="page404">
            <Helmet>
                <title>404</title>
                <meta name='description' content='Erro-page'/> 
                <link rel="stylesheet" href="/src/components/Pages/PageNotFound/Error.css" />

            </Helmet>
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