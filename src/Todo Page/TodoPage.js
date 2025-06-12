import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { Container, Divider, Grid, TextField, ToggleButtonGroup, } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import "./TodoPage.css";
import Todo from "./Todo";
import { useContext, useEffect, useState } from "react";
import { todoCon } from "../Context/todoCon";
export default function TodoPage() {
    const { todo, setTodo } = useContext(todoCon);
    const [selectedTab, setSelectedTab] = useState("all");
    const [titlein, setTitlein] = useState("");
    useEffect(() => {
        const items = localStorage.getItem("todo");
        setTodo(JSON.parse(items));
    }, []);
    const handelAdd = () => {
        const newtodo = {
            id: uuidv4(),
            title: titlein,
            details: "",
            isCompleted: false,
        };
        setTodo([...todo, newtodo]);
        localStorage.setItem("todo", JSON.stringify([...todo, newtodo]));
        setTitlein("");
    };
    const doneTodos = todo.filter((data5) => data5.isCompleted);
    const notdoneTodos = todo.filter((data5) => !data5.isCompleted);
    const selectTabFun = (e) => {
        setSelectedTab(e.target.value);
    };
    let todoToBeRender = todo;
    if (selectedTab == "Done") {
        todoToBeRender = doneTodos;
    }
    else if (selectedTab == "notCompleted") {
        todoToBeRender = notdoneTodos;
    }
    else {
        todoToBeRender = todo;
    }
    const todoMap = todoToBeRender.map((data5) => {
        return _jsx(Todo, { todo1: data5 }, data5.id);
    });
    return (_jsx(Container, { maxWidth: "sm", children: _jsxs(Card, { sx: { maxWidth: 700 }, style: { maxHeight: "60vh", overflow: "scroll" }, children: [_jsx(CardMedia, { title: "green iguana" }), _jsxs(CardContent, { children: [_jsx(Typography, { gutterBottom: true, variant: "h2", component: "div", children: "\u0627\u0644\u0645\u0647\u0627\u0645" }), _jsx(Divider, {}), _jsxs(ToggleButtonGroup, { color: "secondary", exclusive: true, "aria-label": "Platform", className: "TogBu", onChange: selectTabFun, children: [_jsx(ToggleButton, { value: "notCompleted", style: { fontSize: "20px" }, children: "\u0627\u0644\u063A\u064A\u0631 \u0645\u0646\u062C\u0632" }), _jsx(ToggleButton, { value: "Done", style: { fontSize: "20px" }, children: "\u0627\u0644\u0645\u0646\u062C\u0632" }), _jsx(ToggleButton, { value: "all", style: { fontSize: "20px" }, children: "\u0627\u0644\u0643\u0644" })] }), todoMap, _jsxs(Grid, { container: true, spacing: 2, style: { marginTop: "20px" }, children: [_jsx(Grid, { size: 8, children: _jsx(TextField, { style: { width: "100%" }, id: "outlined-basic", label: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0647\u0645\u0629", variant: "outlined", value: titlein, onChange: (e) => {
                                            setTitlein(e.target.value);
                                        } }) }), _jsx(Grid, { size: 4, children: _jsx(Button, { variant: "contained", style: { width: "100%", height: "100%" }, onClick: handelAdd, disabled: titlein.length == 0, children: "\u0627\u0636\u0627\u0641\u0629" }) })] })] })] }) }));
}
