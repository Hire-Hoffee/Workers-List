import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { changeIsOnline } from "./store/slices/utilsSlice";

import ErrorPage from "./pages/ErrorPage";

function App() {
  const isError = useSelector((state) => state.utils.data.isError);
  const navigate = useNavigate();
  const updateOnline = useDispatch();

  const setOnline = () => updateOnline(changeIsOnline("online"));
  const setOffline = () => updateOnline(changeIsOnline("offline"));

  useEffect(() => {
    if (window.location.pathname === "/") {
      return navigate("/main/all");
    }

    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);

    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
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
