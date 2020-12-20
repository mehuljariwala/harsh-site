import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { useStyles, rowStyles, contactMeStyles } from "./HomeStyles.jsx";
import { homeContent } from "../../content/content";
import MenSvg from "../../assets/svg/men.jsx";

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
            Mehul
          </Typography>
          <Grid container className={classes.gridContainer}>
            {homeContent.map((data, index) => (
              <Row data={data} key={index} />
            ))}
          </Grid>
          <ContactMe />
        </Grid>
        <Grid item md={6} className={classes.menSvg}>
          <MenSvg />
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
        href={
          isPhone ? "https://wa.link/66lppr" : "mailto:mjariwala98@gmail.com"
        }
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
