import { Link } from "react-router-dom"
import "./Register.css"
import { useAuthetication } from "../../hooks/useAuthentication"
import { useState } from "react"
import Loading from "../../components/Loading"


const Register = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [username, setUsername] = useState("")

    const { register, error, loading } = useAuthetication()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            username,
            email,
            pass
        }
        register(user)
    }

    return (
        <div id="register">
            <h2>Criar sua conta</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Usuário</span> <br />
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <span>Email</span> <br />
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha</span> <br />
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
                </label>
                <input type="submit" className="btn" value="Registrar" />
                <Link to="/login">Entrar</Link>
                <Loading loading={loading} />
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Register