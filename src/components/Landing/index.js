import { Link } from 'react-router-dom';
import { chatRooms } from '../../data/chatRooms';
import './styles.css';

function Landing() {
    return (
        <div id="chat-mplayer">


            <div>
                <h2>Choose a Chat Room</h2>
                <ul className="chat-room-list">
                    {chatRooms.map((room) => (
                        <li key={room.id}>
                            <Link to={`/room/${room.id}`}>{room.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                        <h1>mplayer test</h1>
            </div>
        </div>
    );
}

export { Landing };