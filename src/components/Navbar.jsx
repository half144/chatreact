import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import { useAuthetication } from "../hooks/useAuthentication"
import "./Navbar.css"

const Navbar = () => {
    const { user } = useAuth()
    const { logout } = useAuthetication()
    return (
        <div id="nav">

            {user && (
                <>
                    <Link to="/">Home</Link>
                    <button onClick={logout} >Sair</button>
                </>
            )}
        </div>
    )
}

export default Navbar