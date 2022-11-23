import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MenuTab from "../Tabs/MenuTab";

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>
            <main className="container-fluid bg-dark">
                <MenuTab />
                <Outlet />
            </main>
            <footer>
                <Footer />

            </footer>
        </>
    );
}

export default Layout