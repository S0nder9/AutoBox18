import React from "react";
import { Link } from "react-router-dom";
import PicesAndServicesCardWithTheMove from "../UI/Cards/PicesAndServicesCardWithTheMove";
import TestImg from "./Group 3.jpg";

const PricesAndServicesLogic = () => {
  const arrayForPricesAndServices = [
    {
      id: "1",
      textBig: "jdoijfdo1",
      textSmall: "dijf09idsjg91",
      backgroundImageUrl: TestImg,
    },
    {
      id: "2",
      textBig: "jdoijfdo2",
      textSmall: "dijf09idsjg92",
      backgroundImageUrl: TestImg,
    },
    {
      id: "3",
      textBig: "jdoijfdo3",
      textSmall: "dijf09idsjg93",
      backgroundImageUrl: TestImg,
    },
    {
      id: "4",
      textBig: "jdoijfdo4",
      textSmall: "dijf09idsjg94",
      backgroundImageUrl: TestImg,
    },
  ];

  return (
    <>
      {arrayForPricesAndServices.map((item) => (
        <Link key={item.id} to={`/pricesAndServices/${item.id}`}>
          <PicesAndServicesCardWithTheMove
            textBig={item.textBig}
            textSmall={item.textSmall}
            backgroundImageUrl={item.backgroundImageUrl}
          />
        </Link>
      ))}
    </>
  );
};

export default PricesAndServicesLogic;
