"use client";
import { useQuery } from "@tanstack/react-query";
import TemperatureApi from "./temperature.service";

const useGetTemperature = () => {
  const queryData = useQuery(["temperature/GET"], {
    queryFn: () => TemperatureApi.getTemperature(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetTemperature;
