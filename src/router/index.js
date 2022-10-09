import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import MainPage from "../pages/MainPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "main/:query",
        element: <MainPage />,
      },
      {
        path: "user/:user_id",
        element: <UserDetailsPage />,
      },
    ],
  },
]);

export default routes;
