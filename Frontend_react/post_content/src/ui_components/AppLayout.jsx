import clsx from "clsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from '../../public/css/AppLayout.module.css';
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const AppLayout = () => {
  const {isDarkMode} = useContext(ThemeContext)
    
    return (
        <div>
            <main className={clsx('w-100',{'bg-black':isDarkMode} )}>
                <NavBar />
                <Outlet/>
                <Footer />
            </main>
        </div>
    )
};

export default AppLayout;