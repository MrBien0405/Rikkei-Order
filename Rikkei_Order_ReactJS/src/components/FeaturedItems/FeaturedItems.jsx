import "./FeaturedItems.css";
import featureBanner1 from "../../assets/food-banner-1.jpg";
import featureBanner2 from "../../assets/food-banner-2.png";

function FeaturedItems() {
  return (
    <>
      <div className='title_wrapper'>
        <h2 className='title'>
          Chào mừng bạn
          <br />
          Đã đến với Rikkei Mart
        </h2>
        <div className='description'>
          <p>
            Vô vàn đồ ăn ngon đang chờ đợi bạn !
            <br />
            Còn chờ đợi gì nữa, khám phá ngay thôi !
          </p>
        </div>
      </div>
      <div className='featured-items featured-items-1'>
        <div className='featured-description'>
          <h2>VỀ RIKKEI MART</h2>
          <p>
            Rikkei Mart là một canteen mini thuộc hệ thống Rikkei Academy, sinh
            ra nhằm mục đích giúp các bạn học viên có thể mua đồ ăn mà không cần
            đi lại mất quá nhiều thời gian, mà đồ ăn lại đảm bảo chất lượng hơn
            bên ngoài
          </p>
          <button>XEM THÊM</button>
        </div>
        <div className='featured-image'>
          <img src={featureBanner1} alt='' />
        </div>
      </div>
      <div className='featured-items featured-items-2'>
        <div className='featured-image'>
          <img src={featureBanner2} alt='' />
        </div>
        <div className='featured-description'>
          <h2>SẢN PHẨM HẤP DẪN, ĐA DẠNG</h2>
          <p>
            Với số lượng sản phẩm lên tới gần 1000 sản phẩm, Rikkei Mart mang
            đến cho bạn một thế giới đồ ăn vô tận. <br /> Chần chừ gì nữa mà
            không mua ngay!!!
          </p>
          <button>MUA NGAY</button>
        </div>
      </div>
    </>
  );
}

export default FeaturedItems;
