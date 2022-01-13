import React from "react";

// Material Card
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader } from "@material-ui/core";

// Components
import Common from "./Common";
import Hist from "../hist/Upcoming";

export default function SixthCard({ upcomingcustomerDetails }) {
  const histId = "Sixth Card";
  

  return (
    <>
      <Card
        style={{ height: "38vh", background: "#273D49BF", color: "#FFFFFF80" }}
      >
        <CardHeader title={"Remaining Balance Summary"} />
        <CardContent>
          {upcomingcustomerDetails.length > 0 && (
            <Hist
              id={histId}
              //bucket={upcomingcustomerDetails["upcomingPastDueBucketDocumentCount"]}
              bucket={[
                "Current Due",
                "0-30",
                "31-60",
                "61-90",
                "91-180",
                "181-360",
                ">361",
              ]}
              bucketData={upcomingcustomerDetails}
              windowWidth={3.3}
              // barLabel={label}
            />
          )}
        </CardContent>
      </Card>
    </>
  );
}
