import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css";

export default function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/productos.json")
            .then((res) => res.json())
            .then((data) => {
                setProductos(data);
                setLoading(false);
            })
            .catch((error) => console.error("Error al escanear los suministros:", error));
    }, []);

    return (
        <div className={styles.contenedorCatalogo}>
            <h2>{greeting}</h2>
            {loading ? (
                <p className={styles.textoCargando}>Escaneando el perímetro en busca de suministros...</p>
            ) : (
                <ItemList productos={productos} />
            )}
        </div>
    );
}