import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import TopAppBarComponent from "./components/UI/TopAppBarComponent";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      return navigate("/main");
    }
  });

  return (
    <div>
      <TopAppBarComponent />

      <div>
        <Outlet />
      </div>

    </div>
  );
}

export default App;
