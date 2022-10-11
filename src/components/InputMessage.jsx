
import { useState } from 'react'
import useMessage from '../hooks/useMessage'
import './InputMessage.css'

const InputMessage = ({ user, uid }) => {

    const [message, setMessage] = useState("")
    const { sendMessage } = useMessage()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!message) return
        const requestMessage = {
            uid,
            user,
            message,
        }
        sendMessage(requestMessage)
        setMessage("")
    }

    return (
        <form id='form' onSubmit={handleSubmit}>
            <input id="inputMessage" type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Digite sua mensagem" />
        </form>
    )
}

export default InputMessage