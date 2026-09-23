import { Routes, Route } from "react-router-dom";
import Layout from "./componentes/layout/Layout";
import ItemListContainer from "./componentes/catalogo/ItemListContainer";
import ItemDetailContainer from "./componentes/catalogo/ItemDetailContainer";
import Cart from "./componentes/carrito/Cart";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Listado de productos en la ruta / */}
        <Route path="/" element={<ItemListContainer greeting="Inventario de Suministros Tácticos" />} />

        {/* Detalle de producto en la ruta /product/:id */}
        <Route path="/product/:id" element={<ItemDetailContainer />} />

        {/* REQ ENTREGA COMPLETA: El carrito */}
        <Route path="/carrito" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;