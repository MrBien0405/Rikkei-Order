import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
import "./NavBarTop.css";
import logo from "./../../assets/logo.png";
function NavBarTop(props) {
  let { handleSetDefaultCate, cartData, handleChooseSearchItem } = props;
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  const [dataSearch, setDataSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (Cookies.get("name")) {
      setUsername(Cookies.get("name"));
      setAvatar(Cookies.get("avatar"));
    }
  }, []);
  const logOut = () => {
    removeCookie("name", { path: "/" });
    removeCookie("role", { path: "/" });
    removeCookie("userId", { path: "/" });
    removeCookie("avatar", { path: "/" });
    window.location.href = "http://localhost:8000/";
  };
  useEffect(() => {
    const fetchDataSearch = async () => {
      const res = await fetch(
        `http://localhost:3000/product/search?productName=${searchValue}`
      );
      const data = await res.json();
      setDataSearch(data.data);
    };
    fetchDataSearch().catch(console.error);
  }, [searchValue]);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClickSearch = (e) => {
    alert("chưa làm bạn ơi");
    setSearchValue("");
  };
  const handleChooseItem = (e) => {
    setSearchValue("");
  };
  const handleClickInput = (e) => {
    if (e.target.value) {
      setSearchValue(e.target.value);
    } else {
      setSearchValue("");
    }
  };
  return (
    <>
      <div className='navbar-top'>
        <div className='nav-logo'>
          <img src={logo} alt='' />
        </div>
        <div className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/all_item' onClick={handleSetDefaultCate}>
            All items
          </Link>
          <Link to='#'>News</Link>
          <Link to='#'>About us</Link>
          <Link to='#'>Contact us</Link>
        </div>
        <div className='search-bar'>
          <input
            value={searchValue}
            onChange={handleChange}
            onClick={handleClickInput}
            type='text'
            placeholder='Browse for more...'
          />
          <button onClick={handleClickSearch}>
            <Link to='/item/'>
              <ion-icon name='search-outline'></ion-icon>
            </Link>
          </button>
          {dataSearch ? (
            <>
              <ul className='drop-down'>
                {dataSearch.map((e, i) => (
                  <Link
                    key={e.id}
                    id={e.id}
                    to={`/item/${e.id}`}
                    className='item-search'
                    onClick={handleChooseSearchItem}
                  >
                    <li
                      id={e.id}
                      key={i}
                      onClick={handleChooseItem}
                      className='search-item-name'
                    >
                      <div className='box-search-img'>
                        <img src={e.image} className='search-img' alt='...' />
                      </div>
                      {e.name.toLowerCase()}
                    </li>
                  </Link>
                ))}
              </ul>
            </>
          ) : (
            <div className='drop-down'></div>
          )}
        </div>
        <div className='user'>
          <div className='user-profile'>
            {username ? (
              <div className='user_display'>
                <div className='user_display-image'>
                  <img src={avatar} alt='.' />
                </div>
                {username}
                <ul className='dropdown-menu'>
                  <li>
                    <Link className='dropdown-item' to='/user_profile'>
                      Tài khoản của tôi
                    </Link>
                  </li>
                  <li>
                    <Link className='dropdown-item' to='/cart'>
                      Giỏ hàng ({cartData.length})
                    </Link>
                  </li>
                  <li>
                    <Link to='/favorite' className='dropdown-item' href='/'>
                      Yêu thích
                    </Link>
                  </li>
                  <li>
                    <button className='dropdown-item' onClick={logOut}>
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className='user-profile-login'>
                <Link to='/login'>Đăng nhập/Đăng kí</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarTop;
