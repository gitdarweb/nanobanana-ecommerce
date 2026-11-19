# Nanobanana E-Commerce — Suministros Tácticos

Aplicación web de comercio electrónico desarrollada como **Entrega Final del curso de React JS**. El proyecto implementa una Single Page Application (SPA) con temática de suministros tácticos y de supervivencia, conectada en tiempo real a **Firebase (Cloud Firestore y Authentication)**.

---

## Funcionalidades Principales

* **Catálogo y Detalle Dinámico:** Lectura asíncrona de productos desde la colección `productos` en **Cloud Firestore** (`getDocs` y `getDoc`).
* **Carrito de Compras Global:** Gestión de estado centralizada mediante **Context API** (`CartContext`), con actualización de cantidades en tiempo real desde el `CartWidget` y vaciado de carrito.
* **Checkout y Órdenes de Compra:** Formulario de finalización de compra en `/carrito` que registra la orden (datos del comprador, ítems, total y marca de tiempo) en la colección `ordenes` de Firestore y devuelve un comprobante con su **ID único de seguimiento**.
* **Autenticación y Panel de Administración:** Sistema de inicio de sesión mediante **Firebase Authentication** (`AuthContext`) y rutas protegidas (`RutaProtegida`) que habilitan el formulario `/admin` para dar de alta nuevos suministros directamente en Firestore (`addDoc`).
* **Configuración para Producción:** Archivo `vercel.json` incluido en la raíz para soportar navegación SPA y recarga directa de rutas en Vercel sin errores `404`.

---

## Credenciales de Prueba (Panel Administrador)

Para probar el alta de productos desde el enlace **Admin** del menú (`/login`):

* **Usuario:** `admin@admin.com`
* **Contraseña:** `admin123`

---

## Tecnologías Utilizadas

* **React 18** + **Vite**
* **React Router DOM** (Enrutamiento dinámico y rutas protegidas)
* **Context API** (Estado global de carrito y sesión de usuario)
* **Firebase v10** (Cloud Firestore + Firebase Authentication)
* **CSS Modules** (Estilos encapsulados por componente)
* **Vercel** (Despliegue continuo)

---

## Estructura del Proyecto

```text
📦 2pre-entregaDuarteDario
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 componentes
 ┃ ┃ ┣ 📂 admin
 ┃ ┃ ┃ ┣ 📜 AltaProducto.jsx           # Formulario protegido para agregar suministros en Firestore
 ┃ ┃ ┃ ┣ 📜 AltaProducto.module.css
 ┃ ┃ ┃ ┣ 📜 Login.jsx                  # Pantalla de inicio de sesión para administradores
 ┃ ┃ ┃ ┣ 📜 Login.module.css
 ┃ ┃ ┃ ┗ 📜 RutaProtegida.jsx          # Guardia de ruta que valida sesión activa
 ┃ ┃ ┣ 📂 carrito
 ┃ ┃ ┃ ┣ 📜 Cart.jsx                   # Vista del carrito, cálculo total y Checkout de órdenes
 ┃ ┃ ┃ ┗ 📜 Cart.module.css
 ┃ ┃ ┣ 📂 catalogo
 ┃ ┃ ┃ ┣ 📜 Item.jsx                   # Tarjeta individual de producto
 ┃ ┃ ┃ ┣ 📜 ItemDetail.jsx             # Detalle completo y selector de unidades
 ┃ ┃ ┃ ┣ 📜 ItemDetail.module.css
 ┃ ┃ ┃ ┣ 📜 ItemDetailContainer.jsx    # Consulta puntual por ID en Firestore (getDoc)
 ┃ ┃ ┃ ┣ 📜 ItemDetailContainer.module.css
 ┃ ┃ ┃ ┣ 📜 ItemList.jsx               # Renderizado de la grilla de productos
 ┃ ┃ ┃ ┣ 📜 ItemListContainer.jsx      # Consulta general de colección en Firestore (getDocs)
 ┃ ┃ ┃ ┣ 📜 ItemListContainer.module.css
 ┃ ┃ ┃ ┗ 📜 catalogo.module.css
 ┃ ┃ ┗ 📂 layout
 ┃ ┃   ┣ 📜 CartWidget.jsx             # Indicador de unidades en el carrito
 ┃ ┃   ┣ 📜 CartWidget.module.css
 ┃ ┃   ┣ 📜 Layout.jsx                 # Estructura persistente de la aplicación
 ┃ ┃   ┣ 📜 NavBar.jsx                 # Navegación dinámica según estado de autenticación
 ┃ ┃   ┗ 📜 NavBar.module.css
 ┃ ┣ 📂 context
 ┃ ┃ ┣ 📜 AuthContext.jsx              # Gestión de sesión con Firebase Authentication
 ┃ ┃ ┗ 📜 CartContext.jsx              # Gestión del carrito de compras
 ┃ ┣ 📂 css
 ┃ ┃ ┗ 📜 index.css
 ┃ ┣ 📂 data
 ┃ ┃ ┗ 📜 productos.json               # Respaldo inicial utilizado en la pre-entrega
 ┃ ┣ 📂 firebase
 ┃ ┃ ┗ 📜 config.js                    # Configuración de Firebase App, Firestore (db) y Auth (auth)
 ┃ ┣ 📜 App.jsx                        # Definición de rutas públicas y protegidas
 ┃ ┗ 📜 main.jsx                       # Punto de entrada de la aplicación
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 vercel.json                      # Reglas de reescritura SPA para producción