import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "calc(100vh - 90px)",
    paddingTop: "2rem",
  },
  marginLeft: {
    marginLeft: "0.8rem",
  },
  marBottom: {
    marginBottom: "1rem",
  },
  grid: {
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "95%",
    },
  },
  contactMe: {
    border: "1px solid gray",
    color: "black",
    fontWeight: "700",
    minHeight: "70px",
    width: "170px",
    boxShadow: "none",
    marginLeft: "0.8rem",
    background: "transparent",
    transition: "0.5s",
    borderRadius: "15px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      minHeight: "auto",
      padding: "1rem",
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      border: "1px solid black",
    },
  },
  bigText: {
    fontSize: "8rem",
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",
    },
  },
  contactMeContainer: {
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

export default function Content() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h5" gutterBottom className={classes.marginLeft}>
          Hello! I'm
        </Typography>
        <Typography variant="h1" gutterBottom className={classes.bigText}>
          Mehul
        </Typography>

        <Grid container className={`${classes.grid} ${classes.marginLeft}`}>
          <Grid item md={12} className={classes.marBottom}>
            <Typography component="p">
              I'm also currently available for new projects.
              <span role="img" aria-label="I'm also">
                😎
              </span>
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.marBottom}>
            <Typography component="p">
              My interest in make open source library that can help developer to
              grow and scale.
              <span role="img" aria-label="My interest">
                🚀
              </span>
            </Typography>
          </Grid>
          <Grid item md={12} className={classes.marBottom}>
            <Typography component="p" aria-label="Fun fact">
              Fun fact about me is i am not drink coffee at all.
              <span role="img" aria-label="Fun fact about">
                😄
              </span>
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.contactMeContainer}>
          <Button className={classes.contactMe}>Contact me</Button>
        </div>
      </Container>
    </div>
  );
}
