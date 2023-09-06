"use client";

import HttpService from "@/common/services/http.service";
import TemperatureType from "./temperature.type";

class TemperatureApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "https://64e33753bac46e480e786762.mockapi.io/",
    });
  }
  getTemperature() {
    return this.get<TemperatureType[]>("/temperature");
  }
}

const TemperatureApi = new TemperatureApiServices();

export default TemperatureApi;
