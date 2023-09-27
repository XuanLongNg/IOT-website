"use client";

import HttpService from "@/common/services/http.service";
import DataDeviceType from "./dataDevice.type";

class DataDeviceApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "http://localhost:4000",
    });
  }
  getDataDeviceApi() {
    return this.get<DataDeviceType[]>(`/api/getDataDevice`);
  }
}

const DataDeviceApi = new DataDeviceApiServices();

export default DataDeviceApi;
