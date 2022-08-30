import React from "react";

const DetailPageProduct = ({ imgSrc, name, weight, kind, price }) => {
  return (
    <div className="flex items-center gap-10">
      <img src={imgSrc} alt="" className="w-28 object-cover" />
      <div className="flex flex-col items-start product-detail">
        <span className="uppercase">{name}</span>
        <span>{weight}</span>
        <span className="capitalize">{kind}</span>
        <span className="italic">{price} VND</span>
        <button
          type="button"
          className="py-2 px-5 bg-hover text-white uppercase font-bold mt-5 text-base"
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export default DetailPageProduct;
