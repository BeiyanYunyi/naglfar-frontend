import {
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  Grid,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { addSCQuestion } from "../../reducers/singleChoiceReducer";
import { v4 as uuidv4 } from "uuid";

const SCQuests = () => {
  const quests = useSelector((state) => state.singlechoices);

  const columns = [
    { field: "id", headerName: "题号", width: 100 },
    { field: "stem", headerName: "题干", width: 280 },
    { field: "choice", headerName: "选项", width: 280 },
    { field: "correct", headerName: "正确答案", width: 200 },
  ];
  const rows = quests.map((quest, arynum) => {
    return {
      id: arynum + 1,
      stem: quest.stem,
      choice: quest.choice.join(),
      correct: quest.correct,
    };
  });

  return (
    <>
      <Header />
      <Container>
        <DataGrid
          autoHeight={true}
          rows={rows}
          columns={columns}
          pageSize={5}
        />
        <AddSCQ />
      </Container>
    </>
  );
};

const AddSCQ = () => {
  const [stem, setStem] = useState("");
  const [choice, setChoice] = useState([]);
  const [correct, setCorrect] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const submitQuest = () => {
    dispatch(addSCQuestion(stem, img, choice, correct));
  };
  const handleStemChange = (event) => {
    setStem(event.target.value);
  };
  const handleImgChange = (event) => {
    setImg(event.target.value);
  };
  const handleCorrectChange = (event) => {
    setCorrect(event.target.value);
  };

  return (
    <>
      <Typography variant="h6">新增题目：</Typography>
      <Grid container spacing={2}>
        <Grid item key="stem" lg={3} xs={12}>
          <TextField
            label="题干"
            multiline
            variant="outlined"
            onChange={handleStemChange}
            style={{ width: "100%" }}
            value={stem}
          />
        </Grid>
        <Grid item key="img" lg={3} xs={12}>
          <TextField
            label="图片地址（选填）"
            multiline
            variant="outlined"
            onChange={handleImgChange}
            style={{ width: "100%" }}
            value={img}
          />
        </Grid>
        <Grid item key="correct" lg={3} xs={12}>
          <FormControl variant="outlined" style={{ width: "100%" }}>
            <InputLabel htmlFor="fkyou">正确选项</InputLabel>
            <Select
              native
              labelId="sltlabel"
              label="正确选项"
              onChange={handleCorrectChange}
              inputProps={{ id: "fkyou" }}
              value={correct}
            >
              <option value=""></option>
              {choice.map((choice) => (
                <option value={choice} key={uuidv4()}>
                  {choice}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item key="btn" lg={3} xs={12}>
          <Button
            onClick={() => {
              setChoice(choice.concat(""));
            }}
            variant="contained"
            color="secondary"
            style={{ height: 56, width: "50%" }}
          >
            新增选项
          </Button>
          <Button
            onClick={submitQuest}
            variant="contained"
            color="primary"
            style={{ height: 56, width: "50%" }}
          >
            提交新题目
          </Button>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: 5, marginBottom: 5 }} />
      <SCChoices choice={choice} setChoice={setChoice} />
    </>
  );
};

const SCChoices = ({ choice, setChoice }) => {
  const changeChoices = (arynum, cgdchc) => {
    const changedChoices = choice.map((choice, arynumb) => {
      return arynumb === arynum ? cgdchc : choice;
    });
    setChoice(changedChoices);
  };
  return (
    <Grid container spacing={2}>
      {choice.map((choice, arynum) => {
        const handleChoiceChange = (event) => {
          const choiceToChange = arynum;
          const changedChoice = event.target.value;
          changeChoices(choiceToChange, changedChoice);
        };
        return (
          <Grid item key={arynum} lg={3} xs={12}>
            <TextField
              label={`选项${arynum + 1}`}
              multiline
              variant="outlined"
              onChange={handleChoiceChange}
              style={{ width: "100%" }}
              value={choice}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default SCQuests;
