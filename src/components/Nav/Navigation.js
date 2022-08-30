import React, { useState } from "react";
import OrderButton from "../Button/OrderButton";
import Submenu from "../Submenu/Submenu";
import { Link } from "react-router-dom";
import Icedrip from "../Icedrip/Icedrip";
import IcedripGeisha from "../Icedrip/IcedripGeisha";
import IcedripAro from "../Icedrip/IcedripAro";
import IcedripEy from "../Icedrip/IcedripEy";
import IcedripEthi from "../Icedrip/IcedripEthi";
import IcedripColom from "../Icedrip/IcedripColom";
import IcedripSu from "../Icedrip/IcedripSu";
import Handcraft from "../Handcraft/Handcraft";
import HandcraftGeisha from "../Handcraft/HandcraftGeisha";
import HandcraftColom from "../Handcraft/HandcraftColom";
import HandcraftEy from "../Handcraft/HandcraftEy";
import HandcraftAro from "../Handcraft/HandcraftAro";
import HandcraftEthi from "../Handcraft/HandcraftEthi";
import HandcraftSu from "../Handcraft/HandcraftSu";
import ExitButton from "../Button/ExitButton";

const Navigation = () => {
  const [signature, setSignature] = useState(false);
  const [frappe, setFrappe] = useState(false);
  const [whiskey, setWhiskey] = useState(false);
  const [espresso, setEspresso] = useState(false);
  const [traditional, setTraditional] = useState(false);
  const [iceDrip, setIceDrip] = useState(false);
  const [iceDripGeisha, setIceDripGeisha] = useState(false);
  const [iceDripAro, setIceDripAro] = useState(false);
  const [iceDripEy, setIceDripEy] = useState(false);
  const [iceDripEthi, setIceDripEthi] = useState(false);
  const [iceDripColom, setIceDripColom] = useState(false);
  const [iceDripSu, setIceDripSu] = useState(false);
  const [handcraft, sethandcraft] = useState(false);
  const [handcraftGeisha, sethandcraftGeisha] = useState(false);
  const [handcraftAro, sethandcraftAro] = useState(false);
  const [handcraftEy, sethandcraftEy] = useState(false);
  const [handcraftEthi, sethandcraftEthi] = useState(false);
  const [handcraftColom, sethandcraftColom] = useState(false);
  const [handcraftSu, sethandcraftSu] = useState(false);

  return (
    <nav className=" fixed z-50 bg-white top-0 left-0 right-0 ">
      <ul className="flex   border-t-2 border-gray">
        <li className="px-7 border-b-2 py-9">
          <Link to="/">
            <img
              src="/SVG_ICON/logoMellowercoffee.svg"
              className="w-[90%] h-full"
              alt="text-logo"
            />
          </Link>
        </li>

        <ElementFather desc="BEVERAGES">
          <Submenu
            beverages={true}
            setSignature={setSignature}
            setFrappe={setFrappe}
            setWhiskey={setWhiskey}
            setEspresso={setEspresso}
            setTraditional={setTraditional}
            sethandcraft={sethandcraft}
            setIceDrip={setIceDrip}
            setIceDripGeisha={setIceDripGeisha}
            setIceDripAro={setIceDripAro}
            setIceDripEy={setIceDripEy}
            setIceDripColom={setIceDripColom}
            setIceDripEthi={setIceDripEthi}
            setIceDripSu={setIceDripSu}
            sethandcraftGeisha={sethandcraftGeisha}
            sethandcraftAro={sethandcraftAro}
            sethandcraftEy={sethandcraftEy}
            sethandcraftColom={sethandcraftColom}
            sethandcraftEthi={sethandcraftEthi}
            sethandcraftSu={sethandcraftSu}
          ></Submenu>
        </ElementFather>

        <ElementFather desc="Beans">
          <Submenu
            setSignature={setSignature}
            setFrappe={setFrappe}
            setWhiskey={setWhiskey}
            setEspresso={setEspresso}
            setTraditional={setTraditional}
            sethandcraft={sethandcraft}
            setIceDrip={setIceDrip}
            setIceDripGeisha={setIceDripGeisha}
            setIceDripAro={setIceDripAro}
            setIceDripEy={setIceDripEy}
            setIceDripColom={setIceDripColom}
            setIceDripEthi={setIceDripEthi}
            setIceDripSu={setIceDripSu}
            sethandcraftGeisha={sethandcraftGeisha}
            sethandcraftAro={sethandcraftAro}
            sethandcraftEy={sethandcraftEy}
            sethandcraftColom={sethandcraftColom}
            sethandcraftEthi={sethandcraftEthi}
            sethandcraftSu={sethandcraftSu}
          ></Submenu>
        </ElementFather>

        <li className="px-5 border-b-2 flex items-center justify-center w-[25.2vw]">
          <img
            src="/SVG_ICON/search.svg"
            alt="search-icon"
            className="w-12 h-12 inline-block fill-gray"
          />
          <input
            type="text"
            name=""
            id=""
            className="border-b-[1px] border-gray inline-block outline-none w-full  selection:bg-nav_focus"
          />
        </li>

        <ElementFather desc="barista"></ElementFather>

        <ElementFather desc="bar"></ElementFather>

        <ElementFather desc="About us"></ElementFather>

        <li className="px-5 border-b-2 leading-3 flex flex-col flex-1 items-end justify-center font-extrabold text-right tracking-widest ml-auto  break-words inline-block">
          <p className="">INTERNATIONAL</p>
          <br />
          <p> SPECIALTY COFFEE</p>
          <br />
          <p>CHAIN</p>
        </li>
      </ul>
      <Signature signature={signature} setSignature={setSignature}></Signature>
      <Frappe frappe={frappe} setFrappe={setFrappe}></Frappe>
      <Whiskey whiskey={whiskey} setWhiskey={setWhiskey}></Whiskey>
      <Espresso espresso={espresso} setEspresso={setEspresso}></Espresso>
      <Traditional
        traditional={traditional}
        setTraditional={setTraditional}
      ></Traditional>
      <Icedrip
        iceDrip={iceDrip}
        setIceDripGeisha={setIceDripGeisha}
        setIceDripAro={setIceDripAro}
        setIceDripEy={setIceDripEy}
        setIceDripColom={setIceDripColom}
        setIceDripEthi={setIceDripEthi}
        setIceDripSu={setIceDripSu}
        setSignature={setSignature}
        setFrappe={setFrappe}
        setWhiskey={setWhiskey}
        setEspresso={setEspresso}
        setTraditional={setTraditional}
        sethandcraft={sethandcraft}
        setIceDrip={setIceDrip}
        sethandcraftGeisha={sethandcraftGeisha}
        sethandcraftAro={sethandcraftAro}
        sethandcraftEy={sethandcraftEy}
        sethandcraftColom={sethandcraftColom}
        sethandcraftEthi={sethandcraftEthi}
        sethandcraftSu={sethandcraftSu}
      ></Icedrip>
      <IcedripGeisha
        iceDripGeisha={iceDripGeisha}
        setIceDripGeisha={setIceDripGeisha}
      ></IcedripGeisha>
      <IcedripAro
        iceDripAro={iceDripAro}
        setIceDripAro={setIceDripAro}
      ></IcedripAro>
      <IcedripEthi
        iceDripEthi={iceDripEthi}
        setIceDripEthi={setIceDripEthi}
      ></IcedripEthi>
      <IcedripSu iceDripSu={iceDripSu} setIceDripSu={setIceDripSu}></IcedripSu>
      <IcedripColom
        iceDripColom={iceDripColom}
        setIceDripColom={setIceDripColom}
      ></IcedripColom>
      <IcedripEy iceDripEy={iceDripEy} setIceDripEy={setIceDripEy}></IcedripEy>
      <Handcraft
        handcraft={handcraft}
        setIceDripGeisha={setIceDripGeisha}
        setIceDripAro={setIceDripAro}
        setIceDripEy={setIceDripEy}
        setIceDripColom={setIceDripColom}
        setIceDripEthi={setIceDripEthi}
        setIceDripSu={setIceDripSu}
        setSignature={setSignature}
        setFrappe={setFrappe}
        setWhiskey={setWhiskey}
        setEspresso={setEspresso}
        setTraditional={setTraditional}
        sethandcraft={sethandcraft}
        setIceDrip={setIceDrip}
        sethandcraftGeisha={sethandcraftGeisha}
        sethandcraftAro={sethandcraftAro}
        sethandcraftEy={sethandcraftEy}
        sethandcraftColom={sethandcraftColom}
        sethandcraftEthi={sethandcraftEthi}
        sethandcraftSu={sethandcraftSu}
      ></Handcraft>
      <HandcraftGeisha
        handcraftGeisha={handcraftGeisha}
        sethandcraftGeisha={sethandcraftGeisha}
      ></HandcraftGeisha>
      <HandcraftAro
        handcraftAro={handcraftAro}
        sethandcraftAro={sethandcraftAro}
      ></HandcraftAro>
      <HandcraftEthi
        handcraftEthi={handcraftEthi}
        sethandcraftEthi={sethandcraftEthi}
      ></HandcraftEthi>
      <HandcraftSu
        handcraftSu={handcraftSu}
        sethandcraftSu={sethandcraftSu}
      ></HandcraftSu>
      <HandcraftColom
        handcraftColom={handcraftColom}
        sethandcraftColom={sethandcraftColom}
      ></HandcraftColom>
      <HandcraftEy
        handcraftEy={handcraftEy}
        sethandcraftEy={sethandcraftEy}
      ></HandcraftEy>
      <OrderButton
        none
        setIceDripGeisha={setIceDripGeisha}
        setIceDripAro={setIceDripAro}
        setIceDripEy={setIceDripEy}
        setIceDripColom={setIceDripColom}
        setIceDripEthi={setIceDripEthi}
        setIceDripSu={setIceDripSu}
        sethandcraftGeisha={sethandcraftGeisha}
        sethandcraftAro={sethandcraftAro}
        sethandcraftEy={sethandcraftEy}
        sethandcraftColom={sethandcraftColom}
        sethandcraftEthi={sethandcraftEthi}
        sethandcraftSu={sethandcraftSu}
      ></OrderButton>
    </nav>
  );
};

