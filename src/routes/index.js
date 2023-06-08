import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Movie from "../Pages/Movie";
import Search from "../Pages/Search/Search";

const routes = [
  {
    element: <Home />,
    path: "/",
    access: "public",
  },
  {
    element: <Signup />,
    path: "/signup",
    access: "public",
  },
  {
    element: <Login />,
    path: "/login",
    access: "public",
  },
  {
    element: <Movie />,
    path: "/home",
    access: "member",
  },

  {
    element: <Movie />,
    path: "/tvshow",
    access: "member",
  },

  {
    element: <Movie />,
    path: "/movie",
    access: "member",
  },

  {
    element: <Search />,
    path: "/search",
    access: "member",
  },
];

export default routes;
