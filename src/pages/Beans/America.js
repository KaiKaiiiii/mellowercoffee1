import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ColomDetailCard from "../../components/BeanDetailCards/ColomDetailCard";
import GeishaDetailCard from "../../components/BeanDetailCards/GeishaDetailCard";

const America = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [geishaCard, setGeishaCard] = useState(false);
  const [colomCard, setColomCard] = useState(false);
  useEffect(() => {
    console.log(geishaCard, colomCard);
  }, [geishaCard, colomCard]);
  return (
    <div className="container bean-map ">
      <div className="bg-white w-full h-full  p-20 mx-auto">
        <ul className="flex items-center gap-7">
          <NavLink to="/beans/america">
            <li className="font-medium  tracking-tight uppercase underline text-xl 	underline-offset-4 text-gray88 ">
              America
            </li>
          </NavLink>
          <NavLink to="/beans/africa">
            <li className="font-medium tracking-tight uppercase underline text-xl 	underline-offset-4 text-gray88">
              Africa
            </li>
          </NavLink>
          <NavLink to="/beans/asia">
            <li className="font-medium tracking-tight uppercase underline  text-xl 	underline-offset-4 text-gray88">
              Asia
            </li>
          </NavLink>
        </ul>
        <div className="grid grid-cols-4 gap-14 duration-200 ease-linear">
          <div className="col-span-2 ">
            <div className="w-3/4 h-full mx-auto max-w-md ">
              <img
                src="../bean/american.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onMouseEnter={() => {
              setGeishaCard(true);
              setColomCard(false);
            }}
            onMouseLeave={() => {
              setGeishaCard(false);
            }}
          >
            {!geishaCard ? (
              <div className="bg-map_bean_color p-6 text-su_btn">
                <img
                  src="../bean/bean.png"
                  alt=""
                  className="w-full mt-48 mx-auto"
                />
                <p className="mt-40 font-bold text-2xl uppercase">
                  FLAME OF GEISHA
                </p>
                <p className="mt-16">Panama</p>
              </div>
            ) : (
              <GeishaDetailCard></GeishaDetailCard>
            )}
          </div>
          <div
            className="col-span-1 cursor-pointer"
            onMouseEnter={() => {
              setColomCard(true);
              setGeishaCard(false);
            }}
            onMouseLeave={() => {
              setColomCard(false);
            }}
          >
            {!colomCard ? (
              <div className="bg-map_bean_color p-6 text-su_btn">
                <img
                  src="../bean/bean.png"
                  alt=""
                  className="w-full mt-48 mx-auto"
                />
                <p className="mt-40 font-bold text-2xl uppercase">COLOMBIA</p>
                <p className="mt-16">Colombia</p>
              </div>
            ) : (
              <ColomDetailCard></ColomDetailCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default America;
