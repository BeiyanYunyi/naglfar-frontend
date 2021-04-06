import {
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { addSAQuestion } from "../../reducers/shortAnswerReducer";

const SAQuests = () => {
  const quests = useSelector((state) => state.shortanswers);

  const columns = [
    { field: "id", headerName: "题号", width: 100 },
    { field: "stem", headerName: "题干", width: 280 },
  ];
  const rows = quests.map((quest, arynum) => {
    return {
      id: arynum + 1,
      stem: quest.stem,
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
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const submitQuest = () => {
    dispatch(addSAQuestion(stem, img));
  };
  const handleStemChange = (event) => {
    setStem(event.target.value);
  };
  const handleImgChange = (event) => {
    setImg(event.target.value);
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
    </>
  );
};

export default SAQuests;
