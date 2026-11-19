import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemDetail from "./ItemDetail";
import styles from "./ItemDetailContainer.module.css";

export default function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    // Extraemos el id alfanumérico de Firestore desde la URL
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        // Apuntamos directamente al documento puntual dentro de la colección "productos"
        const docRef = doc(db, "productos", id);

        getDoc(docRef)
            .then((resp) => {
                if (resp.exists()) {
                    setProducto({
                        id: resp.id,
                        ...resp.data(),
                    });
                } else {
                    setProducto(null);
                }
            })
            .catch((error) => console.error("Error al desencriptar detalle:", error))
            .finally(() => setLoading(false));
    }, [id]);

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