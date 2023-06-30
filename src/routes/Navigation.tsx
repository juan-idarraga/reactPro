import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from "../logo.svg";
import { routes } from "./routes";
import { Suspense } from "react";
//suspense show while is loading
export const Navigation = () => {
  return (
    <Suspense>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo"></img>
            <ul>
              {routes.map((route) => (
                <li>
                  <NavLink
                    to={route.path}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ to, path, Component }) => (
              <Route key={to} path={path} element={<Component />} />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
