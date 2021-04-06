import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";

import { Provider, useSelector } from "react-redux";

import Home from "./pages/Home";
import Exam from "./pages/Exam";
import Quest from "./pages/Quest";
import AdminHome from "./pages/admin/AdminHome";
import store from "./controllers/reducerCombiner";
// styles

// markup
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

const Main = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/admin/:route">
            <AdminHome />
          </Route>
          <Route path="/admin">
            <AdminHome />
          </Route>
          <Route path="/exam/:subject">
            <Quest />
          </Route>
          <Route path="/exam">
            <Exam />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
