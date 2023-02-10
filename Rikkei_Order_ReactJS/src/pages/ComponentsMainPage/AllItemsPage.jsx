import Category from "../../components/Category/Category";
import Card from "../../components/Card/Card";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
function AllItemsPage(props) {
  const { handleAddingCart } = props;
  const [category, setCategory] = useOutletContext();
  const [data, setData] = useState([]);
  const [cataTitle, setCataTitle] = useState("Tất cả sản phẩm");
  const [likeData, setLikeData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  useEffect(() => {
    const fetchDataheart = async () => {
      const res = await fetch(
        `http://localhost:3000/favorite/heart/${cookies.userId}`
      );
      const data = await res.json();
      setLikeData(data.data);
      console.log(data.data);
    };
    fetchDataheart().catch(console.error);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `http://127.0.0.1:3000/product?category=${category}`
      );
      const data = await res.json();
      setData(data.data);
    };
    fetchData().catch(console.error);
    if (category === "") {
      setCataTitle("Tất Cả Sản Phẩm");
    }
  }, [category]);
  const handleChooseCatagory = (e) => {
    if (e.target.id === "all") {
      setCategory("");
      setCataTitle("Tất Cả Sản Phẩm");
    } else {
      setCategory(e.target.id);
      if (e.target.id === "bimbim") {
        setCataTitle("Bim Bim");
      } else if (e.target.id === "drink") {
        setCataTitle("Đồ Uống");
      } else if (e.target.id === "snack") {
        setCataTitle("Đồ Ăn Nhẹ");
      } else {
        setCataTitle("Đồ Ăn Khác");
      }
    }
  };
  if (data.length === 0) {
    return <div>...</div>;
  }
  return (
    <>
      <Category handleChooseCatagory={handleChooseCatagory} />
      <div className='category-name'>
        <h1>{cataTitle}</h1>
      </div>
      <div className='row row-cols-1 row-cols-md-5 g-5'>
        {data.map((e, i) => (
          <Card
            key={i}
            cardData={e}
            handleAddingCart={handleAddingCart}
            status={
              likeData.findIndex((e1) => e1.productID3 === e.id) >= 0
                ? true
                : false
            }
          />
        ))}
      </div>
      <ToastContainer autoClose={1000} />
    </>
  );
}

export default AllItemsPage;
