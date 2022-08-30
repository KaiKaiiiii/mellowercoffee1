import React from "react";

const ExitButton = ({ onClick, detail }) => {
  if (!detail) {
    return (
      <button
        type="button"
        className="z-50"
        onClick={() => {
          onClick();
        }}
      >
        <img
          src="/SVG_ICON/exit.png"
          alt=""
          className="absolute top-6 right-5 w-9 cursor-pointer"
        />
      </button>
    );
  }
  return (
    <button
      type="button"
      className="z-50"
      onClick={() => {
        onClick();
      }}
    >
      <img
        src="/SVG_ICON/exit.png"
        alt=""
        className="absolute top-6 right-96 w-9 cursor-pointer"
      />
    </button>
  );
};

export default ExitButton;
