import React, { useEffect, useState } from "react";
import PurchasedItem from "../components/PurchasedItem/PurchasedItem";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
function PurchaseHistoryContainer() {
  const [cookies, setCookie] = useCookies(["loginCookies"]);
  const [historyData, setHistoryData] = useState([]);
  const [dataUserProfile, setDataUserProfile] = useState([]);
  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await fetch(
        `http://127.0.0.1:3000/auth/user/profile/${cookies.userId}`
      );
      const dataUser = await res.json();
      setDataUserProfile(dataUser.data[0]);
      // console.log(dataUser.data);
    };
    fetchDataUser().catch(console.error);
  }, []);
  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await fetch(
        `http://127.0.0.1:3000/history/${cookies.userId}`
      );
      const dataUser = await res.json();
      setHistoryData(dataUser.data);
    };
    fetchDataUser().catch(console.error);
  }, []);
  return (
    <>
      <div className='user-profile-container'>
        <div className='user-container'>
          <div className='wrapper-user-left'>
            <div className='chile-userprofile'>
              <div className='box-img-userprofile'>
                {dataUserProfile ? (
                  <img src={dataUserProfile.avatar} alt='' />
                ) : (
                  <div>loading...</div>
                )}
              </div>
              <div className='box-username'>
                {dataUserProfile ? (
                  <p className='text-username-profile'>
                    {dataUserProfile.name}
                  </p>
                ) : (
                  <div>loading...</div>
                )}

                <p className='text-file'>Sửa Hồ Sơ</p>
              </div>
            </div>
            <div className='my-account'>
              <Link to='/user_profile'>
                <p className='text-my-account'>Tài khoản của tôi</p>
              </Link>
            </div>
            <div className='purchase-history'>
              <Link className='text-my-account history-title' to='/purchase_history'>
                Lịch sử mua hàng
              </Link>
            </div>
          </div>
          <div className='wrapper-user-right'>
            <div className='text-my-profile'>
              <h4 className='account-profile'>Lịch sử mua hàng</h4>
              <p className='account-profile'>
                Cảm ơn bạn đã tin tưởng chúng tôi !!!
              </p>
            </div>
            <div className='purchased-history-container'>
              {historyData.length === 0 ? (
                <div> bạn chưa mua gì cả</div>
              ) : (
                historyData.map((e) => <PurchasedItem historyData={e} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseHistoryContainer;
