import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h2>page note Fount</h2>,
    children: [
      {
            path:"/",
            element:<Home></Home>
      }
    ],
  },
]);
export default router;
