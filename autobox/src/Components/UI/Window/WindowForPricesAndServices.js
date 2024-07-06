import React from "react";
import styles from "./WindowForPricesAndServices.module.css";
import useHttp from "../../../Hooks/useHttp";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Loading from "../LoadingGroup/Loading";
import ErrorPopup from "../ErrorGroup/ErrorPopup";

const WindowForPricesAndServices = () => {
  const { id } = useParams();

  const { data, loader, error } = useHttp(
    "https://autobox18-ba317-default-rtdb.firebaseio.com/dataPricesAndServices.json",
    {
      method: "GET",
    }
  );

  if (loader) return <div className="centered" style={{height: "100vh"}}><Loading/></div>;
  if (error) return <ErrorPopup timeOut = "5000" message = {error}/>;
  
  if (!data || !data[id]) {
    return <ErrorPopup timeOut = "5000" message = "Нет доступных данных"/>;;
  }

return (
    <div className={styles.container}>

      <div className={styles.locationDiv}>
        
       
        <div className={styles.mainContainer}>
        
          <div className="centered">
            <p className="textGrayHeavy" style={{ margin: "0 0 80px 0" }}>
              {data[id].Title}

            </p>
             <div className = {styles.overlay}>
            <Link to = "/pricesAndServices"><box-icon name='x' color="#000" size = "55px"/></Link>
            </div>
          </div>

           

          <div className={styles.wrapperColumes}>
            <div className="centered">
              <p className="textBlackBig">УСЛУГА</p>
            </div>
            <div className={styles.locationOfObjects}>
              {data[id].Service.First && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Service.First}</p>
              </div>}

              {data[id].Service.Second && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Service.Second}</p>
              </div>}

              {data[id].Service.Third && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Service.Third}</p>
              </div>}
            </div>
          </div>

          <div className={styles.wrapperColumes}>
            <div className="centered">
              <p className="textBlackBig">ЦЕНА</p>
            </div>

            <div className={styles.locationOfObjects}>
              {data[id].Price.First && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Price.First}</p>
              </div>}

              {data[id].Price.Second && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Price.Second}</p>
              </div>}

              {data[id].Price.Third && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Price.Third}</p>
              </div>}
            </div>
          </div>

          <div className={styles.wrapperColumes}>
            <div className="centered">
              <p className="textBlackBig">ВРЕМЯ РАБОТЫ</p>
            </div>

            <div className={styles.locationOfObjects}>
              {data[id].TimeOfWork.First && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].TimeOfWork.First}</p>
              </div>}

              {data[id].TimeOfWork.Second && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].TimeOfWork.Second}</p>
              </div>}

              {data[id].TimeOfWork.Third && <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].TimeOfWork.Third || ""}</p>
              </div>}
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );

};

export default WindowForPricesAndServices;
