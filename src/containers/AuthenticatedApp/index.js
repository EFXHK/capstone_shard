import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../../components/chatComponents/Landing/index';
// import { ChatRoom } from '../components/chatComponents/ChatRoom/index';
import { ChatRoom } from '../../components/chatComponents/ChatRoom/index';
import ChartContainer from '../../containers/ChartContainer';
import './styles.css';


function AuthenticatedApp() {
    return (
        <BrowserRouter>
        <div id="app-container">
            <ChartContainer/>

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/room/:id" element={<ChatRoom />} />
            </Routes>

        </div>
        </BrowserRouter>
    );
}



export { AuthenticatedApp };