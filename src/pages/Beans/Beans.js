import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Beans = ({ noPlane }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const [america, setAmerica] = useState(false);
  const [africa, setAfrica] = useState(false);
  const [asia, setAsia] = useState(false);

  return (
    <div className="container ">
      <div className="bg-icedrip_bg  w-full h-full relative overflow-hidden mt-100">
        <div className=" w-full h-full  translate-x-96 max-h-[573px]">
          <img
            src="/bean/map.svg "
            alt=""
            className="w-4/5 h-full   object-cover "
          />
        </div>
        <Link to="/beans/america">
          <span
            onMouseEnter={() => {
              setAmerica(true);
              setAfrica(false);
              setAsia(false);
            }}
            className={` ${
              america ? "underline underline-offset-4" : ""
            } absolute america left-[42%] top-[56%] z-[1] font-medium tracking-tight uppercase `}
          >
            America
          </span>
        </Link>
        <Link to="/beans/africa">
          <span
            onMouseEnter={() => {
              setAmerica(false);
              setAfrica(true);
              setAsia(false);
            }}
            className={` ${
              africa ? "underline underline-offset-4" : ""
            } absolute africa  left-[67%] top-[65%] z-[1] font-medium tracking-tight uppercase `}
          >
            Africa
          </span>
        </Link>
        <Link to="/beans/asia">
          <span
            onMouseEnter={() => {
              setAmerica(false);
              setAfrica(false);
              setAsia(true);
            }}
            className={` ${
              asia ? "underline underline-offset-4" : ""
            } absolute asia  left-[87%] top-[40%] z-[1] font-medium tracking-tight uppercase `}
          >
            Asia
          </span>
        </Link>
        <div className="w-auto absolute  -translate-y-[150%] ml-8">
          <img
            src="bean/bean.png"
            alt=""
            className="w-1/2 h-full object-cover"
          />
        </div>
        {!noPlane ? (
          <>
            <div className="absolute  top-10 right-5 flex items-center gap-4">
              <span className="text-3xl uppercase">
                Discover mellower coffee beans all over the world
              </span>
            </div>
            <div className="absolute  bottom-10 left-5 flex items-center gap-4">
              <span className="text-3xl uppercase">
                Discover mellower coffee beans all over the world
              </span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Beans;
