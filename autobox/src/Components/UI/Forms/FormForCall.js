import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./FormForCall.module.css";

const FormForCall = ({ display }) => {
    return (
        <>
            <form className={styles.form} style={{ display: display }}>
                <input placeholder="ВВЕДИТЕ ИМЯ" type="text" name="text" className="input" />
                <input placeholder="ВВЕДИТЕ НОМЕР ТЕЛЕФОНА *" type="text" name="text" className="input" />
                <div className={styles.privacyContainer}>
                    <input type="checkbox" id="privacy" className={styles.checkbox} />
                    <label htmlFor="privacy" className={styles.privacyText}>согласен с <Link>
                        <span className={styles.spanColor}>политикой конфиденциальности</span>
                    </Link>
                    </label>
                </div>
            </form>
        </>
    )
}

export default FormForCall;