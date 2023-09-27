"use client";
import { useQuery } from "@tanstack/react-query";
import LedApi from "./led.service";

const usePostStateLed = (message: string, number: number) => {
  const queryData = useQuery(["stateLed/post"], {
    queryFn: () => LedApi.postStateLed(message, number),
    keepPreviousData: true,
    enabled: false,
  });

  return queryData;
};
export default usePostStateLed;
