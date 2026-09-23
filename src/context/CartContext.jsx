import { createContext, useState } from "react";

// 1. Creamos el contexto (la "bóveda" vacía)
export const CartContext = createContext();

// 2. Creamos el componente Proveedor (el encargado de repartir la info)
export const CartProvider = ({ children }) => {
    // El estado global del carrito (arranca como un arreglo vacío)
    const [carrito, setCarrito] = useState([]);

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (producto, cantidad) => {
        // Verificamos si el producto ya está en el carrito
        const productoExistente = carrito.find((item) => item.id === producto.id);

        if (productoExistente) {
            // Si ya está, actualizamos la cantidad
            const carritoActualizado = carrito.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + cantidad }
                    : item
            );
            setCarrito(carritoActualizado);
        } else {
            // Si no está, lo agregamos como un ítem nuevo
            setCarrito([...carrito, { ...producto, cantidad }]);
        }
    };

    // Función para saber cuántos productos totales hay (para el numerito del NavBar)
    const cantidadTotal = () => {
        return carrito.reduce((total, item) => total + item.cantidad, 0);
    };

    // Función para vaciar el carrito por completo
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // 3. Devolvemos el Proveedor envolviendo a los "children" (nuestra App)
    // En la prop 'value' ponemos todo lo que queremos que esté disponible globalmente
    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadTotal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
};