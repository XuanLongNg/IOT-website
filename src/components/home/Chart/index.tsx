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
const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Luminance (lux)",
      borderColor: "rgb(253, 242, 35)",
      backgroundColor: "rgba(253, 242, 35,0.5)",
      fill: false,
      data: labels.map(() => Math.floor(Math.random() * 101)),
    },
    {
      type: "line" as const,
      label: "temperature (oC)",
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: true,
      data: labels.map(() => Math.floor(Math.random() * 101)),
    },
    {
      type: "line" as const,
      label: "humidity (%)",
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: true,
      data: labels.map(() => Math.floor(Math.random() * 101)),
    },
  ],
};
export const options = {
  responsive: true,
  //   scales: {
  //     x: {
  //       display: false,
  //     },
  //     y: {
  //       display: false,
  //     },
  //   },
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
    },
  },
};
export default function ChartComponent() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Dashboard
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Chart type="line" data={data} />
      </CardContent>
    </Card>
  );
}
