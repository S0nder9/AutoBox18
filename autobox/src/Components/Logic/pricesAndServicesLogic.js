import React from "react";
import { Link } from "react-router-dom";
import PicesAndServicesCardWithTheMove from "../UI/Cards/PicesAndServicesCardWithTheMove";
import img0 from "../../Images/ImportantImages/Для карточки 1.png";
import img1 from "../../Images/ImportantImages/Для карточки 2.png";
import img2 from "../../Images/ImportantImages/Для карточки 3.png";
import img3 from "../../Images/ImportantImages/Для карточки 4.png";

import useHttp from "../../Hooks/useHttp";
import Loading from "../UI/LoadingGroup/Loading";
import ErrorPopup from "../UI/ErrorGroup/ErrorPopup";

const PricesAndServicesLogic = () => {
  const { data, loader, error } = useHttp(
    "https://autobox18-ba317-default-rtdb.firebaseio.com/logicPricesAndServices.json",
    {
      method: "GET",
    }
  );

  if (loader) return <div className="centered"><Loading/></div>;
  if (error) return <ErrorPopup timeOut="5000" message={error}/>;

  const arrayForPricesAndServices = data
    ? Object.entries(data).map(([key, value]) => ({ id: key, ...value }))
    : [];

  const imageMap = {
    0: img0,
    1: img1,
    2: img2,
    3: img3
  };

  return (
    <>
      {arrayForPricesAndServices.map((item) => (
        <Link key={item.id} to={`/pricesAndServices/${item.id}`}>
          <PicesAndServicesCardWithTheMove
            textBig={item.textBig}
            textSmall="Нажмите, чтобы узнать больше информации"
            backgroundImageUrl={imageMap[item.id]}
          />
        </Link>
      ))}
    </>
  );
};

export default PricesAndServicesLogic;
