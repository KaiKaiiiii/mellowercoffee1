import React from "react";
import ExitButton from "../Button/ExitButton";

const Handcraft = ({
  handcraft,
  setIceDripGeisha,
  setIceDripAro,
  setIceDripEy,
  setIceDripColom,
  setIceDripEthi,
  setIceDripSu,
  setSignature,
  setFrappe,
  setWhiskey,
  setEspresso,
  setTraditional,
  setIceDrip,
  sethandcraft,
  sethandcraftGeisha,
  sethandcraftAro,
  sethandcraftEy,
  sethandcraftColom,
  sethandcraftEthi,
  sethandcraftSu,
}) => {
  return (
    <div
      className={`w-full  border-gray inset-0 relative h-full  ${
        handcraft
          ? "flex translate-x-0 visible"
          : "translate-x-full hidden invisible"
      }  duration-200 ease-linear `}
    >
      <ExitButton onClick={() => sethandcraft(!handcraft)}></ExitButton>

      <div className=" border-2 border-gray  flex items-baseline pt-44 justify-center border-l-0 border-t-0 border-r-2">
        <span className=" -rotate-90 uppercase  text-3xl tracking-widest max-w-[150px]  ">
          CAFFEINE
        </span>
      </div>
      <div className="w-full ">
        <h2 className="uppercase tracking-widest pl-12 py-6 text-2xl  ">
          handcrafted coffee
        </h2>
        <div className="grid grid-cols-3  ">
          <div
            className={`text-black   cursor-pointer duration-100 ease-linear hover:text-hover bg-opacity-70 py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(true);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
          >
            <p className="tracking-widest text-2xl uppercase ">
              Flame of geisha
            </p>
          </div>
          <div
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(true);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
            className={`text-black   cursor-pointer duration-100 ease-linear hover:text-hover  py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase ">
              Aromatic Shadow
            </p>
          </div>
          <div
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(true);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
            className={`text-black   cursor-pointer duration-100 ease-linear hover:text-hover border-r-0 py-32 grow  flex  items-center pl-10 border-2 border-l-0 border-b-0  border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase ">
              enchanting Yunnan
            </p>
          </div>
          <div
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(true);
              sethandcraftEthi(false);
              sethandcraftSu(false);
            }}
            className={`text-black   cursor-pointer duration-100 ease-linear hover:text-hover  py-32 grow  flex  items-center pl-10 border-2 border-l-0   border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase ">Colombia</p>
          </div>
          <div
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(true);
              sethandcraftSu(false);
            }}
            className={`text-black   cursor-pointer duration-100 ease-linear hover:text-hover  py-32 grow  flex  items-center pl-10 border-2 border-l-0   border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase ">
              Ethiopia Yirgacheffe
            </p>
          </div>
          <div
            onClick={() => {
              setIceDripGeisha(false);
              setIceDripAro(false);
              setIceDripEy(false);
              setIceDripColom(false);
              setIceDripEthi(false);
              setIceDripSu(false);
              setSignature(false);
              setFrappe(false);
              setWhiskey(false);
              setEspresso(false);
              setTraditional(false);
              setIceDrip(false);
              sethandcraft(false);
              sethandcraftGeisha(false);
              sethandcraftAro(false);
              sethandcraftEy(false);
              sethandcraftColom(false);
              sethandcraftEthi(false);
              sethandcraftSu(true);
            }}
            className={`text-black   cursor-pointer duration-100 ease-linear hover:text-hover border-r-0 py-32 grow  flex  items-center pl-10 border-2 border-l-0   border-gray `}
          >
            <p className="tracking-widest text-2xl uppercase ">
              Sumatra Mandheling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handcraft;
