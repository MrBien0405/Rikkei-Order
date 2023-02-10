import "./Advertising.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image from "../../assets/all-product.jpg";

function Advertising() {
  return (
    <>
      <Carousel className='advertising'>
        <Carousel.Item interval={1000}>
          <img className='d-block w-100' src={image} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className='d-block w-100' src="https://cf.shopee.vn/file/86b227e37b130c6af19a31e79dfde8e7_xxhdpi" alt='Second slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src="https://cf.shopee.vn/file/b265869d3bf2ba5de3b6d8955a5dfe20_xhdpi" alt='Third slide' />
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src="https://cf.shopee.vn/file/b265869d3bf2ba5de3b6d8955a5dfe20_xhdpi" alt='Third slide' />
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src="https://cf.shopee.vn/file/f77aa0bac041cdbaf62527b65d2aaf46_xxhdpi" alt='Third slide' />
        </Carousel.Item>

        <Carousel.Item>
          <img className='d-block w-100' src="https://cf.shopee.vn/file/9ab99a603b7eb076afcb735e0b297124_xxhdpi" alt='Third slide' />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Advertising;
