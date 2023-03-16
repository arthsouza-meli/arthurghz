import React from "react";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "../Context/ContextProvider";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import ThankYouPage from "../views/Thank-you";

const AllRoutes = () => {
  return (
    <>
      <ContextProvider>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<HomeDark />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/obrigado" element={<ThankYouPage />} />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default AllRoutes;
