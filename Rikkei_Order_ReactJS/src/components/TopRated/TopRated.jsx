import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "./TopRated.css";
import TopRated1 from "../CardTopRated/TopRated1/TopRated1";

function TopRated() {
  const [dataTopRated, setDataTopRated] = useState([]);
  useEffect(() => {
    const fetchDataTopRated = async () => {
      const res = await fetch("http://localhost:3000/cart/top");
      const data = await res.json();
      setDataTopRated(data.data);
      // console.log(data.data);
    };
    fetchDataTopRated().catch(console.error);
  }, []);

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
      <div className='sale-off-items'>
        <div className='wrapper-sale-off'>
          <h2> Sản phẩm bán chạy </h2>
          <button className='btn'>Xem thêm</button>
        </div>
        <Slider {...settings}>
          {dataTopRated.map((e, i) => (
            <div key={i}>
              <TopRated1 key={i} TopRatedData={e} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default TopRated;
