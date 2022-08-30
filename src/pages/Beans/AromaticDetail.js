import React, { useEffect } from "react";
import DetailPageProduct from "../../components/DetailPageProduct/DetailPageProduct";

const AromaticDetail = () => {
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
        <h1 className="text-7xl font-bold text-white ">AROMATIC SHADOW</h1>
        <p className="text-3xl font-medium mt-2 text-white">FINDER SERIES</p>
      </div>
      {/* <div className="w-full h-full">
        <img
          src="/bean/aroDetailBg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className="p-24 pb-0">
        <div className=" flex justify-between ">
          <span className="capitalize  text-3xl">Origin</span>
          <span className="uppercase">ETHIOPIA</span>
        </div>
        <div className=" flex justify-between  mt-6 pb-14 border-b-2 border-gray">
          <span className="capitalize  text-3xl">Roast Level</span>
          <ul className="detail-roast-level  border-collapse flex items-center">
            <li>LIGHT</li>
            <li>LIGHT-MEDIUM</li>
            <li className="active">MEDIUM</li>
            <li>MEDIUM-DARK</li>
            <li>DARK</li>
          </ul>
        </div>
        <div className=" mt-14">
          <span className="capitalize  text-3xl">Cupping Notes</span>
          <div className="grid grid-cols-5  text-center detail-cupping-notes mt-14">
            <div className="bg-white ">
              <span>Mollasses</span>
            </div>
            <div className="bg-white">
              <span>Citrus</span>
            </div>
            <div className="bg-white">
              <span>White</span>
              <br />
              <span>Flower</span>
            </div>
            <div className="bg-white">
              <span>Medium</span>
              <br />
              <span>Body</span>
            </div>
            <div className="bg-white">
              <span>Round</span>
              <br />
              <span>Mouthfeel</span>
            </div>
          </div>
        </div>
        <div className="mt-14 font-medium text-xl leading-9 text-justify">
          Coffee originating from Ethiopia is known for its floral notes and
          fruity acidity. It took us eight months to find the beans, from
          visiting the forest to the countryside and to the farm, just for a cup
          of coffee that well represents the features of Ethiopia. By carefully
          blending and roasting these five types of selected beans, we created
          our beloved ' Aromatic Shadow ' with notes of flowers and fruits. The
          bright and pleasant acid, combined with the refreshing sweetness of
          jasmine and the flavors of citrus, the aroma is revealed like a shadow
          lingering in your mouth.
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
                imgSrc="/bean/aro_can.png"
                name="AROMATIC SHADOW"
                weight="150g"
                kind="can"
                price="599.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/coffee_bag.png"
                name="AROMATIC SHADOW"
                weight="200g"
                kind="bag"
                price="589.000"
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
                name="AROMATIC SHADOW"
                weight="Chemex/ V60/ FrenchPress"
                kind="Handrafted Coffee"
                price="138.000"
              ></DetailPageProduct>
            </div>
            <div className="col-span-2">
              <DetailPageProduct
                imgSrc="/bean/coffee_icedrip.png"
                name="AROMATIC SHADOW"
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
                src="/bean/ethi_can.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg tracking-widest uppercase">
              ETHIOPIA YIRGACHEFFE
            </p>
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

export default AromaticDetail;
