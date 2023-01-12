import { Link } from 'react-router-dom';
// import { chatRooms } from '../../data/chatRooms';
import { chatRooms } from '../../../data/chatRooms';
import './styles.css';

function Landing() {
    return (
        <div>
            

                <h2>Choose a Shard</h2>
                <ul className="chat-room-list">
                    {chatRooms.map((room) => (
                        <li key={room.id}>
                            <Link to={`/room/${room.id}`}>{room.title}</Link>
                        </li>
                    ))}
                </ul>


        </div>
    );
}

export { Landing };