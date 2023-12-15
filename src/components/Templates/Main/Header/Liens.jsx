import { Link, NavLink } from "react-router-dom";

function Liens(props) {
    return ( 
        <>
            <Link style={{color:'black'}} to={`/${props.lien}`}>{props.name}</Link>
        </>
    );
}
export default Liens;