// import React from "react";
// import { useSelector } from "react-redux";
// import PicesAndServicesCardWithTheMove from "../UI/Cards/PicesAndServicesCardWithTheMove";
// import { Link } from "react-router-dom";
// import TestImg from "./Group 3.jpg";

// const PricesAndServicesLogic = () => {
//     const arrayForPricesAndServices = [
//         {
//             id: "1",
//             textBig: "jdoijfdo1",
//             textSmall: "dijf09idsjg91",
//             backgroundImageUrl: TestImg
//         },
//         {
//             id: "2",
//             textBig: "jdoijfdo2",
//             textSmall: "dijf09idsjg92",
//             backgroundImageUrl: TestImg
//         },
//         {
//             id: "3",
//             textBig: "jdoijfdo3",
//             textSmall: "dijf09idsjg93",
//             backgroundImageUrl: TestImg
//         },
//         {
//             id: "4",
//             textBig: "jdoijfdo4",
//             textSmall: "dijf09idsjg94",
//             backgroundImageUrl: TestImg
//         },
//     ];

//     return (
//         <>
//             {arrayForPricesAndServices.map((item) => (
//                 <Link key={item.id} to={`/pricesAndServices/${item.id}`}>
//                     <PicesAndServicesCardWithTheMove
//                         textBig={item.textBig}
//                         textSmall={item.textSmall}
//                         backgroundImageUrl={item.backgroundImageUrl}
//                     />
//                 </Link>
//             ))}
//         </>
//     );
// };

// export default PricesAndServicesLogic;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCard } from "../../Store/Slices/openWindowPricesAndServicesSlice";
import PicesAndServicesCardWithTheMove from "../UI/Cards/PicesAndServicesCardWithTheMove";
import { Link } from "react-router-dom";
import TestImg from "./Group 3.jpg";
import Enrol from "../UI/Buttons/Enrol";

const PricesAndServicesLogic = () => {
    const arrayForPricesAndServices = [
        {
            id: "1",
            textBig: "jdoijfdo1",
            textSmall: "dijf09idsjg91",
            backgroundImageUrl: TestImg
        },
        {
            id: "2",
            textBig: "jdoijfdo2",
            textSmall: "dijf09idsjg92",
            backgroundImageUrl: TestImg
        },
        {
            id: "3",
            textBig: "jdoijfdo3",
            textSmall: "dijf09idsjg93",
            backgroundImageUrl: TestImg
        },
        {
            id: "4",
            textBig: "jdoijfdo4",
            textSmall: "dijf09idsjg94",
            backgroundImageUrl: TestImg
        },
    ];

    const dispatch = useDispatch();
    const cardToggles = useSelector(state => state.openWindowPricesAndServices.cardToggles);

    const toggleCardHandler = (id) => {
        dispatch(toggleCard({ id }));
    };

    return (
        <>
            {arrayForPricesAndServices.map((item) => (
                <div key={item.id}>
                    <Link to={`/pricesAndServices/${item.id}`}>
                        <PicesAndServicesCardWithTheMove
                            textBig={item.textBig}
                            textSmall={item.textSmall}
                            backgroundImageUrl={item.backgroundImageUrl}
                            onClick={() => toggleCardHandler(item.id)}
                        />
                    </Link>
                    {cardToggles[item.id] && <Enrol text={`Enrol for card ${item.id}`} />}
                </div>
            ))}
        </>
    );
};

export default PricesAndServicesLogic;
