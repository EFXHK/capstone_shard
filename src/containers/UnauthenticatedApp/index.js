import { useAuth } from '../../hooks/useAuth';
import './styles.css';

function UnauthenticatedApp() {
    const { login } = useAuth();

    return (
        <>
            <h2>Log in to join a shard!</h2>
            <div>
                <button onClick={login} className="login">
                    Google Login
                </button>
            </div>
        </>
    );
}

export { UnauthenticatedApp };