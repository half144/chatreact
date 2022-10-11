
import { useRef } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import InputMessage from "../../components/InputMessage"
import { useAuth } from "../../context/AuthContext"
import useGetMessages from "../../hooks/useGetMessages"

import "./Chat.css"


const Chat = () => {
    const { uid } = useParams()
    const { user } = useAuth()
    const { message } = useGetMessages(uid)
    const messageDivRef = useRef()

    useEffect(() => {
        if (messageDivRef.current.scrollHeight > messageDivRef.current.offsetHeight) {
            messageDivRef.current.scrollTop = messageDivRef.current.scrollHeight
        }
    }, [message])

    return (
        <div className="chat">
            <div className="messagesArea" ref={messageDivRef}>
                <div className="messages">
                    {message && message.map(msg => {
                        if (msg.user == user.uid) {
                            return <p key={msg.time} className="message fromMe">{msg.message}</p>
                        } else {
                            return <p key={msg.time} className="message toMe">{msg.message}</p>
                        }
                    })}
                </div>
            </div>
            <InputMessage user={user} uid={uid} />
        </div>
    )
}

export default Chat