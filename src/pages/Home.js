import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Grow,
  Typography,
} from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import MyLink from "../components/MyLink";
import { useDispatch } from "react-redux";
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
            <Card>
              <CardContent style={{ textAlign: "center" }}>
                <MyLink to="/exam" style={{ textDecoration: "none" }}>
                  <Button>
                    <Typography variant="h6">来这里考试</Typography>
                  </Button>
                </MyLink>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Card>
              <CardContent style={{ textAlign: "center" }}>
                <MyLink to="/admin" style={{ textDecoration: "none" }}>
                  <Button>
                    <Typography variant="h6">来这里管理</Typography>
                  </Button>
                </MyLink>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Home;
