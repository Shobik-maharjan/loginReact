import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const hangleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  // console.log(data);

  const submitButton = (e) => {
    e.preventDefault();
    if (data.username === "user" && data.password === "password") {
      alert("successfully submited");
    } else {
      alert("invalid");
    }
  };
  return (
    <>
      <div className="container">
        <form>
          <h1 className="text">Login</h1>
          <br />
          <div className="input">
            <div className="form-input">
              <label htmlFor="username">Username: </label>
              <input
                type="text"
                name="username"
                id="username"
                onChange={hangleChange}
              />
            </div>
            <div className="form-input">
              <label htmlFor="">Password: </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={hangleChange}
              />
            </div>
          </div>
          <div className="button">
            <button onClick={submitButton}>Login</button>
          </div>

          <div>
            <p>username is: {data.username}</p>
            <p>password is: {data.password}</p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
