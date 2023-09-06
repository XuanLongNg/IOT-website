"use client";
import Light from "@/components/home/Luminance";
import Temperature from "../components/home/Temperature";
import Humidity from "@/components/home/Humidity";
import useStyles from "./style";
import ChartComponent from "@/components/home/Chart";
import ButtonLight from "@/components/home/ButtonLight";
import ButtonFan from "@/components/home/ButtonFan";
import useGetLuminance from "@/feature/luminance/useGetLuminance";
import useGetTemperature from "@/feature/temperature/useGetTemperature";
import useGetHumidity from "@/feature/humidity/useGetHumidity";
export default function Home() {
  const { classes } = useStyles();
  const luminanceData = useGetLuminance().data,
    luminanceLoading = useGetLuminance().isLoading,
    temperatureData = useGetTemperature().data,
    temperatureLoading = useGetTemperature().isLoading,
    humidityData = useGetHumidity().data,
    humidityLoading = useGetHumidity().isLoading;
  return (
    <div className={classes["style-home-page"]}>
      <div className="d-flex justify-content-between card-mini-dashboard">
        <div>
          <Temperature data={temperatureData} isLoading={temperatureLoading} />
        </div>
        <div>
          <Light data={luminanceData} isLoading={luminanceLoading} />
        </div>
        <div>
          <Humidity data={humidityData} isLoading={humidityLoading} />
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
            <ButtonFan />
          </div>
        </div>
      </div>
    </div>
  );
}
