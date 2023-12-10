import { ApexOptions } from "apexcharts";
import React, { useState,useEffect } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

const options: ApexOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },

  xaxis: {
    categories: [
      "Food",
      "Clothes",
      "Fun",
      "Personal Development",
      "Travel",
      "Groceries",
      "Hair",
    ],
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

interface series {
  name: string;
  data: number[];
}

const AnalyticsCompareCategoryChart = (props:any) => {
  const [state, setState] = useState<series[]>([]);

  const [curCat, setcurCat] = useState<number[]>([]);
  const [lastCat, setlastCat] = useState<number[]>([]);
  useEffect(() => {
    async function submit() {
      const getUser = localStorage.getItem("user");
      if (getUser) {
        const usr = JSON.parse(getUser);
        const _id = usr._id;
        const d = new Date();
        const ts = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
        const curweekend = new Date(ts).toISOString();

        const d__ = new Date(Date.now() - 7 * 864e5);
        const ts__ = Date.UTC(d__.getFullYear(), d__.getMonth(), d__.getDate());
        const curweekstart = new Date(ts__).toISOString();

        const d2__ = new Date(Date.now() - 14 * 864e5);
        const ts2__ = Date.UTC(
          d2__.getFullYear(),
          d2__.getMonth(),
          d2__.getDate()
        );
        const lastweekstart = new Date(ts2__).toISOString();

        const res = await axios.post(
          "http://localhost:5001/expense/getAnalytics",
          {
            _id,
            lastweekstart,
            curweekstart,
            curweekend,
          }
        );
        if (res && res.data) {
          if (res.data.lastCat) setlastCat(res.data.lastCat);
          if (res.data.curCat) setcurCat(res.data.curCat);
          const nw1: series = { name: "Last week", data: lastCat };
          const nw2: series = { name: "Cur week", data: curCat };
          setState([nw1, nw2]);
        }
      }
    }
    submit();
  }, []);


  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Spending By Category for this Month
          </h4>
        </div>
        <div>
         
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-9">
          <ReactApexChart
            options={options}
            series={state}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCompareCategoryChart;
