import React from "react";
import { Link } from "react-router-dom";
import PicesAndServicesCardWithTheMove from "../UI/Cards/PicesAndServicesCardWithTheMove";
import TestImg from "./Group 3.jpg";
import useHttp from "../../Hooks/useHttp";
import Loading from "../UI/LoadingGroup/Loading";

const PricesAndServicesLogic = () => {
  const { data, loader, error } = useHttp(
    "https://autobox18-ba317-default-rtdb.firebaseio.com/logicPricesAndServices.json",
    {
      method: "GET",
    }
  );

  if (loader) return <div className="centered"><Loading/></div>;
  if (error) return <p>Error: {error}</p>;

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



  // const arrayForPricesAndServices = [
  //   {
  //     id: "1",
  //     textBig: "jdoijfdo1",
  //     textSmall: "dijf09idsjg91",
  //     backgroundImageUrl: TestImg,
  //   },
  //   {
  //     id: "2",
  //     textBig: "jdoijfdo2",
  //     textSmall: "dijf09idsjg92",
  //     backgroundImageUrl: TestImg,
  //   },
  //   {
  //     id: "3",
  //     textBig: "jdoijfdo3",
  //     textSmall: "dijf09idsjg93",
  //     backgroundImageUrl: TestImg,
  //   },
  //   {
  //     id: "4",
  //     textBig: "jdoijfdo4",
  //     textSmall: "dijf09idsjg94",
  //     backgroundImageUrl: TestImg,
  //   },
  // ];