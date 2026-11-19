import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemList from "./ItemList";
import styles from "./ItemListContainer.module.css";

export default function ItemListContainer({ greeting }) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        setLoading(true);

        const productosRef = collection(db, "productos");
        const consulta = categoria
            ? query(productosRef, where("categoria", "==", categoria))
            : productosRef;

        getDocs(consulta)
            .then((res) => {
                const data = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(data);
            })
            .catch((error) => console.error("Error al escanear los suministros:", error))
            .finally(() => setLoading(false));
    }, [categoria]);

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