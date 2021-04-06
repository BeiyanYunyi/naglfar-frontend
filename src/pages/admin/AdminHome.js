import { CardContent, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import MyCard from "../../components/MyCard";
import MyLink from "../../components/MyLink";
import SCQuests from "./SCQuests";
import SAQuests from "./SAQuests";
import Score from "./Score";

const AdminHome = () => {
  switch (useParams().route) {
    case "score": {
      return <Score />;
    }
    case "scquests": {
      return <SCQuests />;
    }
    case "saquests": {
      return <SAQuests />;
    }
    default:
      break;
  }
  const links = [
    { to: "/admin/score", text: "查看每人分数" },
    { to: "/admin/scquests", text: "管理选择题" },
    { to: "/admin/saquests", text: "管理简答题" },
  ];
  return (
    <>
      <Header />
      <Container style={{ height: 500 }}>
        <Grid container spacing={2}>
          {links.map((link) => (
            <AdminHomeLinks to={link.to} text={link.text} key={link.to} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

const AdminHomeLinks = (prop) => {
  return (
    <Grid item lg={3} xs={12}>
      <MyLink
        to={prop.to}
        style={{
          textDecoration: "none",
          verticalAlign: "middle",
        }}
      >
        <MyCard>
          <CardContent>
            <Typography color="textPrimary" align="center" variant="h6">
              {prop.text}
            </Typography>
          </CardContent>
        </MyCard>
      </MyLink>
    </Grid>
  );
};

export default AdminHome;
