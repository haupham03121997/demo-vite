import "./App.css";
import { Link, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  let element = useRoutes([
    {
      path: "/dev/admin",
      element: <Home />,
      children: [
        {
          path: "register",
          element: <Register />,
        },
        { path: "login", element: <Login /> },
      ],
    },
    { path: "*", element: <Home /> },
  ]);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Link to={"/dev/admin"}>Home</Link>
        <Link to={"/dev/admin/register"}>Register</Link>
        <Link to={"/dev/admin/login"}>Login</Link>
      </div>
      {element}
    </>
  );
}

export default App;
