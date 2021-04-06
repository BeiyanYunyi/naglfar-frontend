import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Breadcrumbs,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearHistory } from "../reducers/historyReducer";

const Header = () => {
  const title = useSelector((state) => state.title);

  return (
    <>
      <title>{title}</title>
      <div position="static" style={{ height: 72 }}></div>
      <AppBar position="fixed">
        <Toolbar style={{ width: "100%", paddingLeft: 8 }}>
          &emsp;<Typography variant="h6">{title}</Typography>&emsp;
          <Link to="/">
            <IconButton>
              <HomeIcon style={{ color: "white" }} />
            </IconButton>
          </Link>
          <History />
        </Toolbar>
      </AppBar>
    </>
  );
};

const History = () => {
  const histories = useSelector((state) => state.history);
  const dispatch = useDispatch();
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        style={{ color: "white",marginLeft: -15}}
      >
        <Typography></Typography>
        {histories.map((history) => {
          return (
            <Link to={history} style={{ textDecoration: "none" }} key={history}>
              <Typography style={{ color: "white" }} variant="inherit">
                {history}
              </Typography>
            </Link>
          );
        })}
      </Breadcrumbs>
      {histories.length !== 0 && (
        <IconButton
          variant="body2"
          onClick={() => {
            dispatch(clearHistory());
          }}
        >
          <DeleteIcon style={{ color: "white" }} />
        </IconButton>
      )}
    </>
  );
};
export default Header;
