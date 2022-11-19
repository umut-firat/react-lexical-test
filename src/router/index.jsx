import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/home/index.jsx";
import Test from "../pages/test/index.jsx";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/test",
    component: Test,
  },
];

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={`route-${index}`}
            path={route.path}
            component={route.component}
          />
        ))}
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
