import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useAuth } from "../../context/AuthContext";
import styles from "./AltaProducto.module.css";

export default function AltaProducto() {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");
    const [stock, setStock] = useState("");

    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMensaje("");
        setError("");
        setEnviando(true);

        try {
            const nuevoProducto = {
                nombre: nombre.trim(),
                precio: Number(precio),
                categoria: categoria.trim().toLowerCase(),
                imagen: imagen.trim(),
                stock: Number(stock),
            };

            const docRef = await addDoc(collection(db, "productos"), nuevoProducto);

            setMensaje(`Suministro registrado en Firestore (ID: ${docRef.id})`);
            setNombre("");
            setPrecio("");
            setCategoria("");
            setImagen("");
            setStock("");
        } catch (err) {
            console.error("Error al guardar el producto:", err);
            setError("No se pudo guardar el suministro. Revisá las reglas de Firestore.");
        } finally {
            setEnviando(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <div className={styles.contenedorAdmin}>
            <div className={styles.encabezado}>
                <div>
                    <h2 className={styles.titulo}>Alta de Suministros</h2>
                    {user && <small>Operador: {user.email}</small>}
                </div>
                <button type="button" onClick={handleLogout} className={styles.botonSalir}>
                    Cerrar Sesión
                </button>
            </div>

            {mensaje && <p className={styles.mensajeExito}>{mensaje}</p>}
            {error && <p className={styles.mensajeError}>{error}</p>}

            <form onSubmit={handleSubmit} className={styles.formulario}>
                <div className={styles.campo}>
                    <label htmlFor="nombre">Nombre del suministro</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Ej: Botiquín Táctico de Campaña"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.filaDoble}>
                    <div className={styles.campo}>
                        <label htmlFor="precio">Precio ($)</label>
                        <input
                            id="precio"
                            type="number"
                            min="1"
                            placeholder="Ej: 8500"
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="stock">Stock disponible</label>
                        <input
                            id="stock"
                            type="number"
                            min="1"
                            placeholder="Ej: 10"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className={styles.campo}>
                    <label htmlFor="categoria">Categoría</label>
                    <input
                        id="categoria"
                        type="text"
                        placeholder="Ej: armas, proteccion, alimentos"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.campo}>
                    <label htmlFor="imagen">URL de la imagen</label>
                    <input
                        id="imagen"
                        type="url"
                        placeholder="https://..."
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={enviando} className={styles.botonGuardar}>
                    {enviando ? "Guardando en base de datos..." : "Agregar Suministro al Catálogo"}
                </button>
            </form>
        </div>
    );
}