import React from "react";
import Rightside from "./Rightside";
import Leftside from "./Leftside";

const MainPage = () => {
  return (
    <div className="flex w-screen h-[100dvh] overflow-hidden">
      <div className="w-full md:w-[400px] h-full overflow-y-auto">
        <Leftside />
      </div>

      <div className="hidden md:flex flex-1 h-full w-full">
        <Rightside />
      </div>
</div>

  );
};

export default MainPage;
