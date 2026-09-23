import { useContext } from "react";
import { Link } from "react-router-dom";
// 1. Importamos el contexto para poder leerlo
import { CartContext } from "../../context/CartContext";
import styles from "./CartWidget.module.css";

export default function CartWidget() {
    // 2. Extraemos la función cantidadTotal de nuestra "bóveda"
    const { cantidadTotal } = useContext(CartContext);

    return (
        // 3. El widget en sí mismo es un Link que nos llevará a la ruta /carrito
        <Link to="/carrito" className={styles.contenedorWidget}>
            {/* Emoji 🛒, o 📦 o 🎒 */}
            <span className={styles.icono}>🎒</span>

            {/* 4. Mostramos el número dinámico (si es 0, no mostramos nada para que quede más limpio) */}
            <span className={styles.numero}>
                {cantidadTotal() > 0 ? cantidadTotal() : "0"}
            </span>
        </Link>
    );
}