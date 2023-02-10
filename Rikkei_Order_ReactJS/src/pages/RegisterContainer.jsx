
import React, { useState, useEffect } from 'react';
import Register from "../components/Register/Register"

function RegisterContainer() {
  const [error, setError] = useState("")


  const onFinish = (values) => {
    console.log(values);
    const data = {
      name: values.username,
      gmail: values.email,
      phone: values.Phone,
      password: values.password
    };
    fetch('http://127.0.0.1:3000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setError(data.message)
        if (values.password !== values.passwordre) {
          setError("Mat khau nhat lai khong trung khop")
        }
        

      })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log('Received values of form:hhhhh ', values);
  };

  return (<>
    <Register onFinish={ onFinish } error={ error } />
  </>);
}

export default RegisterContainer;