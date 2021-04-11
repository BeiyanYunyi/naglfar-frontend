import Header from "../components/Header";
import { Container, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const Score = () => {
  const singleChoices = useSelector((state) => state.singlechoices);
  const correctedChoices = singleChoices.filter(
    (quest) => quest.answer === quest.correct
  );
  const score = (100 * (correctedChoices.length / singleChoices.length)).toFixed(2);
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
    </Container>
  );
};
export default Score;
