import React, { useState } from "react";
import PropTypes from "prop-types";

// Material.js
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Avatar, Button, IconButton, SvgIcon } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import { searchCustomerdetails } from "../redux/index";
// Components
import Tabpanel from "./Tabs";

// Custom styles
import "../styles/Drawer.css";
import { useDispatch } from "react-redux";
import Footer from "./Footer";

function ResponsiveDrawer({ children }) {
  const dispatch = useDispatch();
  const drawerWidth = 55;
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    inputRoot: {
      border: "1px solid #5DAAE0",
      borderRadius: "25px",
    },
    large: {
      width: theme.spacing(5.2),
      height: theme.spacing(5.2),
    },
    // necessary for content to be below app bar
    drawerPaper: {
      background: "#5DAAE0",
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
    },
    toolbar: theme.mixins.toolbar,
    menu: {},
    button: {
      margin: "1px",
      color: "white",
    },
    paper: {
      background: "#5DAAE0",
      width: "22%",
    },
  }));

  const classes = useStyles();

  const drawer = (
    <div>
      <MenuIcon
        style={{ marginTop: "6%" }}
        fontSize="large"
        className="main-menu-icon"
        onClick={() => {
          setIsMenuOpen(true);
        }}
      />
      <Divider />
      <Avatar
        style={{ bottom: 4, position: "absolute", margin: "0.5vw" }}
        alt="J"
        src="J"
        className="avatar"
      />
    </div>
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFreedaOpen, setIsFreedaOpen] = useState(false);
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ background: "transparent" }}
        elevation={0}
      >
        <Toolbar
          style={{
            position: "",
            top: 0,
            height: "",
            width: "",
          }}
        >
          <IconButton>
            <ArrowBackIcon style={{ color: "white" }} />
          </IconButton>
          <Typography variant="h5" noWrap style={{ color: "#5DAAE0" }}>
            Call Workboard
          </Typography>
          <div>
            <Button
              startIcon={
                <img src={process.env.PUBLIC_URL + "/Image/Symbol531.svg"} />
              }
              endIcon={
                <img src={process.env.PUBLIC_URL + "/Image/Symbol531-1.svg"} />
              }
              variant="contained"
              style={{
                fontSize: "80%",
                width: "auto",
                height: "2.8vh",
                position: "fixed",
                top: 0,
                backgroundColor: "#FC7500",
                color: "white",
                marginLeft: "25%",
                boxShadow: "none",
                borderRadius: "0 0 13px 13px",
              }}
            >
              AUTONOMOUS RECEIVABLES
            </Button>
          </div>
          <div
            className="app-utils"
            style={{ right: 15, position: "fixed", display: "flex" }}
          >
            <div
              className="search-bar"
              style={{ marginLeft: "3", height: "4%" }}
            >
              {/* <SearchLogo className="search-logo"/> */}
              <Avatar
                src={process.env.PUBLIC_URL + "/Image/Symbol-129.svg"}
                className={classes.large}
                // style={{ height: '20px', width: '20px' }}
              />

              <input
                type="text"
                placeholder="Search Name"
                className="search-input"
                onChange={(event) => {
                  dispatch(searchCustomerdetails(0, event.target.value));
                }}
              ></input>
              <ArrowDropDownIcon
                style={{
                  position: "relative",
                  top: "10",
                  right: "0",
                  left: "0",
                  bottom: "0",
                }}
              />
            </div>
            <Button
              variant="contained"
              style={{
                padding: "0px 5px 0.1px 15px",
                borderRadius: "25px",
                backgroundColor: "#FC7500",
                color: "white",
                marginLeft: "2%",
                boxShadow: "none",
              }}
              className="freeda-btn"
              endIcon={
                <Avatar
                  src={process.env.PUBLIC_URL + "/Image/Group-1206.svg"}
                />
              }
              onClick={() => {
                setIsFreedaOpen(true);
              }}
            >
              FREEDA
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>{children}</Typography>
      </main>

      <div className="custom-drawer">
        <Drawer
          // transitionDuration="1"
          classes={{ paper: classes.paper }}
          open={isMenuOpen}
          onClose={() => {
            setIsMenuOpen(false);
          }}
        >
          <div
            className="inner-drawer"
            onClick={() => {
              setIsMenuOpen(false);
            }}
            style={{ paddingTop: "3%" }}
          >
            <span className="menu-drawer">
              <MenuIcon
                fontSize="large"
                className="menu-icon"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              />
              <span> &nbsp;</span> MENU
            </span>
          </div>
          <div>
            <Button
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={classes.button}
              size="large"
              startIcon={<ArrowBackIcon />}
            >
              Switch Back to Enterprise UI
            </Button>
          </div>
          <div className="drawer-footer">
            <Avatar alt="J" src="J" className="avatar" />
            <span className="avatar-name">&nbsp;John Smith</span>

            <Button
              variant="contained"
              style={{
                right: 0,
                position: "absolute",
                borderRadius: "25px",
                backgroundColor: "#2D4250",
                color: "white",
              }}
            >
              Logout
            </Button>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default function Base({ children }) {
  return (
    <>
      <ResponsiveDrawer>
        <Tabpanel />
        <Footer />
      </ResponsiveDrawer>
    </>
  );
}
