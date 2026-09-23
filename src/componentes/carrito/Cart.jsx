import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
// Importamos los estilos modulares
import styles from "./Cart.module.css";

export default function Cart() {
    const { carrito, vaciarCarrito } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className={styles.carritoVacio}>
                <h2>La mochila de suministros está vacía</h2>
                <Link to="/" className={styles.linkVolver}>Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className={styles.contenedorCarrito}>
            <h2 className={styles.tituloCarrito}>Suministros Seleccionados</h2>

            {carrito.map((producto) => (
                <div key={producto.id} className={styles.itemCarrito}>
                    <span className={styles.nombreItem}>
                        {producto.nombre} (x{producto.cantidad})
                    </span>
                    <span className={styles.precioItem}>
                        ${producto.precio * producto.cantidad}
                    </span>
                </div>
            ))}

            <button onClick={vaciarCarrito} className={styles.botonDescartar}>
                Descartar Toda la Mochila
            </button>
        </div>
    );
}