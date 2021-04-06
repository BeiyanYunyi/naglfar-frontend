import React from "react";
import Header from "../../components/Header";
import { DataGrid } from "@material-ui/data-grid";
import { Typography, Container } from "@material-ui/core";

const columns = [
  { field: "id", headerName: "豆瓣ID", width: 140 },
  { field: "SCscore", headerName: "选择题得分", width: 140 },
  { field: "SAscore", headerName: "简答题得分", width: 140 },
];

const rows = [
  { id: "田所浩二", SCscore: 114, SAscore: 514 },
  { id: "多田野树人", SCscore: 889, SAscore: 464 },
];

const Score = () => {
  return (
    <>
      <Header />
      <Container style={{ height: 500 }}>
        <Typography variant="h6">已答题用户：</Typography>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </Container>
    </>
  );
};
export default Score;
