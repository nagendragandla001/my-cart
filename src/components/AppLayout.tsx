import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../configs/routeConfig";
import { lazy, Suspense } from "react";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Routes>
        {APP_ROUTES.map((route) => {
          const Component = lazy(() => route.component());
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Component />
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default AppLayout;
