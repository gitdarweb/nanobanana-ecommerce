import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// 1. Importamos el módulo
import styles from "./Layout.module.css";

export default function Layout() {
    return (
        <div>
            <Header />

            {/* 2. Reemplazamos el 'style' por nuestra clase */}
            <main className={styles.mainApocaliptico}>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}