import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useStyles, rowStyles, contactMeStyles } from "./HomeStyles.jsx";
import { homeContent } from "../../content/content";
import MenSvg from "../../assets/svg/men.jsx";
import GirlIcon from "../../assets/svg/girl.jsx";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Typography variant="h5" gutterBottom className={classes.intro}>
            Hello! I'm
          </Typography>
          <Typography variant="h1" gutterBottom className={classes.nameLabel}>
            Mounika
          </Typography>
          <Grid container className={classes.gridContainer}>
            {homeContent.map((data, index) => (
              <Row data={data} key={index} />
            ))}
            <ul>
              <li>
                <Typography
                  component="p"
                  id="freelancer"
                  style={{ fontWeight: 700 }}
                >
                  <b>Primary Skills:</b> Java, HTML,CSS, Angular, Spring MVC,
                  Spring Boot, JavaScript, SQL.
                  <br />
                </Typography>
              </li>
              <li>
                <Typography
                  component="p"
                  id="freelancer"
                  style={{ fontWeight: 700, margin: "2rem 0rem" }}
                >
                  <b>Secondary Skills:</b> Azure, TypeScript, React, AWS, NoSql,
                  Spark
                </Typography>
              </li>
              {/* <li>
                <Typography
                  component="p"
                  id="freelancer"
                  style={{ fontWeight: 700 }}
                >
                  React.js, React Redux, React Hook, Ionic, React Native
                </Typography>
              </li>
              <li>
                <Typography
                  component="p"
                  id="freelancer"
                  style={{ fontWeight: 700 }}
                >
                  Node.js, Express, Koa.js, Nest.js
                </Typography>
              </li>
              <li>
                <Typography
                  component="p"
                  id="freelancer"
                  style={{ fontWeight: 700 }}
                >
                  MySQL, MongoDB, Redis
                </Typography>
              </li>
              <li>
                <Typography
                  component="p"
                  id="freelancer"
                  style={{ fontWeight: 700 }}
                >
                  Github, Bitbucket, Jira, AWS, Docker
                </Typography>
              </li> */}
            </ul>
          </Grid>
          <ContactMe />
        </Grid>
        <Grid item md={6} className={classes.menSvg}>
          {/* <MenSvg /> */}
          <GirlIcon />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

const ContactMe = () => {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("md"), {
    defaultMatches: true,
  });
  const classes = contactMeStyles();
  return (
    <Box className={classes.contactMeBox}>
      <a
        href={"mailto:mounikap670@gmail.com"}
        rel="noopener noreferrer"
        target="_blank"
        className={classes.contactMe}
      >
        Contact me
      </a>
    </Box>
  );
};

const Row = (props) => {
  const { index, data } = props;
  const classes = rowStyles();
  return (
    <Grid key={index} item md={12} sm={12} xs={12} className={classes.gridItem}>
      <Typography component="p" id="freelancer">
        {data.primaryLabelText}
        <span
          role="img"
          aria-labelledby="freelancer"
          className={classes.secondaryLabel}
        >
          {data.secondaryLabelText}
        </span>
      </Typography>
    </Grid>
  );
};
