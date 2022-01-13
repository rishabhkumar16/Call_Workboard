/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// Material.js
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

//API
import {
  fetchGlobalData,
  goToNextPage,
  goToPrevPage,
  fetchCustomerdetails,
  fetchUpcomingCustomerdetails,
} from "../redux/index";

// Components
import ToList from "./ToList";
import { Button } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    color: "white",
  },
  indicator: {
    backgroundColor: "white",
  },
  tabgrp: {
    borderBottom: `1.5px solid ${theme.palette.divider}`,
  },
  righttabgrp: {
    borderRight: `1.5px solid ${theme.palette.divider}`,
  },
  nxtbtn: {
    position: "absolute",
    right: 0,
    bottom: "45%",
  },
  prevbtn: {
    position: "absolute",
    bottom: "45%",
  },
}));

export default function SimpleTabs() {
  const dispatch = useDispatch();
  const pageNo = useSelector((state) => state.globalStore.pageNo);
  const processedCustomerCount = useSelector(
    (state) => state.globalStore.processedCustomerCount
  );
  const totalCustomerCount = useSelector(
    (state) => state.globalStore.totalCustomerCount
  );
  const completedCallingMinutes = useSelector(
    (state) => state.globalStore.completedCallingMinutes
  );
  const expectedCallingMinutes = useSelector(
    (state) => state.globalStore.expectedCallingMinutes
  );
  const totalPastDueAmount = useSelector(
    (state) => state.globalStore.totalPastDueAmount
  );
  const totalPastDueProcessed = useSelector(
    (state) => state.globalStore.totalPastDueProcessed
  );

  const convertETimeToHrs = () => {
    let ehours = Math.floor(parseInt(expectedCallingMinutes, 10) / 60);
    return ehours;
  };
  const convertETimeToMin = () => {
    let eminutes = expectedCallingMinutes % 60;
    eminutes = eminutes < 10 ? "0" + eminutes : eminutes;
    return eminutes;
  };
  var expectedCallingMinutesHR = convertETimeToHrs();
  var expectedCallingMinutesMIN = convertETimeToMin();

  const convertCTimeToHrs = () => {
    let chours = Math.floor(parseInt(completedCallingMinutes, 10) / 60);
    return chours;
  };
  const convertCTimeToMin = () => {
    let cminutes = completedCallingMinutes % 60;
    cminutes = cminutes < 10 ? "0" + cminutes : cminutes;
    return cminutes;
  };

  const TotalAmount = () => {
    if (totalPastDueAmount > 999 && totalPastDueAmount < 1000000) {
      return (totalPastDueAmount / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (totalPastDueAmount > 1000000) {
      return (totalPastDueAmount / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (totalPastDueAmount < 900) {
      return totalPastDueAmount; // if value < 1000, nothing to do
    }
  };
  const ProcessedAmount = () => {
    if (totalPastDueProcessed > 999 && totalPastDueProcessed < 1000000) {
      return (totalPastDueProcessed / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (totalPastDueProcessed > 1000000) {
      return (totalPastDueProcessed / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (totalPastDueProcessed < 900) {
      return totalPastDueProcessed; // if value < 1000, nothing to do
    }
  };

  var completedCallingMinutesHR = convertCTimeToHrs();
  var completedCallingMinutesMIN = convertCTimeToMin();
  var filteredtotalPastDueAmount = TotalAmount();
  var filteredtotalPastDueProcessed = ProcessedAmount();

  //console.log(filteredtotalPastDueAmount, filteredtotalPastDueProcessed);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const summaryCust = (
    <ThemeProvider>
      <Typography style={{ fontSize: "19px" }}>
        {processedCustomerCount}/
        <span style={{ fontSize: "13px" }}>{totalCustomerCount}</span>
      </Typography>
      <Typography style={{ fontSize: "14px", color: "#5DAAE0" }}>
        Total Customers called
      </Typography>
    </ThemeProvider>
  );
  const summaryTime = (
    <ThemeProvider>
      <Typography>
        <span style={{ fontSize: "19px" }}>
          {completedCallingMinutesHR}
          <span style={{ fontSize: "13px" }}>hr</span>{" "}
          {completedCallingMinutesMIN}
          <span style={{ fontSize: "13px" }}>min</span>/
        </span>{" "}
        <span style={{ fontSize: "13px" }}>
          {expectedCallingMinutesHR}hr {expectedCallingMinutesMIN}min
        </span>
      </Typography>
      <Typography style={{ fontSize: "14px", color: "#5DAAE0" }}>
        Total Time Spent on Call
      </Typography>
    </ThemeProvider>
  );
  const summaryAmt = (
    <ThemeProvider>
      <Typography>
        <span style={{ fontSize: "19px" }}>
          <span>
            {" "}
            <AttachMoneyIcon />
          </span>
          {filteredtotalPastDueProcessed} /
        </span>{" "}
        <span style={{ fontSize: "13px" }}>$ {filteredtotalPastDueAmount}</span>
      </Typography>
      <Typography style={{ fontSize: "14px", color: "#5DAAE0" }}>
        Total Past Due Touched
      </Typography>
    </ThemeProvider>
  );

  useEffect(() => {
    dispatch(fetchGlobalData());
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "transparent", display: "flex" }}
        elevation={0}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab
            label="TO CALL LIST(12)"
            {...a11yProps(0)}
            className={classes.tabgrp}
          />
          <Tab
            label="FINISHED CALL LIST(15)"
            {...a11yProps(1)}
            className={classes.tabgrp}
            style={{ color: "#5DAAE0BF" }}
            disabled
          />
          <Tab
            label="SEARCH RESULT(21)"
            {...a11yProps(2)}
            className={classes.tabgrp}
            style={{ display: "none" }}
          />
        </Tabs>
        <div style={{ display: "flex", right: 15, position: "fixed" }}>
          <Tabs>
            <Tab
              label={summaryCust}
              className={classes.righttabgrp}
              disableRipple
              style={{ textTransform: "none" }}
            />
          </Tabs>
          <Tabs>
            <Tab
              label={summaryTime}
              className={classes.righttabgrp}
              style={{ textTransform: "none" }}
              disableRipple
            />
          </Tabs>
          <Tabs>
            <Tab
              label={summaryAmt}
              style={{ textTransform: "none" }}
              disableRipple
            />
          </Tabs>
        </div>
      </AppBar>
      <TabPanel value={value} index={0} style={{ marginLeft: "0.8%" }}>
        <ToList />
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <Button
        className={classes.prevbtn}
        onClick={() => {
          dispatch(goToPrevPage());
          dispatch(fetchCustomerdetails(pageNo));
          dispatch(fetchUpcomingCustomerdetails(pageNo));
        }}
        disabled={pageNo <= 0}
        startIcon={
          <img
            src={process.env.PUBLIC_URL + "/Image/prev-arrow.svg"}
            alt="Image not loaded"
          />
        }
      ></Button>
      <Button
        className={classes.nxtbtn}
        onClick={() => {
          dispatch(goToNextPage());
         // console.log("Page no :", pageNo);
          dispatch(fetchCustomerdetails(pageNo));
          dispatch(fetchUpcomingCustomerdetails(pageNo));
        }}
        disabled={pageNo >= 2}
        startIcon={
          <img
            src={process.env.PUBLIC_URL + "/Image/nxt-arrow.svg"}
            alt="Image not loaded"
          />
        }
      ></Button>
    </div>
  );
}
