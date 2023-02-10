import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import "./FavoriteProduct.css";
function FavoriteProduct(props) {
  const { dataFavorite, handleClickDeleteHeart } = props;

  return (
    <>
      <div className='favorite-col'>
        <div className='favorite-product-card card'>
          <ToastContainer autoClose={1000} />
          <div className='favorite-favourite'>
            <p className='favorite-quantity'>
              Stock: 12
              <span className='favorite-status-on'></span>
            </p>
            <button
              id={dataFavorite.productID3}
              onClick={handleClickDeleteHeart}
              className='favorite-card-btn-like'
            >
              <ion-icon
                className='icon-delete'
                id={dataFavorite.productID3}
                name='close-circle-outline'
              ></ion-icon>
            </button>
          </div>
          <div className='favorite-item-info'>
            {/* <div className='favorite-sold-out'>HẾT HÀNG</div> */}
            <img
              src={dataFavorite.image}
              className='favorite-card-img-top'
              alt='...'
            />
            <div className='favorite-card-body'>
              <h5 className='favorite-card-title'>{dataFavorite.name}</h5>
              <div className='favorite-price-and-buy'>
                <div>
                  <p className='favorite-product-name'>
                    đ{dataFavorite.sellPrice}
                  </p>
                  <div className='favorite-rating'>
                    <span className='fa fa-star favorite-checked'></span>
                    <span className='fa fa-star favorite-checked'></span>
                    <span className='fa fa-star favorite-checked'></span>
                    <span className='fa fa-star'></span>
                    <span className='fa fa-star'></span>
                    <span className='favorite-reviewNumber'>(2)</span>
                  </div>
                </div>
                <button id='' className='favorite-buy-item'>
                  <ion-icon id='' name='favorite-bag-add-outline'></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FavoriteProduct;
