import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { authRoutes, publicknRoutes } from "../routes";
import Shop from "../pages/Shop";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user._isAuth);
  // console.log(`"isAuth" ${isAuth}`);

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      {publicknRoutes.map(({ path, component }) => (
        <Route key={path} path={path} element={component} />
      ))}
      <Route path="*" element={<Shop />} />
    </Routes>
  );
};

export default AppRouter;
