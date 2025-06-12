import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Router from "react-router-dom";
import Login from "./Login Page/Login";
import "./main.css";
import TodoMain from "./Todo Page/TodoMain";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(Router.BrowserRouter, { children: _jsxs(Router.Routes, { children: [_jsx(Router.Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Router.Route, { path: "/Home", element: _jsx("div", { className: "ToCen", children: _jsx(TodoMain, {}) }) })] }) }) }));
