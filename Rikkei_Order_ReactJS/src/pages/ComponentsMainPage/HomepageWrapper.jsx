import React, { useState, useEffect } from "react";
import Advertising from "../../components/Advertising/Advertising";
import { Routes, Route } from "react-router-dom";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
import SaleOff from "../../components/SaleOff/SaleOff"
import TopRated from "../../components/TopRated/TopRated"
function HomepageWrapper() {
  return (
    <>
      <Advertising />
      <FeaturedItems />
      <TopRated />
      <SaleOff />
    </>
  );
}

export default HomepageWrapper;
