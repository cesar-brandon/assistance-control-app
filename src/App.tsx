import React, { lazy, Suspense } from "react";
import "./App.scss";
import "./style/main.scss";
import { Header } from "./components/layouts";
import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./router/routes";
import AuthGuard from "./router/guards/auth.guard";
import { LinearProgress } from "./components/common";
import RoutesWithNotFound from "./utilities/RoutesWithNotFound";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const Private = lazy(() => import("./pages/Private/Private"));
const Login = lazy(() => import("./pages/Login/Login"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Suspense fallback={<LinearProgress />}>
          <Provider store={store}>
            <BrowserRouter>
              <Header />
              <RoutesWithNotFound>
                <Route
                  path="/"
                  element={<Navigate to={"/privado/asistencia"} />}
                />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route element={<AuthGuard />}>
                  <Route
                    path={`${PrivateRoutes.PRIVATE}/*`}
                    element={<Private />}
                  />
                </Route>
              </RoutesWithNotFound>
            </BrowserRouter>
          </Provider>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
