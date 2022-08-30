import React from "react";
import OrderButton from "../Button/OrderButton";

const AroDetailCard = ({ setIceDripAro, sethandcraftAro }) => {
  return (
    <div
      className={` col-span-1 text-white flex flex-col relative h-full border-gray `}
    >
      <div className="absolute inset-0 bg-hover z-0"></div>
      <div className="grow pt-8 pb-20 px-5 text-lg flex flex-col  z-10">
        <h2 className="uppercase text-3xl font-bold pb-10 border-b-2 border-white">
          AROMATIC SHADOW
        </h2>
        <div className="pt-8 flex justify-between ">
          <span className="capitalize">Origin</span>
          <span className="uppercase">ETHIOPIA</span>
        </div>
        <div className="pt-3 flex justify-between ">
          <span className="capitalize">Roast level</span>
          <span className="uppercase">MEDIUM</span>
        </div>
        <h3 className="mt-20 pb-3  capitalize border-b-2 border-white ">
          Cupping notes
        </h3>
        <ul className="mt-4 icedrip-detail-list ">
          <li>White flowers</li>
          <li>Citrus</li>
          <li>Molasses</li>
          <li>Medium Body</li>
          <li>Round Mouthfeel</li>
        </ul>
        <OrderButton
          btnColor="aro"
          content="View More"
          onClick={() => {
            sethandcraftAro(false);
            setIceDripAro(false);
          }}
        ></OrderButton>
      </div>
    </div>
  );
};

export default AroDetailCard;
