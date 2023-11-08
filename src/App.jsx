import { useState } from "react";
import "./App.css";

function App() {
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
    alert("successfully submited");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitButton}>
          <h2 className="text">Login</h2>
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
            <button type="submit">Login</button>
          </div>

          <div>
            <p>username is: {data.username}</p>
            <p>password is: {data.password}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
