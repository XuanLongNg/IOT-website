"use client";

import HttpService from "@/common/services/http.service";
import HumidityType from "./humidity.type";

class HumidityApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "https://64e33753bac46e480e786762.mockapi.io/",
    });
  }
  getHumidity() {
    return this.get<HumidityType[]>("/luminance");
  }
}

const HumidityApi = new HumidityApiServices();

export default HumidityApi;
