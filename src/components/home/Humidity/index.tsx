"use client";
import * as React from "react";
import CardInformation from "@/common/utils/cardInformation";
import useStyles from "./style";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "humidity",
      data: labels.map(() => Math.floor(Math.random() * 101)),
      borderColor: "white",
      backgroundColor: "#00ADD7",
    },
  ],
};
export default function Humidity() {
  const { classes } = useStyles();
  return (
    <CardInformation
      title="Humidity"
      parameter="25"
      unit="%"
      data={data}
      classes={classes}
    />
  );
}
