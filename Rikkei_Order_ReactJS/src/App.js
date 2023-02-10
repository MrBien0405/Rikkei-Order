import "./App.css";
import React, { useState, useEffect } from "react";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import LoginContainer from "./pages/LoginContainer";
import RegisterContainer from "./pages/RegisterContainer";
import HomepageWrapper from "./pages/ComponentsMainPage/HomepageWrapper";
import ResetpassContainer from "./pages/ResetpassContainer";
import AllItemsPage from "./pages/ComponentsMainPage/AllItemsPage";
import CartWrapper from "./pages/CartWrapper";
import AllFavoriteProduct from "./pages/ComponentsMainPage/AllFavoriteProduct";
import ItemDetail from "./pages/ComponentsMainPage/ItemDetail";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import UserProfileContainer from "./pages/UserProfileContainer";
import PurchaseHistoryContainer from "./pages/PurchaseHistoryContainer";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBeql5cxaWyOUUGZXub5oP0mPNMftKYiXs",
  authDomain: "ra-order.firebaseapp.com",
  projectId: "ra-order",
  storageBucket: "ra-order.appspot.com",
  messagingSenderId: "1052623262223",
  appId: "1:1052623262223:web:0fc02f8a0eda452debc97a",
  measurementId: "G-CZFVWVQP46",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  const [allData, setAllData] = useState("");
  const [cartData, setCartData] = useState("");
  const [itemSearchData, setItemSearchData] = useState("");
  const [cartStatus, setCartStatus] = useState(true);
  const [pickSearchStatus, setPickSearchStatus] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:3000/product?category=`);
      const data = await res.json();
      setAllData(data.data);
    };
    fetchData().catch(console.error);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:3000/cart/${cookies.userId}`);
      const data = await res.json();
      setCartData(data.data);
    };
    fetchData().catch(console.error);
  }, [cartStatus]);

  const handleAddingCart = (e) => {
    if (Object.keys(cookies).length === 0) {
      window.location.href = "http://localhost:8000/login";
    } else {
      console.log(cookies.userId);
      console.log(e.target.id);
      const settingsPost = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: cookies.userId,
          productId: e.target.id,
          id: Math.floor(Math.random() * 999999),
        }),
      };
      const fetchData = async () => {
        const res = await fetch("http://127.0.0.1:3000/cart", settingsPost);
        const data = await res.json();
        // console.log(data);
      };
      setCartStatus(!cartStatus);
      fetchData().catch(console.error);
      toast.success("Thêm vào giỏ hàng thành công", {
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
  };
  const handleChooseSearchItem = (e) => {
    let id = e.target.id;
    setPickSearchStatus(!pickSearchStatus);
    const fetchDataSearch = async () => {
      const res = await fetch(`http://localhost:3000/product/${id}`);
      const data = await res.json();
      setItemSearchData(data.data);
    };
    fetchDataSearch().catch(console.error);
  };
  if (!allData || !cartData) {
    return <div>alldata...</div>;
  }

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginContainer />}></Route>
        <Route path='/register' element={<RegisterContainer />}></Route>
        <Route path='/resetpass' element={<ResetpassContainer />}></Route>
        <Route
          path='/'
          element={
            <MainPage
              handleChooseSearchItem={handleChooseSearchItem}
              cartData={cartData}
            />
          }
        >
          <Route path='/' element={<HomepageWrapper />}></Route>
          <Route
            path='/all_item'
            element={<AllItemsPage handleAddingCart={handleAddingCart} />}
          ></Route>
          <Route
            path='/cart'
            element={<CartWrapper allData={allData} cartData={cartData} />}
          />
          <Route path='/favorite' element={<AllFavoriteProduct />}></Route>
          <Route
            path='/user_profile'
            element={<UserProfileContainer />}
          ></Route>
          <Route
            path='/purchase_history'
            element={<PurchaseHistoryContainer />}
          ></Route>

          <Route
            path='/item/:id'
            element={<ItemDetail itemSearchData={itemSearchData} />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
export { storage };
export default App;
