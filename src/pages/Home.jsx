import React from "react";
import { Chat, SideBar } from "../components";

function Home() {
  return (
    <div className="h-screen flex">
      <SideBar className="w-3/12" />

      <Chat className="w-9/12 h-screen" />
    </div>
  );
}

export default Home;
