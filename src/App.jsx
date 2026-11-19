import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./componentes/layout/Layout";
import ItemListContainer from "./componentes/catalogo/ItemListContainer";
import ItemDetailContainer from "./componentes/catalogo/ItemDetailContainer";
import Cart from "./componentes/carrito/Cart";
import Login from "./componentes/admin/Login";
import AltaProducto from "./componentes/admin/AltaProducto";
import RutaProtegida from "./componentes/admin/RutaProtegida";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          {/* Listado de productos en la ruta / */}
          <Route path="/" element={<ItemListContainer greeting="Inventario de Suministros Tácticos" />} />

          {/* Detalle de producto en la ruta /product/:id */}
          <Route path="/product/:id" element={<ItemDetailContainer />} />

          {/* El carrito */}
          <Route path="/carrito" element={<Cart />} />

          {/* Login y Panel Protegido de Administrador */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <RutaProtegida>
                <AltaProducto />
              </RutaProtegida>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;