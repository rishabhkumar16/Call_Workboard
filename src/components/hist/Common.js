import React, { useEffect } from "react";
import Highcharts from "highcharts";
export default function Hist({
  id = "container",
  bucket = [],
  bucketData = [],
  barLabel = [],
  windowWidth = 5,
}) {
  const ProcessedAmount = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
    return num;
  };

  const highchartsRender = () => {
    const hist = Highcharts.chart(id, {
      chart: {
        type: "column",
        backgroundColor: null,
      },
      credits: {
        enabled: false,
      },
      title: {
        text: "",
        style: {
          display: "none",
        },
      },
      xAxis: {
        categories: bucket,
        lineColor: "#FFFFFF80",
        lineWidth: 0.5,
        gridLineColor: "#273D49BF",
        allowDecimals: "0",

        labels: {
          style: {
            color: "white",
            fontFamily: "sans-serif",
            fontSize: 12.4,
            textOverflow: "none",
          },
          rotation: 0,
        },
      },
      yAxis: {
        gridLineColor: "transparent",
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        column: {
          pointPadding: 0,
          pointWidth: 30,
          borderWidth: 0,
          dataLabels: [
            {
              enabled: true,

              formatter() {
                return `<span> ${this.point.y}%<br/> $${ProcessedAmount(
                  this.point.y
                )} </span>`;
                // return `<span> ${this.point.y}% </span>`;
              },
              style: {
                fontSize: 12,
                color: "white",
              },
            },
          ],
        },
      },
      series: [
        {
          data: bucketData,
          color: "#5DAAE0",
        },
      ],
    });
    //console.log(windowWidth);
    hist.setSize(window.innerWidth / windowWidth, window.innerHeight / 3.6);
    return hist;
  };
  useEffect(() => {
    highchartsRender();
    window.addEventListener("resize", highchartsRender);
  }, []);
  return <div id={id} />;
}
