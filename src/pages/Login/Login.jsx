import { useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../../components/Loading";
import { useAuthetication } from "../../hooks/useAuthentication"
import "./Login.css"


const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const { login, error, loading } = useAuthetication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email,
            pass
        }
        login(user)
    }

    return (
        <div id="login">
            <h2>Entrar</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email</span> <br />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span> <br />
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                </label>
                <input type="submit" className="btn" value="Entrar" />
                <Link to="/register">Criar uma conta</Link>
                <Loading loading={loading} />
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login