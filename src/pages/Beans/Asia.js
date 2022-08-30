import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import EyDetailCard from "../../components/BeanDetailCards/EyDetailCard";
import SuDetailCard from "../../components/BeanDetailCards/SuDetailCard";
import OrderButton from "../../components/Button/OrderButton";

const Asia = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [eyCard, setEyCard] = useState(false);
  const [suCard, setSuCard] = useState(false);

  return (
    <div className="container bean-map ">
      <div className="bg-white w-full h-full  p-20 mx-auto">
        <ul className="flex items-center gap-7">
          <NavLink to="/beans/america">
            <li className="font-medium tracking-tight uppercase underline text-xl 	underline-offset-4 text-gray88 ">
              America
            </li>
          </NavLink>
          <NavLink to="/beans/africa">
            <li className="font-medium  tracking-tight uppercase underline text-xl 	underline-offset-4 text-gray88">
              Africa
            </li>
          </NavLink>
          <NavLink to="/beans/asia">
            <li className="font-medium  tracking-tight uppercase underline  text-xl	underline-offset-4 text-gray88">
              Asia
            </li>
          </NavLink>
        </ul>
        <div className="grid grid-cols-4 gap-14 duration-200 ease-linear">
          <div className="col-span-2 ">
            <div className="w-2/3 h-full mx-auto ">
              <img
                src="../bean/asia.png"
                alt=""
                className="w-full h-full object-contain "
              />
            </div>
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onMouseEnter={() => {
              setEyCard(true);
              setSuCard(false);
            }}
            onMouseLeave={() => {
              setEyCard(false);
            }}
          >
            {!eyCard ? (
              <div className="bg-map_bean_color p-6 text-su_btn">
                <img
                  src="../bean/bean.png"
                  alt=""
                  className="w-full mt-48 mx-auto"
                />
                <p className="mt-40 font-bold text-2xl uppercase">
                  ENCHANTING YUNNAN
                </p>
                <p className="mt-16">China</p>
              </div>
            ) : (
              <EyDetailCard></EyDetailCard>
            )}
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onMouseEnter={() => {
              setSuCard(true);
              setEyCard(false);
            }}
            onMouseLeave={() => {
              setSuCard(false);
            }}
          >
            {!suCard ? (
              <div className="bg-map_bean_color p-6 text-su_btn">
                <img
                  src="../bean/bean.png"
                  alt=""
                  className="w-full mt-48 mx-auto"
                />
                <p className="mt-40 font-bold text-2xl uppercase">
                  SUMATRA MANDHELING
                </p>
                <p className="mt-16">Indonesia</p>
              </div>
            ) : (
              <SuDetailCard></SuDetailCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asia;
