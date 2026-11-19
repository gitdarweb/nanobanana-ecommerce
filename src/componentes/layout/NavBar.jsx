import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './NavBar.module.css';
import CartWidget from "./CartWidget";

export default function NavBar() {
    const { user, logout } = useAuth();

    return (
        <nav className={styles.navApocaliptica}>
            {/* Ruta principal */}
            <Link to="/" className={styles.linkNavegacion}>Catálogo</Link>

            {/* Muestra Admin si no está logueado, o Panel Admin + Salir si ya inició sesión */}
            {user ? (
                <>
                    <Link to="/admin" className={styles.linkNavegacion}>Panel Admin</Link>
                    <button onClick={logout} className={styles.botonSalir}>
                        Salir
                    </button>
                </>
            ) : (
                <Link to="/login" className={styles.linkNavegacion}>Admin</Link>
            )}

            {/* El widget del carrito queda igual a la derecha */}
            <CartWidget />
        </nav>
    );
}