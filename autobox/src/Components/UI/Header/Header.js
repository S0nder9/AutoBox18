import React from "react";
import styles from "./Header.module.css";
import Enrol from "../Buttons/Enrol";
import useHideHeader from "../../../Hooks/useHideHeader";
import Logo from "../ComponentsImg/Logo";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
    const isScrolled = useHideHeader();

    return (
        <>
            <div style={{
                display: isScrolled ? "block" : "none",
                width: "100%",
                height: "100px",
                margin: "20px 0 0 0"
            }}></div>
            <div
                className={`centered ${styles.mainWrapperForHeader}`}
                style={{ margin: isScrolled ? '-150px 0 0 0' : '0px', position: isScrolled ? 'fixed' : 'relative' }}
            >
                <div
                    className={styles.headerWrapper}
                    style={{
                        backgroundColor: isScrolled ? 'white' : '',
                        margin: isScrolled ? '0px' : '20px 0 0 0',
                        borderRadius: isScrolled ? '20px' : '0',
                        boxShadow: isScrolled ? '3px 4px 2px #dad9d9' : '0px 0px 0px #fff'
                    }}
                >
                    <Link to="/main">
                        <Logo />
                    </Link>

                    <Link to = "/pricesAndServices">
                        <button className={isScrolled ? "buttonHoverBlack" : "buttonHover"}>
                            цены и услуги
                        </button>
                    </Link>

                    <a href="http://xn--18-6kcipah3a9amjv.xn--p1ai/novosti/my-otkryli-avtoservis" target="_blank">
                        <button className={isScrolled ? "buttonHoverBlack" : "buttonHover"}>
                            запчасти
                        </button>
                    </a>

                    <Link to = "/contacts">
                        <button className={isScrolled ? "buttonHoverBlack" : "buttonHover"}>
                        контакты
                        </button>
                    </Link>

                    <Enrol text="Записаться" />
                </div>

            </div>
        </>
    );
}

export default Header;
