import styles from "./Enrol.module.css";


const Enrol = (props) => {
    // Имплементировать открытие окна
    return (
        <>
           <button className={styles.button}>{props.text}</button>
        </>
    )
}

export default Enrol;