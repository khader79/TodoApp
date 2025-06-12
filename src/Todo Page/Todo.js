import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import "./TodoPage.css";
import { todoCon } from "../Context/todoCon";
import { useContext } from "react";
function Todo({ todo1 }) {
    const { todo, setTodo } = useContext(todoCon);
    const changeCom = () => {
        const todoMap = todo.map((data5) => {
            if (data5.id == todo1.id) {
                data5.isCompleted = !data5.isCompleted;
            }
            return data5;
        });
        setTodo(todoMap);
        localStorage.setItem("todo", JSON.stringify(todoMap));
    };
    const changeCom1 = () => {
        const updatedTodos = todo.filter((data5) => data5.id !== todo1.id);
        setTodo(updatedTodos);
        localStorage.setItem("todo", JSON.stringify(updatedTodos));
    };
    const changeCom2 = () => {
        let title = prompt("Enter the title of " + todo1.title);
        let details = prompt("Enter the details");
        const todoMap = todo.map((data5) => {
            if (data5.id == todo1.id) {
                if (title === "" && details === "") {
                    return { ...data5 };
                }
                return {
                    ...data5,
                    ...(title !== "" && { title }),
                    ...(details !== "" && { details }),
                };
            }
            return data5;
        });
        setTodo(todoMap);
        localStorage.setItem("todo", JSON.stringify(todoMap));
    };
    return (_jsx(Card, { sx: { marginTop: 5, backgroundColor: "#3498db" }, children: _jsx(CardContent, { sx: { height: "100%" }, children: _jsxs(Grid, { container: true, spacing: 2, children: [_jsxs(Grid, { size: 7.5, children: [_jsx(Typography, { variant: "h5", component: "div", sx: {
                                    textAlign: "right",
                                    textDecoration: todo1.isCompleted ? "line-through" : "none",
                                }, children: todo1.title }), _jsx(Typography, { variant: "h6", component: "div", sx: { textAlign: "right" }, children: todo1.details })] }), _jsxs(Grid, { size: 4.5, display: "flex", justifyContent: "space-around", alignItems: "center", children: [_jsx(IconButton, { "aria-label": "delete", children: _jsx(MdCheckCircleOutline, { className: todo1.isCompleted ? "back4" : "back1", onClick: changeCom }) }), _jsx(IconButton, { "aria-label": "delete", children: _jsx(MdEdit, { className: "back2", onClick: changeCom2 }) }), _jsx(IconButton, { "aria-label": "delete", children: _jsx(MdDelete, { className: "back3", onClick: changeCom1 }) })] })] }) }) }));
}
export default Todo;
