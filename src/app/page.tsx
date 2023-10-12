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
import { useEffect, useState } from "react";
import BasicBreadcrumbs from "@/common/utils/breadcrumbs";
import socket from "@/common/services/websocket.service";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import Dust from "@/components/home/Dust";
import useGetDust from "@/feature/dust/useGetDust";
import Warning from "@/components/home/warning";

export default function Home() {
  const { classes } = useStyles();
  const [warning, setWarning] = useState<boolean>(false);
  const luminanceData = useGetLuminance().data,
    luminanceLoading = useGetLuminance().isLoading,
    temperatureData = useGetTemperature().data,
    temperatureLoading = useGetTemperature().isLoading,
    humidityData = useGetHumidity().data,
    humidityLoading = useGetHumidity().isLoading,
    dustData = useGetDust().data,
    dustLoading = useGetDust().isLoading;
  const queryClient = useQueryClient();
  const setWarningValue = (value: boolean) => {
    setWarning(value);
  };
  useEffect(() => {
    socket.on("announce", (message: string) => {
      // console.log("Socket: ", message);
      queryClient.invalidateQueries(["temperature/GET"]);
      queryClient.invalidateQueries(["humidity/GET"]);
      queryClient.invalidateQueries(["luminance/GET"]);
      queryClient.invalidateQueries(["dust/GET"]);
    });
  }, []);
  return (
    <div className={classes["style-home-page"]}>
      <div className="breadcrumbs">
        <BasicBreadcrumbs present="Dashboard" navigation={[]} />
      </div>
      <div className="d-flex justify-content-between card-mini-dashboard">
        <div>
          <Temperature
            data={temperatureData}
            isLoading={temperatureLoading}
            warning={warning}
          />
        </div>
        <div>
          <Light
            data={luminanceData}
            isLoading={luminanceLoading}
            warning={warning}
          />
        </div>
        <div>
          <Humidity
            data={humidityData}
            isLoading={humidityLoading}
            warning={warning}
          />
        </div>
        <div>
          <Dust
            data={dustData}
            isLoading={dustLoading}
            warning={warning}
            setWarning={setWarningValue}
          />
        </div>
      </div>
      <div className="d-flex">
        <div className="chart">
          <ChartComponent
            temperature={temperatureData}
            humidity={humidityData}
            luminance={luminanceData}
            dust={dustData}
          />
        </div>
        <div className="btn-action">
          <div className="btn-light">
            <ButtonLight />
          </div>
          <div className="btn-temperature">
            <ButtonFan />
          </div>
        </div>
        <div className="warning">
          <Warning warning={warning} />
        </div>
      </div>
    </div>
  );
}
