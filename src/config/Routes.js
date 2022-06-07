import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route
        path="/:category/search/:keyword"
        element={
          <>
            <Header />
            <Catalog />
            <Footer />
          </>
        }
      />
      <Route
        path="/:category/:id"
        element={
          <>
            <Header />
            <Detail />
            <Footer />
          </>
        }
      />
      <Route
        path="/:category"
        element={
          <>
            <Header />
            <Catalog />
            <Footer />
          </>
        }
      />
      <Route
        path="/"
        element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default ConfigRoutes;
