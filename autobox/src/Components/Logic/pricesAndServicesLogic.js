import React from "react";
import { Link } from "react-router-dom";
import PicesAndServicesCardWithTheMove from "../UI/Cards/PicesAndServicesCardWithTheMove";
import TestImg from "./Group 3.jpg";
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
  if (error) return <ErrorPopup timeOut = "5000" message = {error}/>;

  const arrayForPricesAndServices = data
    ? Object.entries(data).map(([key, value]) => ({ id: key, ...value }))
    : [];

  return (
    <>
      {arrayForPricesAndServices.map((item) => (
        <Link key={item.id} to={`/pricesAndServices/${item.id}`}>
          <PicesAndServicesCardWithTheMove
            textBig={item.textBig}
            textSmall="Нажмите, чтобы узнать больше информации"
            backgroundImageUrl={TestImg}
          />
        </Link>
      ))}
    </>
  );
};

export default PricesAndServicesLogic;