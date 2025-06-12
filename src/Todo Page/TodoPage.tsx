import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import {
  Container,
  Divider,
  Grid,
  TextField,
  ToggleButtonGroup,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";

import "./TodoPage.css";
import Todo from "./Todo";
import { useContext, useEffect, useState } from "react";
import { todoCon } from "../Context/todoCon";

export default function TodoPage() {
  const context = useContext(todoCon);
  if (!context) return null;
  const { todo, setTodo } = context;
  const [selectedTab, setSelectedTab] = useState("all");

  const [titlein, setTitlein] = useState("");
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todo") || "[]");
    setTodo(items);
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
  } else if (selectedTab == "notCompleted") {
    todoToBeRender = notdoneTodos;
  } else {
    todoToBeRender = todo;
  }

  const todoMap = todoToBeRender.map((data5) => {
    return <Todo key={data5.id} todo1={data5} />;
  });
  return (
    <Container maxWidth="sm">
      <Card
        sx={{ maxWidth: 700 }}
        style={{ maxHeight: "60vh", overflow: "scroll" }}
      >
        <CardMedia title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            المهام
          </Typography>
          <Divider />
          <ToggleButtonGroup
            color="secondary"
            exclusive
            aria-label="Platform"
            className="TogBu"
            onChange={selectTabFun}
          >
            <ToggleButton value="notCompleted" style={{ fontSize: "20px" }}>
              الغير منجز
            </ToggleButton>
            <ToggleButton value="Done" style={{ fontSize: "20px" }}>
              المنجز
            </ToggleButton>
            <ToggleButton value="all" style={{ fontSize: "20px" }}>
              الكل
            </ToggleButton>
          </ToggleButtonGroup>
          {todoMap}
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid size={8}>
              <TextField
                style={{ width: "100%" }}
                id="outlined-basic"
                label="عنوان المهمة"
                variant="outlined"
                value={titlein}
                onChange={(e) => {
                  setTitlein(e.target.value);
                }}
              />
            </Grid>
            <Grid size={4}>
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={handelAdd}
                disabled={titlein.length == 0}
              >
                اضافة
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
