import React from "react";
import { useParams } from "react-router-dom";
import Enrol from "../Components/UI/Buttons/Enrol";

const WindowPage = () => {
    const { id } = useParams();
    return <Enrol text={`Enrol for card ${id}`} />;
};

export default WindowPage;
