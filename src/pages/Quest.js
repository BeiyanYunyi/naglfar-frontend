import { Container, Fab } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SingleChoices from "../components/SingleChoice";
import { setSubject } from "../reducers/subjectReducer";
import SendIcon from "@material-ui/icons/Send";
import MyLink from "../components/MyLink";

const Quest = () => {
  const dispatch = useDispatch();
  dispatch(setSubject(useParams().subject));
  return (
    <Container>
      <Header />
      <MyLink to="/score">
        <Fab
          color="primary"
          style={{ position: "fixed", bottom: 50, right: 50 }}
        >
          <SendIcon />
        </Fab>
      </MyLink>
      <SingleChoices />
    </Container>
  );
};
export default Quest;
