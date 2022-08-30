import React from "react";
import OrderButton from "../Button/OrderButton";

const EthiDetailCard = () => {
  return (
    <div className=" col-span-1 text-white flex flex-col relative h-full  border-gray ">
      <div className="absolute inset-0  bg-hover z-0"></div>
      <div className="grow pt-8 pb-20 px-5 text-lg flex flex-col  z-10">
        <h2 className="uppercase text-3xl  font-bold pb-3 border-b-2 border-white">
          ETHIOPIA YIRGACHEFFE
        </h2>
        <div className="pt-8 flex justify-between ">
          <span className="capitalize">Origin</span>
          <span className="uppercase">ethiopia</span>
        </div>
        <div className="pt-3 flex justify-between ">
          <span className="capitalize">Roast level</span>
          <span className="uppercase">light</span>
        </div>
        <h3 className="mt-20 pb-3  capitalize border-b-2 border-white ">
          Cupping notes
        </h3>
        <ul className="mt-4 icedrip-detail-list ">
          <li>Fragrance of flowers</li>
          <li>Sweet orange </li>
          <li>Honey</li>
          <li>Kumquat</li>
          <li>Light mouthfeel</li>
        </ul>
        <OrderButton btnColor="ethi" content="View More"></OrderButton>
      </div>
    </div>
  );
};

export default EthiDetailCard;
