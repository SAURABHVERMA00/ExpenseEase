import React from "react";

import ContentPage from "../Pages/ContentPage";
const MainPage = () => {
  return (
    <div className="conatiner flex">
      <main className="bg-blue-400 w-1/2 h-[100vh] ">
        <ContentPage />
      </main>
      <div className="w-0 " style={{borderRight:"12vw solid transparent" , borderTop:"100vh solid #60a5fa" }}></div>
      <main className="bg-white w-1/2"></main>
    </div>
  );
};

export default MainPage;
