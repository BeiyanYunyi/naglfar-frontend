import { Container } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ShortAnswers from "../components/ShortAnswer";
import SingleChoices from "../components/SingleChoice";

const Quest = () => {
  console.log(useParams().subject);
  return (
    <Container>
      <Header />
      <SingleChoices />
      <ShortAnswers />
    </Container>
  );
};
export default Quest;
