"use client";

import HttpService from "@/common/services/http.service";
import LuminanceType from "./luminance.type";

class LuminanceApiServices extends HttpService {
  constructor() {
    super({
      baseURL: "https://64e33753bac46e480e786762.mockapi.io/",
    });
  }
  getLuminance() {
    return this.get<LuminanceType[]>("/luminance");
  }
}

const LuminanceApi = new LuminanceApiServices();

export default LuminanceApi;
