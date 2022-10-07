import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      return navigate("/main");
    }
  });

  return (
    <div className="text-center text-3xl m-20">
      <p>Hello React</p>

      <br />

      <ul>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
      </ul>

      <br />

      <Outlet />
    </div>
  );
}

export default App;
