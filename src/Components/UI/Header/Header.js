import React, { useState } from "react";
import styles from "./Header.module.css";
import Enrol from "../Buttons/Enrol";
import useHideHeader from "../../../Hooks/useHideHeader";
import Logo from "../ComponentsImg/Logo";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SocialIcons from "../../Icons/SocialIcons";

const Header = () => {
    const isScrolled = useHideHeader();
    const [isOpen, setIsOpen] = useState(false);

    const toggleBurgerMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <div
                className={styles.hideDiv}
                style={{
                    display: isScrolled ? "block" : "none",
                    width: "100%",
                    height: "100px",
                    margin: "20px 0 0 0",
                }}
            ></div>
            <div
                className={`centered ${styles.mainWrapperForHeader}`}
                style={{
                    margin: isScrolled ? "-150px 0 0 0" : "0px",
                    position: isScrolled ? "fixed" : "relative",
                }}
            >
                <div
                    className={styles.headerWrapper}
                    style={{
                        backgroundColor: isScrolled ? "white" : "",
                        margin: isScrolled ? "0px" : "20px 0 0 0",
                        borderRadius: isScrolled ? "20px" : "0",
                        boxShadow: isScrolled
                            ? "3px 4px 2px #dad9d9"
                            : "0px 0px 0px #fff",
                    }}
                >
                    <Link to="/main">
                        <Logo />
                    </Link>

                    <Link to="/pricesAndServices">
                        <button
                            className={
                                isScrolled ? "buttonHoverBlack" : "buttonHover"
                            }
                        >
                            цены и услуги
                        </button>
                    </Link>

                    <a
                        href="http://xn--18-6kcipah3a9amjv.xn--p1ai/novosti/my-otkryli-avtoservis"
                        target="_blank"
                    >
                        <button
                            className={
                                isScrolled ? "buttonHoverBlack" : "buttonHover"
                            }
                        >
                            запчасти
                        </button>
                    </a>

                    <Link to="/contacts">
                        <button
                            className={
                                isScrolled ? "buttonHoverBlack" : "buttonHover"
                            }
                        >
                            контакты
                        </button>
                    </Link>

                    <Enrol text="Записаться" />
                </div>
            </div>

            <div className={styles.burgerMenu}>
                <div className="centered">
                    <div className={styles.wrapperForLabel}>
                        <label className={styles.burger} htmlFor="burger">
                            <input
                                type="checkbox"
                                id="burger"
                                checked={isOpen}
                                onChange={toggleBurgerMenu}
                            />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>

                {isOpen && (
                    <div className={styles.toggleInfo}>
                        <div className={styles.toggleInfoMain}>
                            <div className={styles.wrapperForWindow}>
                                <Link to="/main">
                                    <Logo />
                                </Link>

                                <Link to="/pricesAndServices">
                                    <button className={"buttonHover"}>
                                        цены и услуги
                                    </button>
                                </Link>

                                <a
                                    href="http://xn--18-6kcipah3a9amjv.xn--p1ai/novosti/my-otkryli-avtoservis"
                                    target="_blank"
                                >
                                    <button className={"buttonHover"}>
                                        запчасти
                                    </button>
                                </a>

                                <Link to="/contacts">
                                    <button
                                        className={"buttonHover"}
                                        style={{ fontSize: "30px !important" }}
                                    >
                                        контакты
                                    </button>
                                </Link>

                                <Enrol text="Записаться" />
                                <SocialIcons />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
