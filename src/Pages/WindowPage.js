import React from "react";
import { useParams } from "react-router-dom";
import WindowForPricesAndServices from "../Components/UI/Window/WindowForPricesAndServices";

const WindowPage = () => {
  const { id } = useParams();
  return <WindowForPricesAndServices id={id} />;
};

export default WindowPage;
