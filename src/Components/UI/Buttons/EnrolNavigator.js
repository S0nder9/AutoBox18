import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Enrol.module.css";


const EnrolNavigator = (props) => {
    const to = props.to || "/";
    return (
        <>
           <Link to = {to}> <button className={styles.button}>{props.text}</button></Link>
        </>
    )
}

export default EnrolNavigator;