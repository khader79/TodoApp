import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, IconButton } from "@mui/material";
import { MdCheckCircleOutline, MdDelete, MdEdit } from "react-icons/md";
import "./TodoPage.css";
import { todoCon } from "../Context/todoCon";
import { useContext } from "react";

function Todo({ todo1 }) {
  const context = useContext(todoCon);
  if (!context) return null; // ✅ حل المشكلة
  const { todo, setTodo } = context;

  const changeCom = () => {
    const todoMap = (todo ?? []).map((data5) => {
      if (data5.id === todo1.id) {
        return { ...data5, isCompleted: !data5.isCompleted };
      }
      return data5;
    });
    setTodo(todoMap);
    localStorage.setItem("todo", JSON.stringify(todoMap));
  };

  const changeCom1 = () => {
    const updatedTodos = (todo ?? []).filter((data5) => data5.id !== todo1.id);
    setTodo(updatedTodos);
    localStorage.setItem("todo", JSON.stringify(updatedTodos));
  };

  const changeCom2 = () => {
    let title = prompt("Enter the title of " + todo1.title);
    let details = prompt("Enter the details");

    const todoMap = (todo ?? []).map((data5) => {
      if (data5.id === todo1.id) {
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

  return (
    <Card sx={{ marginTop: 5, backgroundColor: "#3498db" }}>
      <CardContent sx={{ height: "100%" }}>
        <Grid container spacing={2} component="div">
          <Grid size={8} component="div">
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: "right",
                textDecoration: todo1.isCompleted ? "line-through" : "none",
              }}
            >
              {todo1.title}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ textAlign: "right" }}
            >
              {todo1.details}
            </Typography>
          </Grid>
          <Grid
            size={4}
            component="div"
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <IconButton aria-label="complete">
              <MdCheckCircleOutline
                className={todo1.isCompleted ? "back4" : "back1"}
                onClick={changeCom}
              />
            </IconButton>
            <IconButton aria-label="edit">
              <MdEdit className="back2" onClick={changeCom2} />
            </IconButton>
            <IconButton aria-label="delete">
              <MdDelete className="back3" onClick={changeCom1} />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Todo;
