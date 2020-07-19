import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";

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
    color: "black",
    padding: "1rem",
    border: "1px solid gray",
    background: "transparent",
    transition: "0.5s",
    fontWeight: "700",
    marginLeft: "0.8rem",
    borderRadius: "7px",
    textDecoration: "none",
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
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
}));

export default function Content() {
  const classes = useStyles();
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });
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
              Product Engineer at{" "}
              <Link
                target="_blank"
                to={{ pathname: "https://www.fitbots.com/" }}
                className={classes.companyName}
              >
                Fitbots
              </Link>
              <span role="img" aria-label="I'm also">
                {" "}
                👔
              </span>
            </Typography>
          </Grid>
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
              Contact me any kind of website and software developement.
              <span role="img" aria-label="contact me">
                📱
              </span>
            </Typography>
          </Grid>
        </Grid>

        <div className={classes.contactMeContainer}>
          <a
            href={
              isPhone
                ? "https://wa.link/66lppr"
                : "mailto:mjariwala98@gmail.com"
            }
            rel="noopener noreferrer"
            target="_blank"
            className={classes.contactMe}
          >
            Contact me
          </a>
        </div>
      </Container>
    </div>
  );
}
