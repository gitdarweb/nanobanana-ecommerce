# Proyecto React: Nanobanana (E-commerce Táctico)

Nanobanana es una aplicación de e-commerce tipo "búnker" desarrollada en React, creada como pre-entrega para el curso. El proyecto simula un catálogo de suministros de supervivencia, implementando navegación por rutas, gestión de estado global para un carrito de compras y diseño modular.

## Tecnologías Utilizadas
- **React (Vite)**: Librería principal para la construcción de interfaces.
- **React Router DOM**: Para la gestión de rutas de la aplicación (SPA).
- **Context API**: Para el manejo del estado global del carrito de compras.
- **CSS Modules**: Para estilos modulares, evitando colisiones de clases (sin uso de estilos en línea).

## Requerimientos Cumplidos (Entrega Completa)
1. **Navegación y Rutas**:
   - `/`: Listado de productos (Catálogo).
   - `/product/:id`: Detalle del producto seleccionado.
   - `/carrito`: Vista del carrito con los productos seleccionados.
2. **Contexto (CartContext)**:
   - Implementado para almacenar los ítems, sumar cantidades totales y vaciar la selección.
3. **Componentes (Presentacionales y Contenedores)**:
   - Separación de lógica (Containers) y vista (Presentational Components).
4. **Datos Asíncronos**:
   - Consumo de catálogo a través de un archivo JSON (`productos.json`) simulando una API externa.

## Estructura de Directorios

El proyecto mantiene una estructura estricta y organizada dentro de la carpeta `src`:

📦 src
 ┣ 📂 componentes
 ┃ ┣ 📂 carrito
 ┃ ┃ ┣ 📜 Cart.jsx                  # Vista principal del carrito (lista los items)
 ┃ ┃ ┗ 📜 Cart.module.css           # Estilos de la vista del carrito
 ┃ ┣ 📂 catalogo
 ┃ ┃ ┣ 📜 Item.jsx                  # Tarjeta individual de cada producto
 ┃ ┃ ┣ 📜 ItemDetail.jsx            # Presentacional: Información detallada y botón agregar
 ┃ ┃ ┣ 📜 ItemDetail.module.css
 ┃ ┃ ┣ 📜 ItemDetailContainer.jsx   # Contenedor: Busca un producto por ID
 ┃ ┃ ┣ 📜 ItemList.jsx              # Mapea y renderiza la lista de <Item />
 ┃ ┃ ┣ 📜 ItemListContainer.jsx     # Contenedor: Carga todo el catálogo
 ┃ ┃ ┗ 📜 catalogo.module.css       # Estilos generales del catálogo
 ┃ ┗ 📂 layout
 ┃   ┣ 📜 CartWidget.jsx            # Ícono del carrito en el navbar (conectado al context)
 ┃   ┣ 📜 CartWidget.module.css
 ┃   ┣ 📜 Layout.jsx                # Estructura base (NavBar arriba, Footer abajo)
 ┃   ┣ 📜 NavBar.jsx                # Menú de navegación
 ┃   ┗ 📜 NavBar.module.css
 ┣ 📂 context
 ┃ ┗ 📜 CartContext.jsx             # "La bóveda": Estado global del carrito y sus funciones
 ┣ 📂 css
 ┃ ┗ 📜 index.css                   # Estilos globales y reseteos básicos
 ┣ 📂 data
 ┃ ┗ 📜 productos.json              # Base de datos simulada (Suministros)
 ┣ 📜 App.jsx                       # Configuración de todas las rutas (<Routes>)
 ┗ 📜 main.jsx                      # Punto de entrada (Inyecta el Provider y el Router)

## Instalación y Ejecución Local

Para correr este proyecto en tu entorno local:

1. Clonar el repositorio.
2. Instalar las dependencias en la terminal:
   ```bash
   npm install