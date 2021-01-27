import { Route, Switch } from "react-router-dom";

import HomePage from "../Pages/Home/index";
import DescriptionPage from "../Pages/Description/index";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/description">
          <DescriptionPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
