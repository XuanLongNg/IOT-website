"use client";
import Avatar from "@mui/material/Avatar";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
export default function Profile() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Avatar
        alt="avatar"
        src="/images/Nobita.jpg"
        sx={{ width: 80, height: 80 }}
        className="d-flex justify-content-center profile-avatar"
      />
      <div className="profile-information d-flex flex-column justify-content-center align-items-center">
        <Typography variant="h3">Nguyễn Xuân Long</Typography>
        <Typography variant="subtitle1">B20DCCN408</Typography>
      </div>
    </div>
  );
}
