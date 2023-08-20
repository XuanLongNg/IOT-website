import Link from "next/link";
import useStyles from "./style";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import { clsx } from "clsx";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
const HeaderLayout = () => {
  const { classes } = useStyles();
  // const { classesDrawer} = StyleDrawer();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const classNameHeader = clsx("d-flex", classes["style-header"]);
  return (
    <div className={classNameHeader}>
      <ul className="d-flex">
        <li onClick={handleOpen}>
          <DensitySmallIcon />
        </li>
        <li>
          <Link href={"#"}>Dashboard</Link>
        </li>
      </ul>
      <Avatar
        alt="avatar"
        src="images/Nobita.jpg"
        sx={{ width: 50, height: 50 }}
        className="avatar"
      />
      <Drawer
        className={classes["style-drawer"]}
        anchor={"left"}
        open={show}
        onClose={handleClose}
      >
        <div className="drawer-title d-flex justify-content-center align-items-center">
          <h2>Feature</h2>
        </div>
        <div>
          <ul>
            <li>Dashboard</li>
            <li>Temporary</li>
            <li>Light</li>
            <li>Humidity</li>
          </ul>
        </div>
      </Drawer>
    </div>
  );
};
export default HeaderLayout;
