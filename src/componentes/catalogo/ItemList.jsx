import Item from "./Item";
import styles from "./ItemList.module.css";

export default function ItemList({ productos }) {
    return (
        <div className={styles.contenedorLista}>
            {productos.map((prod) => (
                <Item key={prod.id} {...prod} />
            ))}
        </div>
    );
}