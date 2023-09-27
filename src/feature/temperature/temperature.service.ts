"use client";

import HttpService from "@/common/services/http.service";
import TemperatureType from "./temperature.type";
import { Format_YYYY_MM_DD } from "@/common/utils/getTime";

class TemperatureApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:4000",
    });
  }
  getTemperature() {
    return this.get<TemperatureType[]>(
      `/api/getTemperatureByDate?time=${
        Format_YYYY_MM_DD(new Date().toString()).time
      }`
    );
  }
}

const TemperatureApi = new TemperatureApiServices();

export default TemperatureApi;
