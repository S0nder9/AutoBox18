import React from "react";
import styles from "./WindowForPricesAndServices.module.css";
import useHttp from "../../../Hooks/useHttp";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const WindowForPricesAndServices = () => {
  const { id } = useParams();

  const { data, loader, error } = useHttp(
    "https://autobox18-ba317-default-rtdb.firebaseio.com/dataPricesAndServices.json",
    {
      method: "GET",
    }
  );

  if (loader) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  if (!data || !data[id]) {
    return <p>Нет доступных данных</p>;
  }

  return (
    <>
      {/* <Helmet>
        <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      </Helmet> */}

      <div className={styles.locationDiv}>
        <div className={styles.mainContainer}>
          <div className="centered">
            <p className="textGrayHeavy" style={{ margin: "0 0 80px 0" }}>
              {data[id].Title}
            </p>
          </div>

          <div className={styles.wrapperColumes}>
            <div className="centered">
              <p className="textBlackBig">УСЛУГА</p>
            </div>
            <div className={styles.locationOfObjects}>
              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Service.First}</p>
              </div>

              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Service.Second}</p>
              </div>

              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Service.Third}</p>
              </div>
            </div>
          </div>

          <div className={styles.wrapperColumes}>
            <div className="centered">
              <p className="textBlackBig">ЦЕНА</p>
            </div>
            <div className={styles.locationOfObjects}>
              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Price.First}</p>
              </div>

              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Price.Second}</p>
              </div>

              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].Price.Third}</p>
              </div>
            </div>
          </div>

          <div className={styles.wrapperColumes}>
            <div className="centered">
              <p className="textBlackBig">ВРЕМЯ РАБОТЫ</p>
            </div>
            <div className={styles.locationOfObjects}>
              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].TimeOfWork.First}</p>
              </div>

              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].TimeOfWork.Second}</p>
              </div>

              <div className={styles.crossWhithText}>
                <box-icon name='x' color="#FF5C00" />
                <p className="textGraySmall">{data[id].TimeOfWork.Third}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WindowForPricesAndServices;