export default Navigation;

const ElementFather = ({ desc, children }) => {
  return (
    <li
      className={`relative flex flex-col border-b-2 items-center justify-center  px-4 cursor-pointer group  `}
    >
      <p className="text-sm uppercase tracking-widest ">{desc}</p>
      {/* <img
         src="/SVG_ICON/arrow.svg"
        alt="arrow icon"
        className="mx-auto w-8 h-auto fill-white"
      /> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#958B8B"
        height="48"
        width="48"
        className="mx-auto h-auto group-hover:fill-white"
      >
        <path d="M24 29 13.8 18.8l.8-.8 9.4 9.4 9.4-9.4.8.8Z" />
      </svg> */}
      {children}
    </li>
  );
};

const Signature = ({ signature, setSignature }) => {
  return (
    <div
      className={`w-full   border-gray inset-0  relative h-full max-h-[620px] ${
        signature
          ? "flex translate-x-0 visible !fixed bg-white top-[100px] z-20"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton onClick={() => setSignature(!signature)}></ExitButton>

      <div className=" border-r-2 border-gray  flex items-baseline pt-44 justify-center ">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          BEVERAGES
        </span>
      </div>
      <div className="">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-r-2  border-gray ">
          signature
        </h2>

        <div className="flex h-full items-stretch justify-center max-h-[540px] ">
          <div
            className={`bg-white  flex px-7  flex-col items-center justify-end py-14 border-2 border-l-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/saigon.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide"> SAIGON IMPRESSION</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white  flex px-7 flex-col items-center justify-end py-14 border-2 border-r-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/pandan.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide">ONE KAFFEE</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white px-7 flex flex-col items-center justify-end py-14 border-2  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/icy.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide">ICED CITRUS YIRGACHEFFE</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="uppercase tracking-widest text-center py-6 text-2xl border-t-0   border-gray ">
          seasonal beverages
        </h2>
        <div className="flex  justify-center py-16 items-center max-h-[540px] h-full   relative">
          <div className="absolute z-0 w-full h-full border-t-2 border-b-2 border-gray"></div>
          <div className="z-10 flex flex-col items-center justify-center">
            <div className="w-[calc(100%-80px)]  ">
              <img
                src="/Beverages/mangote 2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide">
                Passion Fruit Jasmine Hibiscus Tea
              </p>
              <span className="italic tracking-wide">99.000 VND</span>
            </div>
            <OrderButton></OrderButton>
            <img
              src="/SVG_ICON/arrow.svg"
              alt=""
              className="absolute left-0 rotate-90"
            />
            <img
              src="/SVG_ICON/arrow.svg"
              alt=""
              className="absolute right-0 -rotate-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Frappe = ({ frappe, setFrappe }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full max-h-[620px]  ${
        frappe
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton onClick={() => setFrappe(!frappe)}></ExitButton>

      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-t-0  border-l-0">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest border-t-0  max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl  border-gray ">
          frappe Coffee
        </h2>
        <div className="flex justify-center max-h-[540px] ">
          <div
            className={`bg-white grow  flex px-7  flex-col items-center justify-end py-14 border-2 border-l-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/espresso.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">espresso</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex px-7 flex-col items-center justify-end py-14 border-2 border-r-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/caramel.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">caramel</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white border-r-0 grow px-7 flex flex-col items-center justify-end py-14 border-2  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/mocha.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">mocha</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Whiskey = ({ whiskey, setWhiskey }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full max-h-[620px] ${
        whiskey
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton onClick={() => setWhiskey(!whiskey)}></ExitButton>

      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-t-0  border-l-0 border-r-2">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl  ">
          whiskey coffee
        </h2>
        <div className="grid grid-cols-2 max-h-[540px] ">
          <div
            className={`bg-white grow  flex py-[50px] flex-col items-center justify-end py-14 border-2 border-l-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/not_a_whisky.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">Not a whiskey sour</p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end border-2 border-r-0  border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/wild_berry.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">
                wildberry espresso whiskey soda
              </p>
              <span className="italic tracking-wide">118.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Espresso = ({ espresso, setEspresso }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        espresso
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton onClick={() => setEspresso(!espresso)}></ExitButton>

      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center  border-t-0 border-r-2 border-l-0">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full ">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl  ">
          espresso based coffee
        </h2>
        <div className="grid grid-cols-3 overflow-y-scroll max-h-[80vh] ">
          <div
            className={`bg-white grow  flex py-[50px] flex-col items-center justify-end py-14 border-2 border-l-0 border-b-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/solo_espresso.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">SOLO espresso</p>
              <span className="italic tracking-wide">58.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2  border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/solo_espresso.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">doppio espresso</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-r-0 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/americano.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">americano</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/machiatto.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">espresso macchiatto</p>
              <span className="italic tracking-wide">68.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/piccolo.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">piccolo latte</p>
              <span className="italic tracking-wide">68.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/flatWhite.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">flat white</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/cappuccino.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">cappuccino</p>
              <span className="italic tracking-wide">88.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/latte.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">caffè latte</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/cafe_mocha.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">caffè mocha </p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/whiteChoco.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">whitle choco Latte</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/whiteChoco.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">white choco mint latte</p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/babycino.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">babyccino</p>
              <span className="italic tracking-wide">78.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const Traditional = ({ traditional, setTraditional }) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        traditional
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton onClick={() => setTraditional(!traditional)}></ExitButton>

      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-t-0  border-l-0 ">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full ">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl border-2 border-b-0 border-t-0  border-l-0 border-gray ">
          traditional vietnamese coffee
        </h2>
        <div className="grid grid-cols-3 overflow-y-scroll max-h-[80vh] ">
          <div
            className={`bg-white grow  flex py-[50px] flex-col items-center justify-end py-14 border-2 border-l-0 border-b-0  border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/cftrung.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">hanoi egg coffee</p>
              <span className="italic tracking-wide">88.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2  border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/cfphinden.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">black phin coffee</p>
              <span className="italic tracking-wide">69.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-r-0 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/cfphin.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">white phin coffee</p>
              <span className="italic tracking-wide">75.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/cfd.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">black coffee</p>
              <span className="italic tracking-wide">69.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/cfsd.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">White coffee</p>
              <span className="italic tracking-wide">75.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
          <div
            className={`bg-white grow py-[50px] flex flex-col items-center justify-end py-14 border-2 border-b-0 border-l-0 border-gray `}
          >
            <div className="w-52 ">
              <img
                src="/Beverages/bacxiu.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5 text-center ">
              <p className="uppercase tracking-wide ">
                vietnamese style latte{" "}
              </p>
              <span className="italic tracking-wide">98.000 VND</span>
            </div>
            <OrderButton></OrderButton>
          </div>
        </div>
      </div>
    </div>
  );
};
