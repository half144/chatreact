import { useState } from "react"
import BeatLoader from "react-spinners/BeatLoader";
import { useAuth } from "../../context/AuthContext"
import useCreateChat from "../../hooks/useCreateChat"
import { Link } from 'react-router-dom'
import useGetChats from "../../hooks/useGetChats"
import "./Home.css"
import FriendChat from "../../components/FriendChat";

const override = {
    display: "block",
    margin: "40px auto",
    borderColor: "blue",
};


const Home = () => {
    const { user } = useAuth()
    const { chats, loading } = useGetChats(user)
    const [targetUser, setTargetUser] = useState("")
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const { createChat } = useCreateChat()

    const handleSubmit = async e => {
        e.preventDefault()
        setModalIsVisible(false)
        await createChat({ user: user.displayName, targetUser })
        setTargetUser("")
    }

    if (!user.displayName) {
        return <BeatLoader color="blue" cssOverride={override} />
    }
    return (
        <>
            {user && (
                <div className="home">
                    <div className="userData">
                        {user && (
                            <p>Olá, bem vindo <b>{user.displayName}</b></p>
                        )}
                    </div>
                    <div className="headerChats">
                        <h2>Chats ativos</h2>
                        <img
                            onClick={() => modalIsVisible ? setModalIsVisible(false) : setModalIsVisible(true)}
                            src="https://www.nicepng.com/png/full/128-1284530_chat-icon-png-white-chat-icon-white-png.png"
                            alt="Add chat" />
                    </div>
                    {modalIsVisible &&
                        (<div className="modal">
                            <p>Inciar nova conversa</p>
                            <form onSubmit={handleSubmit}>
                                <input type="text" required value={targetUser} onChange={(e) => setTargetUser(e.target.value)} placeholder="Nome de usuario" />
                                <input id="init" type="submit" value="Iniciar" />
                            </form>
                        </div>)}
                    <ul className="userChats">
                        {loading && <BeatLoader color="blue" cssOverride={override} />}
                        {chats && chats.map(chat => (
                            <FriendChat chat={chat} username={user.displayName} />
                        ))}
                    </ul>

                </div>
            )}

        </>

    )
}

export default Home