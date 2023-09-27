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
  Title,
  Tooltip,
  Legend
);
import { Line } from "react-chartjs-2";
import clsx from "clsx";
export interface DataDashBoardType {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}
export const options = {
  responsive: true,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};
export default function CardInformation({
  title,
  parameter,
  unit,
  data,
  classes,
  newClass = "",
}: {
  title: string;
  parameter: number;
  unit: string;
  data: DataDashBoardType | undefined;
  classes: any;
  newClass: string;
}) {
  const className = clsx(classes["root"], newClass);

  return (
    <Card className={className}>
      <CardContent>
        <Typography variant="h5" component="div">
          {parameter}{" "}
          {unit == "C" ? (
            <>
              <sup>o</sup>C
            </>
          ) : (
            unit
          )}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {title}
        </Typography>
        {!data?.datasets && <>Loading...</>}
        {data?.datasets && <Line options={options} data={data} />}
      </CardContent>
    </Card>
  );
}
