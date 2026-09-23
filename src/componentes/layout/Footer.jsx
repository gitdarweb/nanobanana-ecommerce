import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerApocaliptico}>
            <p>Nanobanana Survival Store - Preparados para el fin del mundo.</p>

            {/* Tarjetas de las 3 personas pedidas en la pre-entrega */}
            <div className={styles.equipoContainer}>
                <div className={styles.tarjetaPersona}>
                    <h4 className={styles.nombrePersona}>Dario Duarte</h4>
                    <p className={styles.rolPersona}>Comandante de Base</p>
                </div>
                <div className={styles.tarjetaPersona}>
                    <h4 className={styles.nombrePersona}>Belén Romero</h4>
                    <p className={styles.rolPersona}>Supervisora Táctica</p>
                </div>
                <div className={styles.tarjetaPersona}>
                    <h4 className={styles.nombrePersona}>Tutor React</h4>
                    <p className={styles.rolPersona}>Ingeniero de Sistemas</p>
                </div>
            </div>

            <p style={{ marginTop: "15px", fontSize: "0.7rem" }}>© 2026 Todos los derechos reservados.</p>
        </footer>
    );
}