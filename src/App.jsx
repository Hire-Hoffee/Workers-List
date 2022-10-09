import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      return navigate("/main/all");
    }
  });

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
