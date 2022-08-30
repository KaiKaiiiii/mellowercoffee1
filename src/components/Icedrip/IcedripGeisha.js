import React from "react";
import GeishaDetailCard from "../BeanDetailCards/GeishaDetailCard";
import ExitButton from "../Button/ExitButton";
import OrderButton from "../Button/OrderButton";

const IcedripGeisha = ({ iceDripGeisha, setIceDripGeisha }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        iceDripGeisha
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton
        detail
        onClick={() => setIceDripGeisha(!iceDripGeisha)}
      ></ExitButton>

      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center  border-t-0 border-r-2 border-l-0">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full grid grid-cols-4 ">
        <div className="col-span-3">
          <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-2 border-t-0 border-b-0  border-l-0 border-gray ">
            Ice Drip coffee
          </h2>
          <div className="grid grid-cols-3  h-[calc(100%-80px)]">
            {/* <div className=" flex flex-col px-7 border-2 border-l-0 border-gray py-14">
              <div className="bg-babycino py-2 px-3 text-center icedrip-tooltip">
                <p className="text-center text-sm break-words max-w-[150px] font-medium mx-auto ">
                  Brew cold coffee that drips ice cold water slowly over coffee
                  grounds. Produces a brew that’s low in acidity and bitterness
                  for a smooth, approachable result.
                </p>
              </div>
              <div className=" flex flex-col items-center  mt-8">
                <img
                  src="/Beverages/geisha_icedrip.png"
                  alt=""
                  className="w-24 h-auto"
                />
                <span className="mt-8 text-geisha_icedrip uppercase font-medium">
                  Coffee Cold Dripper
                </span>
              </div>
            </div> */}

            <div
              className={`bg-icedrip_bg  flex px-7  flex-col items-center justify-center  pb-14 border-2 border-l-0  border-gray `}
            >
              <div className="w-52 ">
                <img
                  src="/Beverages/icedrip_black.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center ">
                <p className="uppercase tracking-wide">black</p>
                <span className="italic tracking-wide">138.000 VND</span>
              </div>
              <OrderButton btnColor="geisha"></OrderButton>
            </div>
            <div
              className={`bg-icedrip_bg  flex px-7  flex-col items-center justify-center  pb-14 border-2 border-l-0  border-gray `}
            >
              <div className="w-52 ">
                <img
                  src="/Beverages/icedrip_white.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center ">
                <p className="uppercase tracking-wide">white</p>
                <span className="italic tracking-wide">148.000 VND</span>
              </div>
              <OrderButton btnColor="geisha"></OrderButton>
            </div>
            <div
              className={`bg-icedrip_bg  flex px-7  flex-col items-center justify-center  pb-14 border-2 border-l-0  border-gray `}
            >
              <div className="w-52 ">
                <img
                  src="/Beverages/icedrip_bottle.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center ">
                <p className="uppercase tracking-wide">bottle</p>
                <span className="italic tracking-wide">168.000 VND</span>
              </div>
              <OrderButton btnColor="geisha"></OrderButton>
            </div>
          </div>
        </div>
        <GeishaDetailCard></GeishaDetailCard>
      </div>
    </div>
  );
};

export default IcedripGeisha;
