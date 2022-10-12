import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorPage from "./pages/ErrorPage";

function App() {
  const isError = useSelector((state) => state.utils.data.isError);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      return navigate("/main/all");
    }
  });

  return (
    <>
      {isError ? (
        <ErrorPage />
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
}

export default App;
