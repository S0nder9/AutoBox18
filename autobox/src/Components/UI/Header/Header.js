import React from "react";
import styles from "./Header.module.css";
import Enrol from "../Buttons/Enrol";
import useHideHeader from "../../../Hooks/useHideHeader";
import Logo from "../ComponentsImg/Logo";

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
                    <Logo />
                    {/* <p className="textWhiteBig" style={{color: isScrolled ? "black" : ""}}>цены и услуги</p> */}

                    <button class="cta">
                        <span>запчасти</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                        </svg>
                    </button>

                    <p className="textWhiteBig" style={{ color: isScrolled ? "black" : "" }}>запчасти</p>
                    <p className="textWhiteBig" style={{ color: isScrolled ? "black" : "" }}>контакты</p>
                    <Enrol text="Записаться" />
                </div>

            </div>
        </>
    );
}

export default Header;
