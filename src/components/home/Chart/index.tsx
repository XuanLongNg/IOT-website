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
  Filler,
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
  Filler,
  Legend
);
import { Bar, Chart, Line } from "react-chartjs-2";
import TemperatureType from "../../../feature/temperature/temperature.type";
import LuminanceType from "@/feature/luminance/luminance.type";
import HumidityType from "@/feature/humidity/humidity.type";
import { Format_HH_mm_ss } from "@/common/utils/getTime";

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
    ? humidity
        .slice(humidity.length - 20, humidity.length)
        .map((data: HumidityType) => Format_HH_mm_ss(data.time).time)
    : [];
  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Luminance (lux)",
        borderColor: "rgb(253, 242, 35)",
        backgroundColor: "rgba(253, 242, 35,0.5)",
        fill: false,
        data: luminance
          ? luminance
              .slice(luminance.length - 20, luminance.length)
              .map((data) => data.luminance % 10001)
          : [],
        yAxisID: "y1",
      },
      {
        type: "line" as const,
        label: "temperature (oC)",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
        data: temperature
          ? temperature
              .slice(temperature.length - 20, temperature.length)
              .map((data) => data.temperature)
          : [],
        yAxisID: "y",
      },
      {
        type: "line" as const,
        label: "humidity (%)",
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
        data: humidity
          ? humidity
              .slice(humidity.length - 20, humidity.length)
              .map((data) => data.humidity)
          : [],
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
