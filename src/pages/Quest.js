import { Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ShortAnswers from "../components/ShortAnswer";
import SingleChoices from "../components/SingleChoice";
import { useDispatch } from "react-redux";
import { setSubject } from "../reducers/subjectReducer";

const Quest = () => {
  const dispatch = useDispatch();
  dispatch(setSubject(useParams().subject));
  return (
    <Container>
      <Header />
      <SingleChoices />
      <ShortAnswers />
    </Container>
  );
};
export default Quest;
