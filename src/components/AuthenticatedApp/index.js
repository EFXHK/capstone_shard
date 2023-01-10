import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import ChartContainer from '../MusicHalf/ChartContainer';


function AuthenticatedApp() {
    return (
        <BrowserRouter>
        <div id="app-container">
            <ChartContainer/>

            <div>
                <h1>mplayer test</h1>
            </div>

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/room/:id" element={<ChatRoom />} />
            </Routes>

        </div>
        </BrowserRouter>
    );
}



export { AuthenticatedApp };