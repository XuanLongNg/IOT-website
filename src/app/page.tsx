import Light from "@/components/home/Luminance";
import Temperature from "../components/home/Temperature";
import Humidity from "@/components/home/Humidity";
import { Button } from "@mui/material";
import styled from "@/styles/page.module.css";
export default function Home() {
  return (
    <div className={styled["container-tmp"]}>
      <div className="d-flex justify-content-around">
        <div>
          <Temperature />
        </div>
        <div>
          <Light />
        </div>
        <div>
          <Humidity />
        </div>
      </div>
      <div></div>
      <div>
        <div>
          <Button>On/Off</Button>
        </div>
        <div>
          <Button>On/Off</Button>
        </div>
      </div>
    </div>
  );
}
