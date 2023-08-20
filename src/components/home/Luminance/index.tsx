"use client";
import * as React from "react";
import CardInformation from "@/common/utils/cardInformation";
const labels = ["January", "February", "March", "April", "May", "June", "July"];
export const data = {
  labels,
  datasets: [
    {
      label: "lux",
      data: labels.map(() => Math.random() * 1),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
export default function Luminance() {
  return (
    <CardInformation title="Luminance" parameter="25" unit="lux" data={data} />
  );
}
