import { useState } from "react";
import "./Login.css";
import loginData from "./loginData.json";
import { useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
const Login = () => {
  const [data2, setData2] = useState({
    username: "",
    password: "",
    Massage: "",
  });
  const [vis, setVis] = useState(false);
  const nav = useNavigate();

  const data = loginData.find((data1) => {
    return (
      data2.username === data1.Username && data2.password === data1.Password
    );
  });

  const click1 = () => {
    if (data) {
      nav("/Home");
    } else if (data2.username === "" || data2.password === "") {
      setData2({ ...data2, Massage: "Username Or Password is Empty" });
    }
  };

  const userChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData2({ ...data2, username: e.target.value });
  };
  const passChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData2({ ...data2, password: e.target.value });
  };

  if (data2.Massage !== "") {
    setTimeout(() => {
      setData2({ ...data2, Massage: "" });
    }, 5000);
  }

  const IconClick = () => {
    if (vis === false) {
      setVis(true);
    } else {
      setVis(false);
    }
  };
  return (
    <>
      <div className="toplab">
        <h1>KTL</h1>
      </div>
      <div className="Login">
        <div className="From">
          <label className="userlab">Username</label>
          <input
            className="inUser"
            type="text"
            name="usename"
            value={data2.username}
            onChange={userChange}
          />

          <label className="passlab">Password</label>
          <div className="passWrapper">
            <input
              className="inPass"
              type={vis ? "text" : "password"}
              name="password"
              value={data2.password}
              onChange={passChange}
            />
            {vis ? (
              <IoIosEyeOff className="icon" onClick={IconClick} />
            ) : (
              <IoMdEye className="icon" onClick={IconClick} />
            )}
          </div>
          <button onClick={click1} className="LogBu">
            Click
          </button>
          <h3 className={data2.Massage == "" ? "hide" : "display"}>
            {data2.Massage}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Login;
