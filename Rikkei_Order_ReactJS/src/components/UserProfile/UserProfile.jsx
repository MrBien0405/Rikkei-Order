import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { storage } from "../../App";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import "./UserProfile.css";
import { Button, Checkbox, Form, Input } from "antd";
function UserProfile() {
  const [dataUserProfile, setDataUserProfile] = useState([]);
  const [cookies, setCookie] = useCookies(["loginCookies"]);
  const [nameValue, setNameValue] = useState(setDataUserProfile);
  const [gmailValue, setGamailValue] = useState(setDataUserProfile);
  const [phoneValue, setPhoneValue] = useState(setDataUserProfile);
  const [imageUpload, setImageUpload] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const [ValueUpload, setValueUpload] = useState("");
  useEffect(() => {
    console.log(cookies.userId);
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

  const handleChangeUpload = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if (file) {
      const fileType = file.type;
      const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
      // console.log(fileType);
      if (validImageTypes.includes(fileType)) {
        setError("");
        setImageUpload(file);
      } else {
        setError("Please select an image to upload");
      }
    }
  };
  const handleClickUpdateUserProfile = (e) => {
    let id = e.target.id;
    console.log(nameValue);
    if (imageUpload) {
      const storageRef = ref(storage, `/images/${imageUpload.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageUpload);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => console.log(err),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log(url);
            const fetchDataUserProfile = async () => {
              const res = await fetch(
                `http://127.0.0.1:3000/auth/user/profile/${id}`,
                {
                  method: "PUT",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    id: Math.floor(Math.random() * 999999),
                    name: nameValue,
                    avatar: url,
                  }),
                }
              );
              const dataUser = await res.json();
              setCookie("name", nameValue, { maxAge: 1800 });
              setCookie("avatar", url, { maxAge: 1800 });
              setDataUserProfile(dataUser);
            };
            fetchDataUserProfile().catch(console.error);
          });
        }
      );
    } else {
      const fetchDataUserProfile = async () => {
        const res = await fetch(
          `http://127.0.0.1:3000/auth/user/profile/${id}`,
          {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: Math.floor(Math.random() * 999999),
              name: nameValue,
              avatar: cookies.avatar,
            }),
          }
        );
        const dataUser = await res.json();
        setDataUserProfile(dataUser);
        setCookie("name", nameValue, { maxAge: 1800 });
        setCookie("avatar", cookies.avatar, { maxAge: 1800 });
      };
      fetchDataUserProfile().catch(console.error);
    }
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Thay ?????i th??nh c??ng",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.href = "/user_profile";
    }, 2000);
  };

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
    console.log(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
                  <div></div>
                )}
              </div>
              <div className='box-username'>
                {dataUserProfile ? (
                  <p className='text-username-profile'>
                    {dataUserProfile.name}
                  </p>
                ) : (
                  <div className="user-loading">loading...</div>
                )}

                <p className='text-file'>S???a H??? S??</p>
              </div>
            </div>
            <div className='my-account'>
              <p className='user-account-title text-my-account'>
                T??i kho???n c???a t??i
              </p>
            </div>

            <div className='purchase-history'>
              <Link className='text-my-account' to='/purchase_history'>
                L???ch s??? mua h??ng
              </Link>
            </div>
          </div>

          <div id={cookies.id} className='wrapper-user-right'>
            <div className='text-my-profile'>
              <h4 className='account-profile'>H??? s?? c???a t??i</h4>
              <p className='account-profile'>
                Qu???n l?? th??ng tin h??? s?? ????? b???o m???t t??i kho???n
              </p>
            </div>
            <div className='box-my-profile'>
              <div className='box-my-profile-left'>
                <Form
                  name='basic'
                  labelCol={{
                    span: 8,
                  }}
                  wrapperCol={{
                    span: 16,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete='off'
                >
                  <Form.Item
                    label='T??n ng?????i d??ng'
                    name='T??n ng?????i d??ng'
                    rules={[
                      {
                        required: true,
                        message: "Nh???p t??n b???n v??o ????y!",
                      },
                    ]}
                  >
                    {dataUserProfile ? (
                      <Input
                        onChange={handleChangeName}
                        value={nameValue}
                        defaultValue={dataUserProfile.name}
                      />
                    ) : (
                      <div>loading...</div>
                    )}
                  </Form.Item>

                  <Form.Item
                    label='Email'
                    name='Email'
                    rules={[
                      {
                        required: true,
                        message: "Nh???p email b???n v??o ????y!",
                      },
                    ]}
                  >
                    {dataUserProfile ? (
                      <div>{dataUserProfile.gmail}</div>
                    ) : (
                      <div>loading...</div>
                    )}
                  </Form.Item>

                  <Form.Item
                    label='S??? ??i???n tho???i'
                    name='S??? ??i???n tho???i'
                    rules={[
                      {
                        required: true,
                        message: "Nh???p s??? ??i???n tho???i b???n v??o ????y!",
                      },
                    ]}
                  >
                    {dataUserProfile ? (
                      <div>{dataUserProfile.phone}</div>
                    ) : (
                      <div>loading...</div>
                    )}
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  ></Form.Item>
                </Form>
              </div>
              <div className='box-my-profile-right'>
                <div className='user-avatar-img'>
                  {dataUserProfile ? (
                    <img src={dataUserProfile.avatar} alt='' />
                  ) : (
                    <div>loading...</div>
                  )}
                </div>
                <input
                  value={ValueUpload}
                  onChange={handleChangeUpload}
                  className='btn-upload-user-name'
                  type='file'
                  placeholder='Ch???n ???nh'
                />

                <div className='photo-information'>
                  <p>Dung l?????ng file t???i ??a 1 MB</p>
                  <p>?????nh d???ng: JPEG, PNG</p>
                </div>
              </div>
            </div>
            <button
              id={cookies.userId}
              onClick={handleClickUpdateUserProfile}
              className='btn-userprofile'
            >
              L??u
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
