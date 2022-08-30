import React, { useEffect } from "react";
import DetailPageProduct from "../../components/DetailPageProduct/DetailPageProduct";

const GeishaDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-white w-full mt-100">
      <div className="mx-auto relative  w-full text-center py-16 uppercase bg-detail">
        <h1 className="text-7xl font-bold   text-white">FLAME OF GEISHA</h1>
        <p className="text-3xl font-medium mt-2  text-white">FINDER SERIES</p>
        {/* <div className="absolute w-full h-full z-0">
          <img
            src="/bean/detail.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
      </div>
      <div className="p-24 pb-0">
        <div className=" flex justify-between ">
          <span className="capitalize  text-3xl">Origin</span>
          <span className="uppercase">panama</span>
        </div>
        <div className=" flex justify-between  mt-6 pb-14 border-b-2 border-gray">
          <span className="capitalize  text-3xl">Roast Level</span>
          <ul className="detail-roast-level  border-collapse flex items-center">
            <li className="active">LIGHT</li>
            <li>LIGHT-MEDIUM</li>
            <li>MEDIUM</li>
            <li>MEDIUM-DARK</li>
            <li>DARK</li>
          </ul>
        </div>
        <div className=" mt-14">
          <span className="capitalize  text-3xl">Cupping Notes</span>
          <div className="grid grid-cols-5  text-center detail-cupping-notes mt-14">
            <div className="bg-white ">
              <span>Chocolate</span>
              <br />
              <span>Liqueur</span>
            </div>
            <div className="bg-white">
              <span>Red</span>
              <br />
              <span>Plum</span>
            </div>
            <div className="bg-white">
              <span>Preserved</span>
              <br />
              <span>Fruit</span>
            </div>
            <div className="bg-white">
              <span>Sweet</span>
              <br />
              <span>Orange</span>
            </div>
            <div className="bg-white">
              <span>Jasmine</span>
              <br />
              <span>Flower</span>
            </div>
          </div>
        </div>
        <div className="mt-14 font-medium text-xl leading-9 text-justify">
          Geisha is like a treasure touched by the creator, with a fascinating
          sweetness of honey and orange and a floral aroma. Ever since it won
          the first prize in 2004 BEST OF PANAMA CUPPING COMPETITION it has
          consecutively broken the record of annual auction prices and has a
          remarkable value in the specialty coffee world. This bean originates
          from Ninety Plus Manor in Silla Del Volcan of Panama. The rich
          volcanic soil enables Geisha to grow with strong vitality just like
          fire. We blend 4 types of Ninety Plus Geisha beans to bring you a
          flavor experience that is full-bodied and addictive.
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
                imgSrc="/bean/geisha_box.png"
                name="FLAME OF GEISHA"
                weight="100g"
                kind="box"
                price="1.260.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/coffee_bag.png"
                name="FLAME OF GEISHA"
                weight="200g"
                kind="bag"
                price="1.890.000"
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
                name="FLAME OF GEISHA"
                weight="Chemex/ V60/ FrenchPress"
                kind="Handrafted Coffee"
                price="238.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/coffee_icedrip.png"
                name="FLAME OF GEISHA"
                weight="Black"
                kind="Ice Drip Coffee"
                price="138.000"
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
                src="/bean/colom_can.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">Colombia</p>
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

export default GeishaDetail;
