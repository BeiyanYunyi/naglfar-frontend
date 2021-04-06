import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { concatHistory } from "../reducers/historyReducer";

const MyLink = (prop) => {
  const dispatch = useDispatch();
  const handleClick = (to) => {
    dispatch(concatHistory(to));
  };
  return (
    <div>
      <Link
        to={prop.to}
        style={{ textDecoration: "none" }}
        onClick={() => {
          handleClick(prop.to);
        }}
      >
        {prop.children}
      </Link>
    </div>
  );
};

export default MyLink;
