import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <nav className={styles.navApocaliptica}>
            {/* Ahora nuestro Catálogo es la ruta principal "/" */}
            <Link to="/" className={styles.linkNavegacion}>Catálogo</Link>

            {/* El widget del carrito queda igual a la derecha */}
            <CartWidget />
        </nav>
    );
}