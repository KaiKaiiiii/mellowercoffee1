import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 border-t-2 border-gray h-[200px]">
      <ul className="flex h-full ">
        <li className="px-7 flex flex-col justify-center   ">
          <Link to="/">
            <img
              src="/SVG_ICON/logoM.svg"
              alt=""
              className="w-[117px] mb-4 h-auto cursor-pointer"
            />
          </Link>
          <p>©2022 MELLOWER COFFEE HCM CO., LTD. </p>
          <p>All rights reserved</p>
        </li>
        <li className="flex flex-col  items-center justify-center">
          <a
            href="https://www.facebook.com/MellowerCoffeeHCM/"
            className="flex items-center justify-center  w-full h-full px-7 "
          >
            <img src="/SVG_ICON/fb.png" alt="" className="w-[34px] h-auto" />
          </a>
          <a
            href="https://www.instagram.com/mellowercoffee_vn/"
            className="flex items-center justify-center  w-full h-full border-t-2 border-gray px-7 "
          >
            <img src="/SVG_ICON/ins.png" alt="" className="w-[34px] h-auto" />
          </a>
        </li>
        <li className=" flex items-center justify-center px-7">
          <div className="flex gap-4 max-w-sm text-sm">
            <p className="tracking-widest font-extrabold ">OFFICE</p>
            <div className="">
              <p>
                No.18, D1 Street, Saigon Pearl Villas, 90-92 Nguyen Huu Canh,
                Ward 22, Binh Thanh District, HCMC.
              </p>

              <p className="mt-5">(028) 3822 5806</p>
              <p>info@mellowerhcm.com</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col  items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center h-full px-7 uppercase tracking-widest hover"
          >
            En
          </button>
          <button
            type="button"
            className="flex items-center justify-center h-full px-7 uppercase tracking-widest hover border-t-2 border-gray "
          >
            vn
          </button>
        </li>
        <li className="grid grid-rows-2 grow">
          <div className=" flex items-end pb-4 text-right ml-auto">
            <div className="flex items-center">
              <a href="" className="tracking-wider ">
                VISIT OUR STORE
              </a>
              <img
                src="/SVG_ICON/arrow.svg"
                alt=""
                className="w-auto h-[30px] -rotate-90"
              />
            </div>
          </div>
          <div className="bg-black text-white px-4 py-2 tracking-widest text-2xl flex items-center justify-center">
            JUST FOR A CUP OF GOOD COFFEE
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
