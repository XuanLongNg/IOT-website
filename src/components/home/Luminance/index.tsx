"use client";
import * as React from "react";
import CardInformation from "@/common/utils/cardInformation";
import useStyles from "./style";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "luminance",
      data: labels.map(() => Math.random() * 1),
      borderColor: "white",
      backgroundColor: "#F7A531",
    },
  ],
};
export default function Luminance() {
  const { classes } = useStyles();
  return (
    <CardInformation
      title="Luminance"
      parameter="25"
      unit="lux"
      data={data}
      classes={classes}
    />
  );
}
