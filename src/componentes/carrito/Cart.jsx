import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
import { CartContext } from "../../context/CartContext";
import styles from "./Cart.module.css";

export default function Cart() {
    const { carrito, vaciarCarrito } = useContext(CartContext);

    // Estados del formulario de Checkout
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [ordenId, setOrdenId] = useState(null);
    const [procesando, setProcesando] = useState(false);
    const [error, setError] = useState("");

    // Total de la compra
    const totalCompra = carrito.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad,
        0
    );

    const handleConfirmarCompra = async (e) => {
        e.preventDefault();
        setError("");
        setProcesando(true);

        try {
            const nuevaOrden = {
                comprador: {
                    nombre: nombre.trim(),
                    telefono: telefono.trim(),
                    email: email.trim(),
                },
                items: carrito.map((prod) => ({
                    id: prod.id,
                    nombre: prod.nombre,
                    precio: prod.precio,
                    cantidad: prod.cantidad,
                })),
                total: totalCompra,
                fecha: serverTimestamp(),
            };

            const docRef = await addDoc(collection(db, "ordenes"), nuevaOrden);
            setOrdenId(docRef.id);
            vaciarCarrito();
        } catch (err) {
            console.error("Error al generar la orden:", err);
            setError("No se pudo registrar la orden. Intentá nuevamente.");
        } finally {
            setProcesando(false);
        }
    };

    // 1. Si ya se confirmó una orden, mostramos el ID generado por Firestore
    if (ordenId) {
        return (
            <div className={styles.comprobante}>
                <h2 className={styles.tituloExito}>¡Suministros Reservados!</h2>
                <p>Tu orden de compra quedó registrada en la base de datos.</p>
                <p className={styles.codigoOrden}>
                    Código de seguimiento: <strong>{ordenId}</strong>
                </p>
                <Link to="/" className={styles.linkVolver}>
                    Volver al catálogo
                </Link>
            </div>
        );
    }

    // 2. Si el carrito está vacío
    if (carrito.length === 0) {
        return (
            <div className={styles.carritoVacio}>
                <h2>La mochila de suministros está vacía</h2>
                <Link to="/" className={styles.linkVolver}>Volver al catálogo</Link>
            </div>
        );
    }

    // 3. Resumen del carrito + formulario de Checkout
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

            <div className={styles.totalCarrito}>
                <span>Total a pagar:</span>
                <strong>${totalCompra}</strong>
            </div>

            <button onClick={vaciarCarrito} className={styles.botonDescartar}>
                Descartar Toda la Mochila
            </button>

            <form onSubmit={handleConfirmarCompra} className={styles.formCheckout}>
                <h3 className={styles.subtituloCheckout}>Datos para el envío de suministros</h3>

                {error && <p className={styles.errorCheckout}>{error}</p>}

                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Teléfono de contacto"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    disabled={procesando}
                    className={styles.botonConfirmar}
                >
                    {procesando ? "Procesando orden..." : "Confirmar Compra"}
                </button>
            </form>
        </div>
    );
}