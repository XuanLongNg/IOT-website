"use client";
import { useQuery } from "@tanstack/react-query";
import DataDeviceApi from "./dataDevice.service";

const useGetDataDevice = () => {
  const queryData = useQuery(["dataDevice/GET"], {
    queryFn: () => DataDeviceApi.getDataDeviceApi(),
    keepPreviousData: true,
  });

  return queryData;
};
export default useGetDataDevice;
