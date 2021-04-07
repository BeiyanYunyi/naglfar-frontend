import {
  CardContent,
  CardMedia,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Grow,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { answerSCQuestion } from "../reducers/singleChoiceReducer";
import MyCard from "./MyCard";

const SingleChoice = (prop) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    dispatch(answerSCQuestion(prop.arynum, event.target.value));
  };
  return (
    <MyCard>
      {prop.quest.img ? (
        <>
          <CardMedia image={prop.quest.img} style={{ height: 250 }} />
          <Divider />
        </>
      ) : null}
      <CardContent>
        <Typography gutterBottom>{prop.quest.stem}</Typography>
        <FormControl>
          <FormLabel>
            <Typography
              variant="body2"
              onClick={() => {
                dispatch(answerSCQuestion(prop.arynum, ""));
              }}
            >
              选项（点此清除本题已选项）
            </Typography>
          </FormLabel>
          <RadioGroup
            onChange={handleChange}
            value={prop.quest.answer ? prop.quest.answer : ""}
          >
            {prop.quest.choice.map((choice) => {
              return (
                <FormControlLabel
                  value={choice}
                  control={<Radio />}
                  label={choice}
                  key={uuidv4()}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </MyCard>
  );
};

const SingleChoices = (prop) => {
  const quests = useSelector((state) => state.singlechoices);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        单选题
      </Typography>
      <Grid container spacing={2}>
        {quests.map((quest, arynum) => (
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 300 * arynum }}
            key={quest.stem}
          >
            <Grid item lg={12} xs={12}>
              <SingleChoice quest={quest} arynum={arynum} />
            </Grid>
          </Grow>
        ))}
      </Grid>
    </>
  );
};
export default SingleChoices;
