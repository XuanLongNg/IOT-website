"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
import { Bar, Chart, Line } from "react-chartjs-2";
import TemperatureType from "../../../feature/temperature/temperature.type";
import LuminanceType from "@/feature/luminance/luminance.type";
import HumidityType from "@/feature/humidity/humidity.type";
import { getTime } from "@/common/utils/getTime";

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart - Multi Axis",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
export default function ChartComponent({
  temperature,
  luminance,
  humidity,
}: {
  temperature: TemperatureType[] | undefined;
  luminance: LuminanceType[] | undefined;
  humidity: HumidityType[] | undefined;
}) {
  const labels: string[] = humidity
    ? humidity.map((data: HumidityType) => getTime(data.time).time)
    : [];
  humidity?.sort((a: any, b: any) => {
    const t1: any = getTime(a.time),
      t2: any = getTime(b.time);
    if (t1.hours == t2.hours) {
      if (t1.minutes == t2.minutes) {
        return t1.seconds - t2.seconds;
      }
      return t1.minutes - t2.minutes;
    }
    return t1.hours - t2.hours;
  });
  luminance?.sort((a: any, b: any) => {
    const t1: any = getTime(a.time),
      t2: any = getTime(b.time);
    if (t1.hours == t2.hours) {
      if (t1.minutes == t2.minutes) {
        return t1.seconds - t2.seconds;
      }
      return t1.minutes - t2.minutes;
    }
    return t1.hours - t2.hours;
  });
  temperature?.sort((a: any, b: any) => {
    const t1: any = getTime(a.time),
      t2: any = getTime(b.time);
    if (t1.hours == t2.hours) {
      if (t1.minutes == t2.minutes) {
        return t1.seconds - t2.seconds;
      }
      return t1.minutes - t2.minutes;
    }
    return t1.hours - t2.hours;
  });
  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Luminance (lux)",
        borderColor: "rgb(253, 242, 35)",
        backgroundColor: "rgba(253, 242, 35,0.5)",
        fill: false,
        data: luminance ? luminance.map((data) => data.luminance % 10001) : [],
        yAxisID: "y1",
      },
      {
        type: "line" as const,
        label: "temperature (oC)",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
        data: temperature
          ? temperature.map((data) => data.temperature % 101)
          : [],
        yAxisID: "y",
      },
      {
        type: "line" as const,
        label: "humidity (%)",
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
        data: humidity ? humidity.map((data) => data.humidity % 101) : [],
        yAxisID: "y",
      },
    ],
  };
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Dashboard
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Chart type="line" data={data} options={options} />
      </CardContent>
    </Card>
  );
}
