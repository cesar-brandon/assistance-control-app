import React, { lazy, Suspense } from "react";
import "./App.scss";
import "./style/main.scss";
import { Header } from "./components/layouts";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./router/routes";
import NotFound from "./pages/NotFound";
import AuthGuard from "./router/guards/auth.guard";
import { LinearProgress } from "./components/common";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Attendance = lazy(() => import("./pages/Attendance"));
const Login = lazy(() => import("./pages/Login"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Suspense fallback={<LinearProgress />}>
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to={PrivateRoutes.ATTENDANCE} />}
                />
                <Route path="*" element={<NotFound />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard />}>
                  <Route
                    path={`${PrivateRoutes.ATTENDANCE}/*`}
                    element={<Attendance />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
