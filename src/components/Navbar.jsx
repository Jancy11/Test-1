import{Link} from "react-router-dom";
import './navbar.css'; 

function Navbar(){
    return(
        <nav>
            <h1>Jancy</h1>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/aboutme">AboutMe</Link>
            <Link to="/contactme">ContactMe</Link>
        </ul>
        </nav>
    )
}

export default Navbar;