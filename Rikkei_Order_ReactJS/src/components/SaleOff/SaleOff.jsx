import React from "react";
import Slider from "react-slick";
import "./SaleOff.css";
import SaleOff0 from "../CardSaleOff/SaleOff0/SaleOff0";

import { useState, useEffect } from "react";

function SaleOff() {
  const [dataSaleOff, setDataSaleOff] = useState([]);
  useEffect(() => {
    const fetchDataSaleOff = async () => {
      const res = await fetch("http://localhost:3000/cart/sale");
      const data = await res.json();
      setDataSaleOff(data.data);
      // console.log(data.data);
    };
    fetchDataSaleOff().catch(console.error);
  }, []);
  // console.log(dataSaleOff[0].id);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
  };
  return (
    <>
      <div className='top-rated-items'>
        <div className='wrapper-top-rated'>
          <h2> Sản phẩm giảm giá </h2>
          <button className='btn'>Xem thêm</button>
        </div>
        <Slider {...settings}>
          {dataSaleOff.map((e, i) => (
            <div key={i}>
              <SaleOff0 key={i} SaleOffData={e} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SaleOff;
