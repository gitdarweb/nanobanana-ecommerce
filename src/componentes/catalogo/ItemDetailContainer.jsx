import { useState, useEffect } from "react";
// Importamos useParams para leer el :id de la URL
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    // Extraemos el id de la URL (ej: si la ruta es /producto/2, id valdrá "2")
    const { id } = useParams();

    useEffect(() => {
        fetch("/productos.json")
            .then((res) => res.json())
            .then((data) => {
                // Buscamos el producto cuyo id coincida con el de la URL
                // Usamos parseInt porque el id de la URL viene como texto ("1") y en el JSON es número (1)
                const productoEncontrado = data.find((prod) => prod.id === parseInt(id));
                setProducto(productoEncontrado);
                setLoading(false);
            })
            .catch((error) => console.error("Error al desencriptar detalle:", error));
    }, [id]); // Ponemos el id en las dependencias por si cambia la URL

    return (
        <div className={styles.contenedorBase}>
            {loading ? (
                <p className={styles.textoCargando}>Desencriptando archivo de suministro...</p>
            ) : producto ? (
                <ItemDetail {...producto} />
            ) : (
                <p className={styles.textoError}>ERROR: Suministro no encontrado en la base de datos.</p>
            )}
        </div>
    );
}