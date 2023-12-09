import { Link, NavLink } from "react-router-dom";

function Liens(props) {
    return ( 
        <>
            <li><Link to={`/${props.lien}`}>{props.name}</Link></li>
        </>
    );
}
export default Liens;