import "./Footer.css";
import rikPoint from "../../assets/rikkei-point.png";
function Footer() {
  return (
    <>
      <div className='footer-wrapper'>
        <div className='footer'>
          <div className='list-footer-wrapper'>
            <div className='list-footer customer-service'>
              <div className='title'>Chăm sóc khách hàng</div>
              <ul>
                <li>
                  <a href='#'>Trung tâm trợ giúp</a>
                </li>
                <li>
                  <a href='#'>Hướng dẫn mua hàng</a>
                </li>
                <li>
                  <a href='#'>Thanh toán</a>
                </li>
                <li>
                  <a href='#'>Rikkei point</a>
                </li>
                <li>
                  <a href='#'>Chăm sóc khách hàng</a>
                </li>
                <li>
                  <a href='#'>Chính sách bảo hành</a>
                </li>
                <li>
                  <a href='#'>Đổi trả hàng hóa</a>
                </li>
              </ul>
            </div>
            <div className='list-footer about-page'>
              <div className='title'>Về Rikkei Mart</div>
              <ul>
                <li>
                  <a href='#'>Giới thiệu về Rikkei Mart</a>
                </li>
                <li>
                  <a href='#'>Tuyển Dụng</a>
                </li>
                <li>
                  <a href='#'>Điều khoản</a>
                </li>
                <li>
                  <a href='#'>Chính sách bảo mật</a>
                </li>
                <li>
                  <a href='#'>Uy tín</a>
                </li>
                <li>
                  <a href='#'>Chương trình tiếp thị với Rikkei Mart</a>
                </li>
              </ul>
            </div>
            <div className='list-footer payment-methods'>
              <div className='title'>Phương thức thanh toán</div>
              <ul>
                <li>
                  <a target='#'>
                    <img
                      src='https://cf.shopee.vn/file/d4bbea4570b93bfd5fc652ca82a262a8'
                      alt='logo'
                    />
                  </a>
                </li>
                <li>
                  <a target='#'>
                    <img
                      src='https://cf.shopee.vn/file/a0a9062ebe19b45c1ae0506f16af5c16'
                      alt='logo'
                    />
                  </a>
                </li>
                <li>
                  <a target='#'>
                    <img src={rikPoint} alt='logo' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='list-footer follow-us'>
              <div className='title'>Theo dõi chúng tôi trên</div>
              <ul>
                <li>
                  <a href='#'>
                    <ion-icon name='logo-facebook'></ion-icon>Facebook
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <ion-icon name='logo-instagram'></ion-icon>Instagram
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <ion-icon name='logo-youtube'></ion-icon>Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">Copyright © 2022 Rikkei VietNam - All rights reserved</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
