import { Button, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
import useStyles from "./style";
import Image from "next/image";
import clsx from "clsx";
import usePostStateLed from "@/feature/led/usePostStateLed";
import LedApi from "@/feature/led/led.service";
export default function ButtonLight() {
  const [stateBtn, setStateBtn] = useState(false);
  const { classes } = useStyles();
  const { data, isLoading } = usePostStateLed("0", 1);

  const handleOnclick = () => {
    const message = !stateBtn ? "1" : "0";
    LedApi.postStateLed(message, 1);
    setStateBtn(stateBtn ? false : true);
  };

  const classNameBtn = clsx(
    "d-flex flex-column justify-content-center align-items-center",
    classes.root
  );
  return (
    <div className={classNameBtn}>
      <div className="content">Light</div>
      {!stateBtn && (
        <Image
          src="/images/light-off.png"
          width={(600 / 800) * 100}
          height={100}
          alt="light off"
          className="light-off"
        />
      )}
      {stateBtn && (
        <Image
          src="/images/light-on.png"
          width={(600 / 800) * 100}
          height={100}
          alt="light on"
          className="light-on"
        />
      )}

      {/* <Button
        className="btn-action d-flex justify-content-center align-items-end"
        variant="contained"
        onClick={handleOnclick}
      >
        {stateBtn ? "Turn off" : "Turn on"}
      </Button> */}
      <Switch
        // className="btn-action d-flex justify-content-center align-items-end"
        onClick={handleOnclick}
      />
    </div>
  );
}
