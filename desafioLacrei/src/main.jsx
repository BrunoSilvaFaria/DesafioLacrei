import ReactDOM from "react-dom/client";
import './global.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Usuario from "./Pages/Usuario/Usuario.jsx";
import Profissional from "./Pages/Profissional/Profissional.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/usuario",
        element: <Usuario />,
      },
      {
        path: "/profissional",
        element: <Profissional />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
