import React from "react";
import Card from "@material-ui/core/Card";
import Skeleton from "@material-ui/lab/Skeleton";

import { CardContent, CardHeader, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    righttabgrp: {
      borderRight: `1px solid ${theme.palette.divider}`,
      width: "21.5vw",
      height: "23.5vh",
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

export default function LoaderCard() {
    const classes = useStyles();
  return (
    <>
      <Card
        style={{ height: "38vh", background: "#273D49BF", color: "#FFFFFF80" }}
      >
        <Skeleton variant="text" />
        <Skeleton variant="text" />

        <div className={classes.righttabgrp}>
        
        </div>

        <div className={classes.promise}>
        <Skeleton variant="rect" width={150} height={240} />
            </div>
      
      </Card>
    </>
  );
}
