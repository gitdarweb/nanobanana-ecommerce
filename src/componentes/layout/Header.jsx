// Importamos el módulo de CSS y lo guardamos en la variable 'styles'
import styles from './Header.module.css';
// 1. Importamos la NavBar
import NavBar from './NavBar';

export default function Header() {
    return (
        <header className={styles.headerApocaliptico}>
            <h1>NANOBANANA - SURVIVAL STORE</h1>
            {/* 2. Mostramos la NavBar debajo del título */}
            <NavBar />
        </header>
    );
}