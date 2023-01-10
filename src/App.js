
import './App.css';
import { AuthenticatedApp } from './containers/AuthenticatedApp';
import { UnauthenticatedApp } from './containers/UnauthenticatedApp';
import { useAuth } from './hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>U.O</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;

