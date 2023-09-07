"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import useStyles from "./style";
import { format } from "date-fns";
import Typography from "@mui/material/Typography";
import BasicBreadcrumbs from "@/common/utils/breadcrumbs";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    // width: 10
  },
  {
    field: "sensorId",
    headerName: "Sensor ID",
    // width: 130
  },
  {
    field: "action",
    headerName: "Action",
    type: "number",
    // width: 130,
  },
  {
    field: "time",
    headerName: "Time",
    // width: 230,
    minWidth: 200,
  },
];

const rows = [
  {
    id: 1,
    sensorId: "123131",
    time: format(new Date(219317317317), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn on",
  },
  {
    id: 2,
    sensorId: "123516",
    time: format(new Date(818273713611), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn off",
  },
  {
    id: 3,
    sensorId: "123516",
    time: format(new Date(1313131241578), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn on",
  },
  {
    id: 4,
    sensorId: "123516",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn on",
  },
  {
    id: 5,
    sensorId: "123516",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn off",
  },
  {
    id: 6,
    sensorId: "1235882",
    time: format(new Date(93871312313), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn off",
  },
  {
    id: 7,
    sensorId: "123818",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn on",
  },
  {
    id: 8,
    sensorId: "123516",
    time: format(new Date(93871378137), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn off",
  },
  {
    id: 9,
    sensorId: "1231816",
    time: format(new Date(83183162381), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn on",
  },
  {
    id: 10,
    sensorId: "12351621",
    time: format(new Date(17182371837), "yyyy-MM-dd HH:mm:ss"),
    action: "Turn on",
  },
];

export default function DataTable() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className="container">
        <div className="breadcrumbs">
          <BasicBreadcrumbs
            present="Action"
            navigation={[{ content: "Dashboard", href: "/" }]}
          />
        </div>

        <Typography variant="h5">Action History</Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          // className="d-flex justify-content-center align-items-center"
          // checkboxSelection
        />
      </div>
    </div>
  );
}
