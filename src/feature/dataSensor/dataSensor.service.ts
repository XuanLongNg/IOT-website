"use client";

import HttpService from "@/common/services/http.service";
import DataSensorType from "./dataSensor.type";

class DataSensorApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:4000",
    });
  }
  getDataSensorApi() {
    return this.get<DataSensorType[]>(`/api/getDataSensor`);
  }
}

const DataSensorApi = new DataSensorApiServices();

export default DataSensorApi;
