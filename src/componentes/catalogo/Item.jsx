import { Link } from "react-router-dom";
// 1. Importamos los estilos
import styles from "./Item.module.css";

export default function Item({ id, nombre, precio, imagen, stock }) {
    return (
        // 2. Reemplazamos los 'style' por 'className'
        <div className={styles.tarjetaSuministro}>
            <img src={imagen} alt={nombre} className={styles.imagenSuministro} />
            <h3>{nombre}</h3>
            <p className={styles.precio}>${precio}</p>
            <p className={styles.stock}>Stock disponible: {stock}</p>

            <Link to={`/product/${id}`} className={styles.botonDetalle}>
                Ver Detalle
            </Link>
        </div>
    );
}