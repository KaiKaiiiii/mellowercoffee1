import React from "react";
import { Link } from "react-router-dom";

const OrderButton = ({
  btnColor,
  content,
  none,
  setIceDripGeisha,
  iceDripGeisha,
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
  if (!btnColor && !none) {
    return (
      <button
        type="button"
        className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase "
      >
        {content ? content : "Order"}
      </button>
    );
  }
  if (btnColor === "geisha") {
    return (
      <Link
        to="/beans/geisha"
        onClick={() => {
          setIceDripGeisha(false);
          sethandcraftGeisha(false);
        }}
      >
        <button
          type="button"
          className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase w-full"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "aro") {
    return (
      <Link
        to="/beans/aromatic"
        onClick={() => {
          setIceDripAro(false);
          sethandcraftAro(false);
        }}
      >
        <button
          type="button"
          className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase w-full"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "colom") {
    return (
      <Link
        to="/beans/colombia"
        onClick={() => {
          setIceDripColom(false);
          sethandcraftColom(false);
        }}
      >
        <button
          type="button"
          className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase w-full"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "ethi") {
    return (
      <Link
        to="/beans/ethiopia"
        onClick={() => {
          setIceDripEthi(false);
          sethandcraftEthi(false);
        }}
      >
        <button
          type="button"
          className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase w-full"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "su") {
    return (
      <Link
        to="/beans/sumatra"
        onClick={() => {
          setIceDripSu(false);
          sethandcraftSu(false);
        }}
      >
        <button
          type="button"
          className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase w-full"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (btnColor === "ey") {
    return (
      <Link
        to="/beans/eyunnan"
        onClick={() => {
          setIceDripEy(false);
          sethandcraftEy(false);
        }}
      >
        <button
          type="button"
          className="bg-hover btn-shadow px-8 mt-4 py-3 text-white uppercase w-full"
        >
          {content ? content : "Order"}
        </button>
      </Link>
    );
  }
  if (none) {
    return <></>;
  }
};

export default OrderButton;
