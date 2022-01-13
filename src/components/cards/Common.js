import React from "react";

// Material.js
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader, makeStyles } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

// Components
import Hist from "../hist/Common";

// Use style
const useStyles = makeStyles((theme) => ({
  righttabgrp: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "21.5vw",
    height: "24vh",
  },
  promise: {
    padding: "1.5vw",
    margin: "auto",
    textAlign: "center",
  },
  promiseCount: {
    position: "relative",
    margin: "auto",
    textAlign: "center",
    fontSize: "15px",
  },
}));

// Default Export
export default function Common({
  custName = "Customer name", 
  custNo = "0000000",
  brokenPromise = 0,
  histId = "demo",
  bucket = [],
  data = [],
  label = [],
  loading = true,
  windowWidth = 0,
}) {

  // Use style
  const classes = useStyles();

  return (

    // Card

    <Card
      style={{ height: "38vh", background: "#273D49BF", color: "#FFFFFF80" }}
    >
      {loading ? (
        <Skeleton variant="text" />
      ) : (
        <CardHeader title={custName} action={<span>{custNo}</span>} />
      )}

      <CardContent style={{ display: "flex" }}>
        <div className={classes.righttabgrp}>
          <Hist
            id={histId}
            bucket={bucket}
            bucketData={data}
            barLabel={label}
            windowWidth={windowWidth}
          />
        </div>
        {loading ? (
          <Skeleton variant="rect" width={150} height={240} />
        ) : (
          <div className={classes.promise}>
            <span style={{ fontSize: "25px", color: "white" }}>
              {brokenPromise > 0 && brokenPromise}
            </span>

            {brokenPromise > 0 ? (
              <img
                src={process.env.PUBLIC_URL + "/Image/promisebroken.svg"}
                alt="Please check your Internet Connection"
              />
            ) : (
              <img
                src={process.env.PUBLIC_URL + "/Image/promise.svg"}
                alt="Please check your Internet Connection"
              />
            )}

            <span>
              <br />
              {!(brokenPromise > 0) && "No"} <br /> Broken <br /> Promises
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
