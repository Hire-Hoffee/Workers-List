import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeIsOnline } from "./store/slices/utilsSlice";

import ErrorPage from "./pages/ErrorPage";

function App() {
  const isError = useSelector((state) => state.utils.data.isError);
  const navigate = useNavigate();
  const updateOnline = useDispatch();

  window.addEventListener("offline", (e) => {
    updateOnline(changeIsOnline("offline"));
  });
  window.addEventListener("online", (e) => {
    updateOnline(changeIsOnline("online"));
  });

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
