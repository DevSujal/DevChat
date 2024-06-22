import React from "react";
import cam from "../assets/cam.png";
import img from "../assets/img.png";
import more from "../assets/more.png";
import Messages from "./Messages";
import SentBtn from "./SentBtn";
function Chat({ className }) {
  return (
    <div className={`bg-indigo-200 ${className}`}>
      <div className="flex justify-between items-center cursor-pointer bg-indigo-900 w-full px-3 py-2">
        <span className="text-xl font-bold text-white">Sujal</span>
        <div className="flex justify-center items-center gap-5">
          <img src={cam} alt="camera img" className=" cursor-pointer" />
          <img src={img} alt="image img" className=" cursor-pointer" />
          <img src={more} alt="more img" className=" cursor-pointer" />
        </div>
      </div>
      <Messages />
      <SentBtn />
    </div>
  );
}

export default Chat;
