import "./SaleOff0.css";
import { Link } from "react-router-dom";

function Item(props) {
  let SaleOffData = props.SaleOffData;
  return (
    <>
      <div className='sale-col'>
        <div className='sale-food-card'>
          <div className='sale-favourite'>
            <div className='sale-quantity'>
              <div className='sale-ribbon'>
                <div className='sale-wrap'>
                  <span className='sale-ribbon6'>
                    <span className='text-sale'>Giảm</span>{" "}
                    <span className='text-sale-number'>
                      {SaleOffData.percentReduction}%
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='sale-item-info'>
            <div className='sale-box-img'>
              <img
                src={SaleOffData.image}
                className='sale-card-img'
                alt='...'
              />
            </div>
            <div className='sale-card-body'>
              <h5 className='sale-card-title'>{SaleOffData.name}</h5>
              <div className='sale-price-and-buy'>
                <div>
                  <p className='sale-card-text-sale'>
                    đ{SaleOffData.priceSale}
                  </p>
                  <p className='sale-card-text'>đ{SaleOffData.priceInitial}</p>
                  <div className='sale-rating'>
                    <span className='fa fa-star sale-checked'></span>
                    <span className='fa fa-star sale-checked'></span>
                    <span className='fa fa-star sale-checked'></span>
                    <span className='fa fa-star'></span>
                    <span className='fa fa-star'></span>
                    <span className='sale-reviewNumber'>(2)</span>
                  </div>
                </div>

                <button className='sale-btn'>
                  <Link className='sale-top-link' to='/all_item'>
                    Mua Ngay
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
