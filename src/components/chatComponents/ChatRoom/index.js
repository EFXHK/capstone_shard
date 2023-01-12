import { Link, useParams } from 'react-router-dom';
import { chatRooms } from '../../../data/chatRooms';
import { MessageInput } from '../MessageInput';
import { MessageList } from '../MessageList';
import './styles.css';

function ChatRoom() {
    const params = useParams();

    const room = chatRooms.find((x) => x.id === params.id);
    if (!room) {
        // TODO: 404
    }

    return (
        <div>
            <h2>{room.title}</h2>
            <div>
                <Link to="/">⬅ Return to Shard list</Link>
            </div>
            <div className="messages-container">
                <MessageInput roomId={room.id} />
                <MessageList roomId={room.id} />
            </div>
        </div>
    );
}

export { ChatRoom };