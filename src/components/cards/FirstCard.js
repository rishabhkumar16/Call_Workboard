import React from "react";

// Default Card
import Common from "./Common";

// Export default
export default function FirstCard({ customerDetails,loading }) {

    // Highchart Id
  const histId = "First Card";

//   Customizing data
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
      label={[customerDetails["totalCurrentOpenAmount"]].concat(
        customerDetails["pastDueBucketDocumentAmount"]
      )}
      loading={loading}
      windowWidth = {4.6}
    />
  );
}
