import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../assets/img/logo.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    color: "black",
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid whitesmoke",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  link: {
    color: "black",
    marginRight: "1.5rem",
    textDecoration: "none",
    fontWeight: "500",
    borderBottom: "3px solid black",
    padding: 5,
    transition: "0.5s",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
  linkedInIcon: {
    fill: "rgb(17, 82, 147)",
  },
  gitHubIcon: {
    fill: "rgba(0, 0, 0, 0.87)",
  },
  imgLogo: {
    borderRadius: "50%",
    border: "1px solid whitesmoke",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  listItem: {
    margin: "2rem",
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = () => {
    setDrawer(drawer ? false : true);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar position="static" elevation={1} className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <div className={classes.grow}>
              <img
                src={Logo}
                alt="logo"
                width={50}
                height={50}
                className={classes.imgLogo}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <a href="/projects" className={classes.link}>
                Projects
              </a>
              <a href="/resume" className={classes.link}>
                Resume
              </a>
              <IconButton aria-label="delete">
                <LinkedInIcon className={classes.linkedInIcon} />
              </IconButton>
              <IconButton aria-label="delete">
                <GitHubIcon className={classes.gitHubIcon} />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
        <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
          <List className={classes.root}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Resume" />
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>
                  <AssignmentIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Project" />
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </div>
  );
}
