import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as Router from "react-router-dom";
import Login from "./Login Page/Login";
import "./main.css";
import TodoMain from "./Todo Page/TodoMain";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router.BrowserRouter>
      <Router.Routes>
        <Router.Route path="/" element={<Login />} />
        <Router.Route
          path="/Home"
          element={
            <div className="ToCen">
              <TodoMain />
            </div>
          }
        />
      </Router.Routes>
    </Router.BrowserRouter>
  </StrictMode>
);
