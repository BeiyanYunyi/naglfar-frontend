import {
  CardActionArea,
  CardContent,
  Grid,
  Grow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import MyLink from "../components/MyLink";
import MyCard from "./MyCard";

const Links = () => {
  const links = useSelector((state) => state.links);
  return (
    <Grid container spacing={2}>
      {links.map((link, arynum) => {
        return (
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...{ timeout: 300 * arynum }}
            key={link.url}
          >
            <Grid item key={link.url} lg={3} md={6} sm={12} xs={12}>
              <MyLink to={`/exam${link.url}`} style={{ textDecoration: "none" }}>
                <MyCard>
                  <CardActionArea style={{ width: "100%", height: "100%" }}>
                    <CardContent>
                      <li style={{ color: link.color, marginLeft: 20 }}>
                        <Typography gutterBottom>{link.text}</Typography>
                        <span>
                          <Typography
                            variant="body2"
                            style={{ color: "#232129" }}
                          >
                            {link.description}
                          </Typography>
                        </span>
                      </li>
                    </CardContent>
                  </CardActionArea>
                </MyCard>
              </MyLink>
            </Grid>
          </Grow>
        );
      })}
    </Grid>
  );
};
export default Links;
