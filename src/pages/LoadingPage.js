import React from "react";

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-[99] flex-col flex items-center justify-center">
      <div className="relative mb-10">
        <div className="w-52">
          <img
            src="/SVG_ICON/Chemex_LoadingPage/chemex_loading.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-6 absolute left-1/2 -translate-x-1/2 top-1/2 ">
          <img
            src="/SVG_ICON/Chemex_LoadingPage/chemex_loading-bell.png"
            alt=""
            className="animate-spin origin-top"
          />
        </div>
      </div>
      <h2 className="text-xl font-bold">LOADING... </h2>
    </div>
  );
};

export default LoadingPage;
