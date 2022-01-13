import React from "react";
import Common from "./Common";

export default function ThirdCard({ customerDetails, loading }) {
  const histId = "Third Card";
  var example = [customerDetails["totalCurrentOpenAmount"]].concat(
    customerDetails["pastDueBucketDocumentAmount"]
  );

  const sum = example.reduce(add, 0); // with initial value to avoid when the array is empty
  function add(accumulator, a) {
    return accumulator + a;
  }

  example = example.map((x) => (x / sum) * 100);
  var i;
  for (i = 0; i < example.length; i++) {
    example[i] = example[i].toFixed(2);
    example[i] = parseInt(example[i]);
  }

  return (
    <Common
      custName={customerDetails["customerName"]}
      custNo={customerDetails["customerNumber"]}
      bucket={["Current Due"].concat(customerDetails["bucketNames"])}
      data={example}
      histId={histId}
      brokenPromise={customerDetails["totalBrokenPromises"]}
      loading={loading}
      windowWidth={4.6}
    />
  );
}
