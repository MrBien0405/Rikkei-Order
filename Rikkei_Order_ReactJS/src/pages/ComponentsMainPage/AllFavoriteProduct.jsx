import React, { useEffect, useState } from "react";
import FavoriteProduct from "../../components/FavoriteProduct/FavoriteProduct";
import { useCookies } from "react-cookie";
function AllFavoriteProduct() {
  const [data, setData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const fetchDataFavorite = async () => {
      const res = await fetch("http://localhost:3000/favorite");
      const data = await res.json();
      setData(data.data);
      // console.log(data);
    };
    fetchDataFavorite().catch(console.error);
  }, [status]);
  const handleClickDeleteHeart = (e) => {
    let productId = e.target.id;
    console.log(cookies.userId);

    setData(
      data.filter((e) => {
        return e.productID3 !== productId;
      })
    );
    // console.log(cookies.userId);
    console.log(e.target.id);
    const DeleteHeart = async () => {
      const res = await fetch("http://localhost:3000/favorite/heart", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID3: cookies.userId,
          productID3: e.target.id,
          id: Math.floor(Math.random() * 999999),
        }),
      });
    };
    DeleteHeart().catch(console.error);

    setStatus(!status);
  };
  if (data.length === 0) {
    return <div>loading...</div>;
  }
  return (
    <>
      <h1 className='favorite-text-like'>Sản phẩm yêu thích</h1>
      <div className='row row-cols-1 row-cols-md-5 g-5'>
        {data.map((e, i) => (
          <FavoriteProduct
            key={i}
            dataFavorite={e}
            handleClickDeleteHeart={handleClickDeleteHeart}
          />
        ))}
      </div>
    </>
  );
}

export default AllFavoriteProduct;
