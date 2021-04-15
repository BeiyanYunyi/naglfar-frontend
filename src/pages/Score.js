import { CircularProgress, Container, Typography } from "@material-ui/core";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";

const Score = () => {
  const [answerurl, setAnswerurl] = useState(<CircularProgress />);
  const singleChoices = useSelector((state) => state.singlechoices);
  const correctedChoices = singleChoices.filter((quest) => {
    if (quest.answer) {
      return bcrypt.compareSync(quest.answer, quest.correct);
    } else {
      return false;
    }
  });
  const sendanswers = async (answer) => {
    const response = await axios.post(
      "https://bund.penclub.club/?https://paste.ubuntu.com/",
      `poster=naglfar&syntax=text&expiration=year&content=${answer}`
    );
    setAnswerurl(response.request.responseURL.substring(28).replace("/", ""));
  };
  useEffect(() => {
    sendanswers(singleChoices.map((choice) => choice.answer).join(", "));
  }, [singleChoices]);
  const score = (
    100 *
    (correctedChoices.length / singleChoices.length)
  ).toFixed(0);
  return (
    <Container>
      <Header />
      <Typography align="center" variant="h6">
        选择题有{singleChoices.length}题
      </Typography>
      <Typography align="center" variant="h6" gutterBottom>
        你答对了{correctedChoices.length}题
      </Typography>
      <Typography align="center" variant="h6" gutterBottom>
        因此你的总分是
      </Typography>
      <Typography align="center" variant="h1" gutterBottom>
        {score} / 100
      </Typography>
      <Typography align="center" variant="body2" gutterBottom>
        请保管好如下字符串：{answerurl}
      </Typography>
    </Container>
  );
};
export default Score;
