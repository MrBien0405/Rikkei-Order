import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./ItemInformation.css";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
function ItemInformation(props) {
  const { data } = props;
  const [valueItem, setValueItem] = useState(0);
  const [commentValue, setCommentValue] = useState("");
  // const [userName, setUserName] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [dataComment, setDataComment] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["loginCookie"]);
  const [dataReview, setDataReview] = useState([]);
  const handleClickMinus = (e) => {
    if (valueItem > 0) {
      setValueItem(valueItem - 1);
    }
  };
  const handleClickPlus = (e) => {
    setValueItem(valueItem + 1);
  };
  const handleChangeComment = (e) => {
    setCommentValue(e.target.value);
  };

  const handleClickComment = (e) => {
    if (Object.keys(cookies).length === 0) {
      window.location.href = "http://localhost:8000/login";
    } else {
      console.log(commentValue, cookies.userId, e.target.id, data.id);
      const fetchDataComment = async () => {
        const res = await fetch("http://localhost:3000/review", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Math.floor(Math.random() * 999999),
            userID: cookies.userId,
            productID: e.target.id,
            comment: commentValue,
          }),
        });
      };
      fetchDataComment().catch(console.error);
    }
  };

  // useEffect(() => {
  //   if (Cookies.get("name")) {
  //     setUserName(Cookies.get("name"));
  //     setAvatar(Cookies.get("avatar"));
  //   }
  // }, []);

  useEffect(() => {
    const fetchDataReview = async () => {
      let id = window.location.href.replace("http://localhost:8000/item/", "");
      const res = await fetch(`http://localhost:3000/review/${id}`);
      const dataReview = await res.json();
      // console.log(dataReview.data[0].comment);
      if (dataReview === 0) {
        <div>loading....</div>;
      } else {
        setDataReview(dataReview.data);
      }
    };
    fetchDataReview().catch(console.error);
  }, []);

  return (
    <>
      <div className='wrapper-item'>
        <div className='imtemfamily'>
          <div className='itemanh'>
            <img src={data.image} alt='' />
          </div>

          <div className='imtemflofai'>
            <div className='tongchu'>
              <p className='velcro'>[Chính hãng] {data.name.toUpperCase()}</p>
              <p className='luanr'>{data.discription}</p>
            </div>

            <div className='tongto'>
              <div className='itemcart'>
                <div className='cartone'>
                  <p className='price'>Price</p>
                  <p className='tamchin'>đ{data.sellPrice}</p>
                </div>
                <div className='cartone'>
                  <p className='price'>Status</p>
                  <p className='tamchin'>in Stock</p>
                </div>
                <div className='cartone'>
                  <p className='price'>Reviews</p>
                  <form action='' className='icon-star'>
                    <input
                      className='star star-5'
                      id='star-5'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-5' htmlFor='star-5'></label>
                    <input
                      className='star star-4'
                      id='star-4'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-4' htmlFor='star-4'></label>
                    <input
                      className='star star-3'
                      id='star-3'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-3' htmlFor='star-3'></label>
                    <input
                      className='star star-2'
                      id='star-2'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-2' htmlFor='star-2'></label>
                    <input
                      className='star star-1'
                      id='star-1'
                      type='radio'
                      name='star'
                    />
                    <label className='star star-1' htmlFor='star-1'></label>
                  </form>
                </div>
                <div className='cartone1'>
                  <p className='price'>
                    Sản phẩm có sẵn:{" "}
                    {data.quantity - valueItem < 0
                      ? 0
                      : data.quantity - valueItem}
                  </p>
                  <div>
                    <button onClick={handleClickMinus} className='btn-Item'>
                      -
                    </button>
                    <input
                      className='input-item'
                      type='text'
                      value={valueItem}
                    />
                    <button onClick={handleClickPlus} className='btn-Item'>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button className='addtocatr'>ADD TO CART</button>
          </div>
        </div>

        <div>
          <h3 className='text-item-product'>Đánh giá sản phẩm</h3>
          <div className='item-star'>
            <div className='star-rating'>
              <span className='text-item'>4.5</span>
              <span className='text-item1'>trên 5</span>
              <div className='box-star'>
                <form action=''>
                  <input
                    className='star star-5'
                    id='star-5'
                    type='radio'
                    name='star'
                  />
                  <label className='star star-5' htmlFor='star-5'></label>
                  <input
                    className='star star-4'
                    id='star-4'
                    type='radio'
                    name='star'
                  />
                  <label className='star star-4' htmlFor='star-4'></label>
                  <input
                    className='star star-3'
                    id='star-3'
                    type='radio'
                    name='star'
                  />
                  <label className='star star-3' htmlFor='star-3'></label>
                  <input
                    className='star star-2'
                    id='star-2'
                    type='radio'
                    name='star'
                  />
                  <label className='star star-2' htmlFor='star-2'></label>
                  <input
                    className='star star-1'
                    id='star-1'
                    type='radio'
                    name='star'
                  />
                  <label className='star star-1' htmlFor='star-1'></label>
                </form>
              </div>
            </div>

            <div className='item-comment'>
              {Object.keys(cookies).length === 0 ? (
                <div>
                  <h5>Bạn hãy <Link to="/login">đăng nhập</Link> để bình luận</h5>
                </div>
              ) : (
                <>
                  <div className='textarea-item'>
                    <textarea
                      className='textarea-item-comment'
                      value={commentValue}
                      onChange={handleChangeComment}
                    ></textarea>
                  </div>
                  <button
                    id={data.id}
                    onClick={handleClickComment}
                    className='btn-submit-comment'
                  >
                    Submit
                  </button>
                </>
              )}

              {dataReview ? (
                <>
                  {dataReview.map((e, i) => (
                    <div key={i} className='text-comment'>
                      <div className='user_display-image'>
                        <img src={e.avatar} alt='' />
                      </div>
                      <div className='text-information'>
                        <span>{e.name}</span>

                        <div className='box-star'>
                          <form action=''>
                            <input
                              className='star star-5'
                              id='star-5'
                              type='radio'
                              name='star'
                            />
                            <label
                              className='star star-5'
                              htmlFor='star-5'
                            ></label>
                            <input
                              className='star star-4'
                              id='star-4'
                              type='radio'
                              name='star'
                            />
                            <label
                              className='star star-4'
                              htmlFor='star-4'
                            ></label>
                            <input
                              className='star star-3'
                              id='star-3'
                              type='radio'
                              name='star'
                            />
                            <label
                              className='star star-3'
                              htmlFor='star-3'
                            ></label>
                            <input
                              className='star star-2'
                              id='star-2'
                              type='radio'
                              name='star'
                            />
                            <label
                              className='star star-2'
                              htmlFor='star-2'
                            ></label>
                            <input
                              className='star star-1'
                              id='star-1'
                              type='radio'
                              name='star'
                            />
                            <label
                              className='star star-1'
                              htmlFor='star-1'
                            ></label>
                          </form>
                        </div>
                        <div className='review-comments'>
                          <p className='comment-reviews'>{e.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div>loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInformation;
