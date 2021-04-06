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
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header";
import { addSCQuestion } from "../../reducers/singleChoiceReducer";
import deleteArrayElement from "../../utils/deleteArrayElement";
import detectEmpty from "../../utils/detectEmpty";

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

const AddSCQ = () => {
  const [stem, setStem] = useState("");
  const [stemErr, setStemErr] = useState(false);
  const [choices, setChoices] = useState([""]);
  const [correct, setCorrect] = useState("");
  const [correctErr, setCorrectErr] = useState(false);
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const submitQuest = () => {
    //Detect all requirements
    if (!stem) {
      setStemErr(true);
      enqueueSnackbar(`请检查题干！`, {
        variant: "error",
      });
    }
    if (!correct) {
      enqueueSnackbar(`正确选项未填写！`, {
        variant: "error",
      });
      setCorrectErr(true);
    }
    if (detectEmpty(choices).length !== 0) {
      detectEmpty(choices).forEach((num) => {
        enqueueSnackbar(`请检查第${num + 1}个选项！`, {
          variant: "error",
        });
      });
    }
    if (!choices.includes(correct)) {
      enqueueSnackbar(`正确答案不是选项之一，请检查`, {
        variant: "error",
      });
    }
    console.log(detectEmpty([1, 2, 3]));
    if (
      stem &&
      correct &&
      choices.includes(correct) &&
      detectEmpty(choices).length === 0
    ) {
      dispatch(addSCQuestion(stem, img, choices, correct));
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
      <SCChoices choices={choices} setChoices={setChoices} />
    </>
  );
};

const SCChoices = ({ choices, setChoices }) => {
  const changeChoices = (arynum, cgdchs) => {
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
