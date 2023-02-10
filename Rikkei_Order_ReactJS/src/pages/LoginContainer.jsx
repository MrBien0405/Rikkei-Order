import React, { useState } from "react";
import Login from "../components/Login/Login";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";

function LoginContainer() {
  const [cookies, setCookie] = useCookies(["loginCookie"]);
  const [error, setError] = useState("");
  const onFinish = (values) => {
    const data = {
      gmail: values.username,
      password: values.password,
    };
    console.log(data);
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login succesfully") {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Đăng nhập thành công",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(data);
          setCookie("userId", data.cookie.userId, { maxAge: 3600 });
          setCookie("role", data.cookie.role, { maxAge: 3600 });
          setCookie("name", data.cookie.name, { maxAge: 3600 });
          setCookie("avatar", data.cookie.avatar, { maxAge: 3600 });
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        } else {
          toast(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Login onFinish={onFinish} error={error} />
      <ToastContainer />
    </>
  );
}

export default LoginContainer;
