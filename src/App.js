import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider, Button } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
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
  const notistackRef = React.createRef();
  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        preventDuplicate
        ref={notistackRef}
        action={(key) => (
          <Button onClick={onClickDismiss(key)} style={{ color: "#FFF" }}>
            关闭
          </Button>
        )}
      >
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
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
