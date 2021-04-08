import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header";
import { addSCQuestion } from "../../reducers/singleChoiceReducer";
import deleteArrayElement from "../../utils/deleteArrayElement";
import detectEmpty from "../../utils/detectEmpty";
import useMySnackbar from "../../utils/hooks/useMySnackbar";
import removeDuplicatedItem from "../../utils/removeDumplicatedItem";

/** Render the whole page.*/
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
      choice: quest.choice.join(" / "),
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

/** Component for user to add quests. */
const AddSCQ = () => {
  const [stem, setStem] = useState("");
  const [stemErr, setStemErr] = useState(false);
  const [choices, setChoices] = useState([""]);
  const [correct, setCorrect] = useState("");
  const [correctErr, setCorrectErr] = useState(false);
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const snackbar = useMySnackbar();
  const submitQuest = () => {
    let err = false;
    //Detect all requirements
    if (!stem) {
      setStemErr(true);
      snackbar.err("题干不得为空");
      err = true;
    }
    if (!correct) {
      setCorrectErr(true);
      snackbar.err("正确选项不得为空");
      err = true;
    }
    if (detectEmpty(choices).length !== 0) {
      detectEmpty(choices).forEach((num) => {
        snackbar.err(`第${num + 1}个选项不得为空`);
      });
      err = true;
    }
    if (choices.length !== removeDuplicatedItem(choices).length && !err) {
      snackbar.warn("选项存在重复，已自动去除");
    }
    if (!err) {
      const newChoices = removeDuplicatedItem(choices); // To remove the duplicated choices.
      dispatch(addSCQuestion(stem, img, newChoices, correct));
    }
  };

  const handleStemChange = (event) => {
    setStem(event.target.value);
    if (event.target.value) {
      setStemErr(false);
    } else {
      setStemErr(true);
    }
  };
  const handleImgChange = (event) => {
    setImg(event.target.value);
  };
  const handleCorrectChange = (event) => {
    setCorrect(event.target.value);
    if (event.target.value) {
      setCorrectErr(false);
    } else {
      setCorrectErr(true);
    }
  };

  return (
    <>
      <Typography variant="h6">新增题目：</Typography>
      <Grid container spacing={2}>
        <Grid item key="stem" lg={3} xs={12}>
          <TextField
            label="题干"
            multiline
            required
            error={stemErr}
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
          <FormControl
            required
            error={correctErr}
            variant="outlined"
            style={{ width: "100%" }}
          >
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
              {choices.map((choice) => (
                <option value={choice} key={uuidv4()}>
                  {choice}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item key="btn" lg={3} xs={12}>
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
      <SCChoices
        choices={choices}
        setChoices={setChoices}
        correct={correct}
        setCorrect={setCorrect}
      />
    </>
  );
};

/** Component to manage the choices of a quest. */
const SCChoices = ({ choices, setChoices, correct, setCorrect }) => {
  /** The function to handle the change of an choice,
   * then change the choices array.*/
  const changeChoices = (arynum, cgdchs) => {
    /* To check if the selector of correct answer match the choice we're editing.*/
    if (correct === choices[arynum]) {
      setCorrect(cgdchs);
    }

    /* Generate changed array of choices and update the original array.*/
    const changedChoices = choices.map((choice, arynumb) => {
      return arynumb === arynum ? cgdchs : choice;
    });
    setChoices(changedChoices);
  };
  const deleteChoices = (arynum) => {
    const changedChoices = deleteArrayElement(choices, arynum);
    setChoices(changedChoices);
  };
  return (
    <Grid container spacing={2}>
      {choices.map((choice, arynum) => {
        const handleChoiceChange = (event) => {
          const changedChoice = event.target.value;
          changeChoices(arynum, changedChoice);
        };
        const handleChoiceDelete = () => {
          if (correct === choice) {
            setCorrect("");
          }
          deleteChoices(arynum);
        };
        return (
          <Grid item key={arynum} lg={3} xs={12}>
            <FormControl
              variant="outlined"
              style={{ width: "100%" }}
              error={!choice}
              required
            >
              <InputLabel>{`选项${arynum + 1}`}</InputLabel>
              <OutlinedInput
                multiline
                onChange={handleChoiceChange}
                value={choice}
                labelWidth={42}
                endAdornment={
                  <InputAdornment position="end">
                    {arynum !== choices.length - 1 ? (
                      <IconButton onClick={handleChoiceDelete}>
                        <CancelOutlinedIcon />
                      </IconButton>
                    ) : (
                      <>
                        {arynum !== 0 && (
                          <IconButton onClick={handleChoiceDelete}>
                            <CancelOutlinedIcon />
                          </IconButton>
                        )}
                        <IconButton
                          onClick={() => {
                            setChoices(choices.concat(""));
                          }}
                        >
                          <AddCircleOutlineOutlinedIcon />
                        </IconButton>
                      </>
                    )}
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        );
      })}
      <Grid item key="add" lg={3} xs={12}></Grid>
    </Grid>
  );
};

export default SCQuests;
