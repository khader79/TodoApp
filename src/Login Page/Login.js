import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
        return (data2.username === data1.Username && data2.password === data1.Password);
    });
    const click1 = () => {
        if (data) {
            nav("/Home");
        }
        else if (data2.username === "" || data2.password === "") {
            setData2({ ...data2, Massage: "Username Or Password is Empty" });
        }
    };
    const userChange = (e) => {
        setData2({ ...data2, username: e.target.value });
    };
    const passChange = (e) => {
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
        }
        else {
            setVis(false);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "toplab", children: _jsx("h1", { children: "KTL" }) }), _jsx("div", { className: "Login", children: _jsxs("div", { className: "From", children: [_jsx("label", { className: "userlab", children: "Username" }), _jsx("input", { className: "inUser", type: "text", name: "usename", value: data2.username, onChange: userChange }), _jsx("label", { className: "passlab", children: "Password" }), _jsxs("div", { className: "passWrapper", children: [_jsx("input", { className: "inPass", type: vis ? "text" : "password", name: "password", value: data2.password, onChange: passChange }), vis ? (_jsx(IoIosEyeOff, { className: "icon", onClick: IconClick })) : (_jsx(IoMdEye, { className: "icon", onClick: IconClick }))] }), _jsx("button", { onClick: click1, className: "LogBu", children: "Click" }), _jsx("h3", { className: data2.Massage == "" ? "hide" : "Display", children: data2.Massage })] }) })] }));
};
export default Login;
