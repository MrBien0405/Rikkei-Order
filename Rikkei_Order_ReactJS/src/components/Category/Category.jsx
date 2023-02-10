import React from "react";
import { Link } from "react-router-dom";

import "./Category.css";
function Category(props) {
  let { handleChooseCatagory } = props;
  return (
    <>
      <div className='categories'>
        <div className='cate-title1'>
          <Link id='all' to='#' onClick={handleChooseCatagory}>
            Tất cả sản phẩm
          </Link>
        </div>
        <div className='item-category'>
          <div
            id='bimbim'
            className='category category1'
            onClick={handleChooseCatagory}
          >
            <img
              id='bimbim'
              src='https://firebasestorage.googleapis.com/v0/b/ra-order.appspot.com/o/images%2Flays.png?alt=media&token=6b5a6fa1-d5ef-4081-a0af-6a31a1faf9f7'
              alt='ha'
            />
            <p id='bimbim'>Bim Bim</p>
          </div>
          <div
            id='drink'
            className='category category2'
            onClick={handleChooseCatagory}
          >
            <img
              id='drink'
              src='https://firebasestorage.googleapis.com/v0/b/ra-order.appspot.com/o/images%2Fbo%20huc.png?alt=media&token=aaa910e5-f9e9-4b26-865d-5ab3268c3417'
              alt='ha'
            />
            <p id='drink'>Nước uống</p>
          </div>
          <div
            id='snack'
            className='category category3'
            onClick={handleChooseCatagory}
          >
            <img
              id='snack'
              src='https://firebasestorage.googleapis.com/v0/b/ra-order.appspot.com/o/images%2Fbanh-trang.png?alt=media&token=ef8471b9-d220-440b-b925-c0de18ba1620'
              alt='ha'
            />
            <p id='snack'>Đồ Ăn Nhẹ</p>
          </div>
          <div
            id='other'
            className='category category4'
            onClick={handleChooseCatagory}
          >
            <img
              id='other'
              src='https://firebasestorage.googleapis.com/v0/b/ra-order.appspot.com/o/images%2Fmi-hao-hao.png?alt=media&token=cc16c7d3-9aa8-4386-bdb6-e0040b4e5be1'
              alt='ha'
            />
            <p>Khác</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
