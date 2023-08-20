"use client";
import Light from "@/components/home/Luminance";
import Temperature from "../components/home/Temperature";
import Humidity from "@/components/home/Humidity";
import { Button } from "@mui/material";
import useStyles from "./style";
import ChartComponent from "@/components/home/Chart";
import ButtonLight from "@/components/home/ButtonLight";
import ButtonTemperature from "@/components/home/ButtonTemperature";
export default function Home() {
  const { classes } = useStyles();
  return (
    <div className={classes["style-home-page"]}>
      <div className="d-flex justify-content-between card-mini-dashboard">
        <div>
          <Temperature />
        </div>
        <div>
          <Light />
        </div>
        <div>
          <Humidity />
        </div>
      </div>
      <div className="d-flex">
        <div className="chart">
          <ChartComponent />
        </div>
        <div className="btn-action">
          <div className="btn-light">
            <ButtonLight />
          </div>
          <div className="btn-temperature">
            <ButtonTemperature />
          </div>
        </div>
      </div>
    </div>
  );
}
