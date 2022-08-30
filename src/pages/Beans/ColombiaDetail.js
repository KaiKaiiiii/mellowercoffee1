import React, { useEffect } from "react";
import DetailPageProduct from "../../components/DetailPageProduct/DetailPageProduct";

const ColombiaDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-white w-full mt-100">
      <div className="mx-auto  w-full text-center py-16 uppercase bg-detail">
        <h1 className="text-7xl font-bold text-white ">COLOMBIA</h1>
        <p className="text-3xl font-medium mt-2 text-white">SINGLE ORIGIN</p>
      </div>
      {/* <div className="w-full h-full">
        <img
          src="/bean/colomDetailBg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="p-24 pb-0">
        <div className=" flex justify-between ">
          <span className="capitalize  text-3xl">Origin</span>
          <span className="uppercase">COLOMBIA</span>
        </div>
        <div className=" flex justify-between  mt-6 pb-14 border-b-2 border-gray">
          <span className="capitalize  text-3xl">Roast Level</span>
          <ul className="detail-roast-level  border-collapse flex items-center">
            <li>LIGHT</li>
            <li className="active">LIGHT-MEDIUM</li>
            <li>MEDIUM</li>
            <li>MEDIUM-DARK</li>
            <li>DARK</li>
          </ul>
        </div>
        <div className=" mt-14">
          <span className="capitalize  text-3xl">Cupping Notes</span>
          <div className="grid grid-cols-5  text-center detail-cupping-notes mt-14">
            <div className="bg-white ">
              <span>Berry</span>
            </div>
            <div className="bg-white">
              <span>Caramel</span>
            </div>
            <div className="bg-white">
              <span>Nut</span>
            </div>
            <div className="bg-white">
              <span>Herb</span>
            </div>
            <div className="bg-white">
              <span>Long sweet</span>
              <br />
              <span>aftertaste</span>
            </div>
          </div>
        </div>
        <div className="mt-14 font-medium text-xl leading-9 text-justify">
          Coffee has always been the pride of Colombian baristas, therefore they
          pay much attention to the DetailPageProduct image. Ever since 1958,
          JUAN VALDEZ AND HIS MULE ' has become the image of Colombi an coffee,
          appearing on coffee packaging, familiar to coffee lovers worldwide.
          Medium roasted to bring out balanced flavors, it has a rich nutty
          fragrance and a smooth, lasting aftertaste.
        </div>
      </div>
      <div className="flex flex-col py-24">
        <div className="flex border-2 border-x-0  border-gray w-full items-center gap-24">
          <span className=" -rotate-180 py-28 px-8  uppercase text-transfrom text-2xl tracking-widest border-l-2 border-gray">
            BEANS
          </span>
          <div className="grow grid grid-cols-5">
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/colom_can.png"
                name="COLOMBIA"
                weight="200g"
                kind="can"
                price="469.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/coffee_bag.png"
                name="COLOMBIA"
                weight="200g"
                kind="bag"
                price="429.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-1 flex">
              <img
                src="/SVG_ICON/arrowontop.svg"
                alt=""
                className="w-24 rotate-90 text-transfrom my-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex border-b-2  border-gray w-full items-center gap-24">
          <span className=" -rotate-180 py-28 px-8  uppercase text-transfrom text-2xl tracking-widest border-l-2 border-gray">
            BEVERAGES
          </span>
          <div className="grow grid grid-cols-5">
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/coffee_handcraft.png"
                name="COLOMBIA"
                weight="Chemex/ V60/ FrenchPress"
                kind="Handrafted Coffee"
                price="118.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/coffee_icedrip.png"
                name="COLOMBIA"
                weight="Black"
                kind="Ice Drip Coffee"
                price="98.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-1 flex">
              <img
                src="/SVG_ICON/arrowontop.svg"
                alt=""
                className="w-24 rotate-90 text-transfrom my-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-5xl tracking-widest  text-center  pb-9">
          OTHER BEANS
        </h2>
        <div className="flex items-center justify-evenly pb-36">
          <div className="flex flex-col items-center">
            <div className="h-64">
              <img
                src="/bean/geisha_box.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">FLAME OF GEISHA</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-64">
              <img
                src="/bean/aro_can.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">Aromatic Shadow</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-64">
              <img
                src="/bean/ey_can.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">
              ENCHANTING YUNNAN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColombiaDetail;
