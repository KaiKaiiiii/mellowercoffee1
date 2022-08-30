import React from "react";
import ColomDetailCard from "../BeanDetailCards/ColomDetailCard";
import ExitButton from "../Button/ExitButton";
import OrderButton from "../Button/OrderButton";

const HandcraftColom = ({ handcraftColom, sethandcraftColom }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        handcraftColom
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton
        detail
        onClick={() => sethandcraftColom(!handcraftColom)}
      ></ExitButton>

      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-l-0   border-t-0 border-r-2">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full grid grid-cols-4 ">
        <div className="col-span-3">
          <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-2 border-t-0 border-b-0  border-l-0 border-gray ">
            handcrafted coffee
          </h2>
          <div className="grid grid-cols-3 mt-[-80px] pt-20 h-full">
            <div
              className={`bg-icedrip_bg relative flex px-7  flex-col items-center justify-end pb-20 border-2 border-l-0  border-gray `}
            >
              {/* <div className="absolute top-16 left-7 z-10 ">
                <div className="bg-babycino py-2 px-3 text-center absolute left-8 icedrip-tooltip">
                  <p className="text-center text-sm break-words   max-w-[300px] font-medium mx-auto ">
                    Producing delicate & clean flavors.
                  </p>
                </div>
                <img
                  src="/Beverages/colom_chemex.png"
                  alt=""
                  className="w-[52px] h-full object-cover"
                />
              </div> */}
              <div className="w-52 ">
                <img
                  src="/Beverages/handcraft.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center ">
                <p className="uppercase tracking-wide">chemex</p>
                <span className="italic tracking-wide">238.000 VND</span>
              </div>
              <OrderButton btnColor="colom"></OrderButton>
            </div>
            <div
              className={`bg-icedrip_bg relative flex px-7  flex-col items-center justify-end pb-20 border-2 border-l-0  border-gray `}
            >
              <div className="w-52 ">
                {/* <div className="absolute top-16 left-7 z-10 ">
                  <div className="bg-babycino py-2 px-3 text-center absolute left-8 icedrip-tooltip">
                    <p className="text-center text-sm break-words   max-w-[300px] font-medium mx-auto ">
                      Producing a consistent balance flavor.
                    </p>
                  </div>
                  <img
                    src="/Beverages/colom_v60.png"
                    alt=""
                    className="w-[52px] h-full object-cover"
                  />
                </div> */}
                <img
                  src="/Beverages/handcraft.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center ">
                <p className="uppercase tracking-wide">v60</p>
                <span className="italic tracking-wide">238.000 VND</span>
              </div>
              <OrderButton btnColor="colom"></OrderButton>
            </div>
            <div
              className={`bg-icedrip_bg relative flex px-7  flex-col items-center justify-end pb-20 border-2 border-l-0  border-gray `}
            >
              <div className="w-52 ">
                {/* <div className="absolute top-16 left-7 z-10 ">
                  <div className="bg-babycino py-2 px-3 text-center absolute left-8 icedrip-tooltip">
                    <p className="text-center text-sm break-words   max-w-[300px] font-medium mx-auto ">
                      Producing a rich full-bodied flavor.
                    </p>
                  </div>
                  <img
                    src="/Beverages/colom_frenchpress.png"
                    alt=""
                    className="w-[52px] h-full object-cover"
                  />
                </div> */}
                <img
                  src="/Beverages/handcraft.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 text-center ">
                <p className="uppercase tracking-wide">french Press</p>
                <span className="italic tracking-wide">238.000 VND</span>
              </div>
              <OrderButton btnColor="colom"></OrderButton>
            </div>
          </div>
        </div>
        <ColomDetailCard></ColomDetailCard>
      </div>
    </div>
  );
};

export default HandcraftColom;
