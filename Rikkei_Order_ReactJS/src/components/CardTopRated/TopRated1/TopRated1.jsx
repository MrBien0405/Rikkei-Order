
import "./TopRated1.css";
import { Link } from "react-router-dom";

function Item(props) {
  let TopRatedData = props.TopRatedData
  return (
    <>
      <div className='col'>
        <div className='top-food-card card'>
          <div className='top-favourite'>
            <p className='top-quantity'>
            <Link className="top-link" to='/all_item'>TOP</Link>
            </p>
          </div>
          <div className='item-info'>
            <div className="box-img"><img src={TopRatedData.image} className='card-img-top1' alt='...' /></div>
            <div className='card-body'>
              <div className="card-top-text"><h5 className='card-title1'>Bán{TopRatedData.salePerMonth}k+/tháng</h5></div>
              <div className='price-and-buy'>
                <div className="name-text"> 
                  <p className='card-text1'>{TopRatedData.name}</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Item;
