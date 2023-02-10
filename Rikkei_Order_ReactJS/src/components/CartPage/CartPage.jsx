import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { redirect } from "react-router-dom";
import "./CartPage.css";
function Cart(props) {
  let { cartList } = props;
  const sum1 = cartList.reduce(
    (pre, x) => pre + x.sellPrice * x.cartQuantity,
    0
  );
  const [data, setData] = useState(cartList);
  const [sum, setSum] = useState(sum1);
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  useEffect(() => {
    const newSum = data.reduce(
      (pre, x) => pre + x.sellPrice * x.cartQuantity, //method tìm hiểu hàm này
      0
    );
    setSum((pre) => newSum);
  }, [data]);
  const handlePurchaseConfirm = (e) => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Mua hàng thành công",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(data);
    console.log(cookies.userId);
    for (let i = 0; i < data.length; i++) {
      const addHistoryPurchase = async () => {
        const res = await fetch("http://localhost:3000/history", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: data[i].userID2,
            productId: data[i].productID2,
            sellPrice: data[i].sellPrice,
            buy_quantity: data[i].cartQuantity,
          }),
        });
      };
      addHistoryPurchase().catch(console.error);
    }
    const deleteCartByUser = async () => {
      const res = await fetch(
        `http://localhost:3000/cart?userId=${cookies.userId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    };
    deleteCartByUser().catch(console.error);
    setTimeout(() => {
      window.location.href = "http://localhost:8000/all_item";
    }, 2000);
  };
  const handleDeleteCart = (id) => {
    setData(data.filter((e) => e.productID2 !== id));
    const fetchData = async () => {
      const res = await fetch(`http://127.0.0.1:3000/cart/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
    };
    fetchData().catch(console.error);
  };
  const handleChange = (value, id) => {
    if (value <= 1) {
      const newData = data.map((item) => {
        if (item.id === id) {
          item.cartQuantity = 1;
          const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:3000/cart", {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                quantityValue: 1,
                userId: item.userID2,
                productId: item.productID2,
              }),
            });
          };
          fetchData().catch(console.error);
          return item;
        }
        return item;
      });
      setData(newData);
    } else {
      const newData = data.map((item) => {
        if (item.id === id) {
          item.cartQuantity = value;
          const fetchData = async () => {
            const res = await fetch("http://127.0.0.1:3000/cart", {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                quantityValue: value,
                userId: item.userID2,
                productId: item.productID2,
              }),
            });
          };
          fetchData().catch(console.error);
          return item;
        }
        return item;
      });

      setData(newData);
    }
    const newSum = data.reduce(
      (pre, x) => pre + x.sellPrice * x.cartQuantity, //method tìm hiểu hàm này
      0
    );
    setSum(newSum);
  };
  return (
    <>
      <div className='modal-body'>
        <div className='cart-row'>
          <span className='cart-item cart-header cart-column'>Sản Phẩm</span>
          <span className='cart-price cart-header cart-column'>Giá (VNĐ)</span>
          <span className='cart-quantity cart-header cart-column'>
            Số Lượng
          </span>
        </div>
        <div className='cart-items'>
          {data.map((item, index) => (
            <div key={index} className='cart-row'>
              <div className='cart-item cart-column'>
                <img
                  className='cart-item-image'
                  src={item.image}
                  width='100'
                  height='100'
                  alt=''
                />
                <span className='cart-item-title'>{item.name}</span>
              </div>
              <span className='cart-price cart-column'>
                {new Intl.NumberFormat("de-DE").format(
                  item.sellPrice * item.cartQuantity
                )}
              </span>
              <div className='cart-quantity cart-column'>
                <input
                  className='cart-quantity-input'
                  type='number'
                  value={item.cartQuantity}
                  onChange={(e) => handleChange(e.target.value, item.id)}
                />
                <button
                  onClick={(e) => handleDeleteCart(item.id)}
                  className='btn btn-danger'
                  type='button'
                >
                  Xóa
                </button>
              </div>
            </div>
          ))}
          <div className='cart-total'>
            <strong className='cart-total-title'>Tổng Cộng:</strong>
            <span className='cart-total-price'>
              {new Intl.NumberFormat("de-DE").format(sum)} VNĐ
            </span>
            <button onClick={handlePurchaseConfirm} className='thanhtoan'>
              Thanh Toán
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
