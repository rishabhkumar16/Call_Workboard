import React, { useEffect } from "react";
import Highcharts from "highcharts";
export default function Hist({
  bucketData=[]
}) {
  const highchartsRender = () => {
    const hist = Highcharts.chart("Test ID", {
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
        categories: [
          "Current Due",
          "0-30",
          "31-60",
          "61-90",
          "91-180",
          "181-360",
          ">361",
        ],
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
                // return `<span> ${this.point.y}%<br/> $${ProcessedAmount(
                //   this.point.y
                // )} </span>`;
                return `<span> ${this.point.y}% </span>`;
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
          // data: [8, 12, 40, 27, 11, 0, 0],
          data:bucketData,
          color: "#5DAAE0",
        },
      ],
    });
    hist.setSize(window.innerWidth / 3.4, window.innerHeight / 3.6);
    return hist;
  };
  useEffect(() => {
    highchartsRender();
    window.addEventListener("resize", highchartsRender);
  }, []);
  return <div id="Test ID" />;
}
