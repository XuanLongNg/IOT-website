import { Button, Switch } from "@mui/material";
import { useState } from "react";
import useStyles from "./style";
import clsx from "clsx";
import Image from "next/image";

export default function ButtonFan() {
  const [stateBtn, setStateBtn] = useState(false);
  const { classes } = useStyles();
  const handleOnclick = () => {
    setStateBtn(stateBtn ? false : true);
  };
  const classNameBtn = clsx(
    "d-flex flex-column justify-content-center align-items-center",
    classes.root
  );
  return (
    <div className={classNameBtn}>
      <div className="content">Temperature</div>
      <Image
        src="/images/fan1.png"
        alt="fan"
        width={100}
        height={100}
        className={stateBtn === true?"fan spin": "fan"}
      />
      <Switch
        // className="btn-action d-flex justify-content-center align-items-end"
        onClick={handleOnclick}
      />
    </div>
  );
}
