import React from "react";
import "./PurchasedItem.css";
function PurchaseHistory(props) {
  let { historyData } = props;
  return (
    <>
      <div className='purchased-item-wrapper'>
        <div className='purchased-item-top purchased-item'>
          <div className='purchased-date'>
            <span>{historyData.date}</span> <span>{historyData.time}</span>
          </div>
          <div className='purchased-status'>Hoàn thành</div>
        </div>
        <div className='purchased-item-center purchased-item'>
          <div className='purchased-item-center-image'>
            <img src={historyData.image} alt='' />
          </div>
          <div className='purchased-item-center-name'>{historyData.name}</div>
          <div className='purchased-item-center-detail'>
            <div>x{historyData.buy_quantity}</div>
            <div>
              đ{Intl.NumberFormat("de-DE").format(historyData.sell_price)}
            </div>
            <div>
              Thành tiền :
              {Intl.NumberFormat("de-DE").format(
                Number(historyData.buy_quantity) *
                  Number(historyData.sell_price)
              )}
            </div>
          </div>
        </div>
        <div className='purchased-item-bottom purchased-item'>
          <button>Đánh Giá</button>
        </div>
      </div>
    </>
  );
}

export default PurchaseHistory;
