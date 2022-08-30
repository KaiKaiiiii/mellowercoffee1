import React from "react";
import { Link } from "react-router-dom";

const Submenu = ({
  beverages,
  setSignature,
  setFrappe,
  setWhiskey,
  setEspresso,
  setTraditional,
  setIceDrip,
  sethandcraft,
  setIceDripGeisha,
  setIceDripAro,
  setIceDripEy,
  setIceDripColom,
  setIceDripEthi,
  setIceDripSu,
  sethandcraftGeisha,
  sethandcraftAro,
  sethandcraftEy,
  sethandcraftColom,
  sethandcraftEthi,
  sethandcraftSu,
}) => {
  if (beverages) {
    return (
      <div className="z-50 text-black absolute top-[calc(100%+1px)] submenu   hidden group-hover:block w-[1084px] bg-white  ">
        <div
          className="pl-44 py-16 flex items-center border-2 border-t-0 border-gray hover  uppercase text-2xl tracking-widest "
          onClick={() => {
            setSignature(true);
            setFrappe(false);
            setWhiskey(false);
            setEspresso(false);
            setTraditional(false);
            setIceDrip(false);
            sethandcraft(false);
            setIceDripGeisha(false);
            setIceDripAro(false);
            setIceDripEy(false);
            setIceDripColom(false);
            setIceDripEthi(false);
            setIceDripSu(false);
            sethandcraftGeisha(false);
            sethandcraftAro(false);
            sethandcraftEy(false);
            sethandcraftColom(false);
            sethandcraftEthi(false);
            sethandcraftSu(false);
          }}
        >
          EXPLORE OUR signature & seasonal beverages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#958B8B"
            height="48"
            width="48"
            className="-rotate-90 group-hover:fill-white"
          >
            <path d="M24 29 13.8 18.8l.8-.8 9.4 9.4 9.4-9.4.8.8Z" />
          </svg>
        </div>

        <div className="flex ">
          <div className="flex flex-1 caffeine items-center  ">
            <div className=" border-2 border-gray  h-full flex items-baseline pt-44 border-t-0 border-r-0">
              <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
                CAFFEINE
              </span>
            </div>
            <ul className="capitalize w-full  text-lg">
              <li
                className="hover"
                onClick={() => {
                  setFrappe(true);
                  setSignature(false);
                  setWhiskey(false);
                  setEspresso(false);
                  setTraditional(false);
                  setIceDrip(false);
                  sethandcraft(false);
                  setIceDripGeisha(false);
                  setIceDripAro(false);
                  setIceDripEy(false);
                  setIceDripColom(false);
                  setIceDripEthi(false);
                  setIceDripSu(false);
                  sethandcraftGeisha(false);
                  sethandcraftAro(false);
                  sethandcraftEy(false);
                  sethandcraftColom(false);
                  sethandcraftEthi(false);
                  sethandcraftSu(false);
                }}
              >
                Frappe Coffee
              </li>
              <li
                className="hover"
                onClick={() => {
                  setSignature(false);
                  setFrappe(false);
                  setWhiskey(false);
                  setEspresso(false);
                  setTraditional(false);
                  setIceDrip(true);
                  sethandcraft(false);
                  setIceDripGeisha(false);
                  setIceDripAro(false);
                  setIceDripEy(false);
                  setIceDripColom(false);
                  setIceDripEthi(false);
                  setIceDripSu(false);
                  sethandcraftGeisha(false);
                  sethandcraftAro(false);
                  sethandcraftEy(false);
                  sethandcraftColom(false);
                  sethandcraftEthi(false);
                  sethandcraftSu(false);
                }}
              >
                Ice Drip Coffee
              </li>
              <li
                className="hover"
                onClick={() => {
                  setSignature(false);
                  setFrappe(false);
                  setWhiskey(true);
                  setEspresso(false);
                  setTraditional(false);
                  setIceDrip(false);
                  sethandcraft(false);
                  setIceDripGeisha(false);
                  setIceDripAro(false);
                  setIceDripEy(false);
                  setIceDripColom(false);
                  setIceDripEthi(false);
                  setIceDripSu(false);
                  sethandcraftGeisha(false);
                  sethandcraftAro(false);
                  sethandcraftEy(false);
                  sethandcraftColom(false);
                  sethandcraftEthi(false);
                  sethandcraftSu(false);
                }}
              >
                Whiskey Coffee
              </li>
              <li
                className="hover"
                onClick={() => {
                  setSignature(false);
                  setFrappe(false);
                  setWhiskey(false);
                  setEspresso(false);
                  setTraditional(false);
                  setIceDrip(false);
                  sethandcraft(true);
                  setIceDripGeisha(false);
                  setIceDripAro(false);
                  setIceDripEy(false);
                  setIceDripColom(false);
                  setIceDripEthi(false);
                  setIceDripSu(false);
                  sethandcraftGeisha(false);
                  sethandcraftAro(false);
                  sethandcraftEy(false);
                  sethandcraftColom(false);
                  sethandcraftEthi(false);
                  sethandcraftSu(false);
                }}
              >
                handcrafted Coffee
              </li>
              <li
                className="hover"
                onClick={() => {
                  setSignature(false);
                  setFrappe(false);
                  setWhiskey(false);
                  setEspresso(true);
                  setTraditional(false);
                  setIceDrip(false);
                  sethandcraft(false);
                  setIceDripGeisha(false);
                  setIceDripAro(false);
                  setIceDripEy(false);
                  setIceDripColom(false);
                  setIceDripEthi(false);
                  setIceDripSu(false);
                  sethandcraftGeisha(false);
                  sethandcraftAro(false);
                  sethandcraftEy(false);
                  sethandcraftColom(false);
                  sethandcraftEthi(false);
                  sethandcraftSu(false);
                }}
              >
                Espresso Based Coffee
              </li>
              <li
                className="hover"
                onClick={() => {
                  setSignature(false);
                  setFrappe(false);
                  setWhiskey(false);
                  setEspresso(false);
                  setTraditional(true);
                  setIceDrip(false);
                  sethandcraft(false);
                  setIceDripGeisha(false);
                  setIceDripAro(false);
                  setIceDripEy(false);
                  setIceDripColom(false);
                  setIceDripEthi(false);
                  setIceDripSu(false);
                  sethandcraftGeisha(false);
                  sethandcraftAro(false);
                  sethandcraftEy(false);
                  sethandcraftColom(false);
                  sethandcraftEthi(false);
                  sethandcraftSu(false);
                }}
              >
                Traditional Vietnamese Coffee
              </li>
            </ul>
          </div>
          <div className="flex noncaffeine items-center">
            <div className=" border-r-2 border-b-2 border-gray  h-full flex items-center justify-center ">
              <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[300px] mx-[-30px] ">
                NONCAFFEINE
              </span>
            </div>
            <ul className="w-full h-full flex flex-col justify-between text-lg">
              <li className="hover">Tea</li>
              <li className="hover">Frappe</li>
              <li className="pr-36 hover">Other Drinks</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="z-50 text-black flex max-h-[620px] flex-col absolute top-[calc(100%+1px)] submenu-beans   hidden group-hover:block w-[965px] bg-white  ">
        <Link to="/beans">
          <div
            className="pl-14 py-16 flex items-center border-2 border-t-0 border-gray hover  uppercase text-2xl tracking-widest "
            onClick={() => {
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            Discover mellower coffee beans all over the world
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#958B8B"
              height="48"
              width="48"
              className="-rotate-90 group-hover:fill-white"
            >
              <path d="M24 29 13.8 18.8l.8-.8 9.4 9.4 9.4-9.4.8.8Z" />
            </svg>
          </div>
        </Link>

        <ul className="w-full h-full  grow text-lg grid grid-cols-3 grid-rows-2 beans ">
          <Link to="/beans/geisha">
            <li className="hover !border-r-2 border-l-2">
              <span>Flame of</span>
              <br />
              <span>geisha</span>
            </li>
          </Link>
          <Link to="/beans/aromatic">
            <li className="hover !border-r-2">
              <span>aromatic</span>
              <br />
              <span>shadow</span>
            </li>
          </Link>
          <Link to="/beans/eyunnan">
            <li className="hover !border-r-2">
              <span>enchanting</span>
              <br />
              <span>Yunnan</span>
            </li>
          </Link>
          <Link to="/beans/colombia">
            <li className="hover !border-2 !border-t-0  h-full">Colombia</li>
          </Link>
          <Link to="/beans/ethiopia">
            <li className="hover !border-r-2 ">
              <span>Ethiopia</span>
              <br />
              <span>Yirgacheffe</span>
            </li>
          </Link>
          <Link to="/beans/sumatra">
            <li className="hover  !border-r-2">
              <span>Sumatra</span>
              <br />
              <span>Mandheling</span>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
};

export default Submenu;
