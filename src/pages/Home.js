import {
  CardContent,
  Container,
  Grid,
  Grow,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import MyLink from "../components/MyLink";
import MyCard from "../components/MyCard";
import { setSubject } from "../reducers/subjectReducer";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(setSubject(""));
  return (
    <Container>
      <Header />
      <Grow in={true}>
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <MyLink to="/exam" style={{ textDecoration: "none" }}>
              <MyCard>
                <CardActionArea style={{ width: "100%", height: "100%" }}>
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography variant="h6">来这里考试</Typography>
                  </CardContent>
                </CardActionArea>
              </MyCard>
            </MyLink>
          </Grid>
          <Grid item lg={6} xs={12}>
            <MyLink to="/admin" style={{ textDecoration: "none" }}>
              <MyCard>
                <CardActionArea style={{ width: "100%", height: "100%" }}>
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography variant="h6">来这里管理</Typography>
                  </CardContent>
                </CardActionArea>
              </MyCard>
            </MyLink>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Home;
