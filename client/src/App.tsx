import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default App;
