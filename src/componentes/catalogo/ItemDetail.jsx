import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./ItemDetail.module.css";
// Importamos nuestro contexto
import { CartContext } from "../../context/CartContext";

// 1. Agregamos el 'id' al inicio de las propiedades
export default function ItemDetail({ id, nombre, precio, imagen, categoria, stock }) {

    // 2. Traemos la función de nuestra bóveda (contexto)
    const { agregarAlCarrito } = useContext(CartContext);

    // 3. Armamos la función que se ejecuta al hacer clic
    const manejarAgregar = () => {
        const productoParaCarrito = { id, nombre, precio, imagen };
        // Lo mandamos al carrito asumiendo que agregamos 1 unidad
        agregarAlCarrito(productoParaCarrito, 1);
        alert(`¡${nombre} agregado a la mochila!`);
    };

    return (
        <div className={styles.tarjetaDetalle}>
            <img src={imagen} alt={nombre} className={styles.imagenDetalle} />

            <div className={styles.infoBox}>
                <div>
                    <h2>{nombre}</h2>
                    <p className={styles.categoria}>Categoría: {categoria}</p>
                    <p>Suministro esencial para la supervivencia en el páramo. Alta durabilidad probada en entornos hostiles.</p>
                    <p className={styles.precio}>${precio}</p>
                    <p>Unidades en el búnker: {stock}</p>
                </div>

                <div>
                    {/* 4. Le agregamos el evento onClick a tu botón intacto */}
                    <button onClick={manejarAgregar} className={styles.botonAgregar}>
                        AGREGAR AL EQUIPAMIENTO
                    </button>
                    <br />
                    <Link to="/" className={styles.linkVolver}>Volver al Catálogo</Link>
                </div>
            </div>
        </div>
    );
}