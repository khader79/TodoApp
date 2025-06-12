import TodoPage from "./TodoPage";
import { todoCon } from "../Context/todoCon";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const intodo = [
  {
    id: uuidv4(),
    title: "test",
    details: "hfkhdkshkhsd",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "test1",
    details: "hfkhdkshkhsd",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "tes2",
    details: "hfkhdkshkhsd",
    isCompleted: false,
  },
];

const TodoMain = () => {
  const [todo, setTodo] = useState(intodo);
  return (
    <>
      <todoCon.Provider value={{ todo, setTodo }}>
        <TodoPage />
      </todoCon.Provider>
    </>
  );
};

export default TodoMain;
