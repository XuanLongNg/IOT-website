"use client";
import * as React from "react";
import CardInformation from "@/common/utils/cardInformation";
import useStyles from "./style";
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "temperature",
      data: labels.map(() => Math.floor(Math.random() * 1110) / 10),
      borderColor: "white",
      backgroundColor: "red",
    },
  ],
};
export default function Temperature() {
  const { classes } = useStyles();
  return (
    <CardInformation
      title="Temperature"
      parameter="25"
      unit="C"
      data={data}
      classes={classes}
    />
  );
}
