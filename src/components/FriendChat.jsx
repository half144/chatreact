import { Link } from "react-router-dom"


const FriendChat = ({ chat, username }) => {

    return (
        <li className="userChat">
            <Link to={`/chat/${chat.uid}`}>{username == chat.users[1] ? (<p>{chat.users[0]}</p>) : (<p>{chat.users[1]}</p>)}</Link>
        </li>
    )
}

export default FriendChat