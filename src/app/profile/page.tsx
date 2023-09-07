"use client";
import Avatar from "@mui/material/Avatar";
import useStyles from "./style";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
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
        <Typography variant="subtitle1">H20HTTT06</Typography>
        <div className="container-icon">
          <Button href="https://www.facebook.com/XuanLongNXL">
            <FacebookIcon />
          </Button>
          <Button href="https://github.com/XuanLongNg">
            <GitHubIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
